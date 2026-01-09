'use client';

import { useState } from 'react';
import Image from 'next/image';
import SimuladorCDT from './components/SimuladorCDT';
import ResultadosPlazos from './components/ResultadosPlazos';
import FormularioValidacion from './components/FormularioValidacion';
import ValidacionLoading from './components/ValidacionLoading';
import ValidacionExito from './components/ValidacionExito';
import ValidacionRechazo from './components/ValidacionRechazo';

export type Step = 'simulador' | 'resultados' | 'validacion' | 'loading' | 'exito' | 'rechazo';

export interface CDTData {
  monto: number;
  plazo: number;
  tasaEA: number;
  retencion: number;
  total: number;
  intereses: number;
  vtup: number;
}

export interface UserData {
  cedula: string;
  nombre: string;
  celular: string;
}

const PLAZOS_CDT = [
  { plazo: 24, tasaEA: 10.8, label: 'Mejor opción' },
  { plazo: 18, tasaEA: 10.7 },
  { plazo: 12, tasaEA: 10.6 },
  { plazo: 9, tasaEA: 8.6 },
  { plazo: 6, tasaEA: 10.25 },
  { plazo: 4, tasaEA: 10.05 },
  { plazo: 3, tasaEA: 9.65 },
];

function calcularCDT(monto: number, plazo: number, tasaEA: number): CDTData {
  const tasaMensual = Math.pow(1 + tasaEA / 100, 1 / 12) - 1;
  const interesesBrutos = monto * (Math.pow(1 + tasaMensual, plazo) - 1);
  const retencion = interesesBrutos * 0.04;
  const intereses = interesesBrutos - retencion;
  const total = monto + intereses;
  const vtup = ((total - monto) / monto) * 100;

  return {
    monto,
    plazo,
    tasaEA,
    retencion: Math.round(retencion),
    total: Math.round(total),
    intereses: Math.round(intereses),
    vtup: Math.round(vtup * 100) / 100,
  };
}

export default function Home() {
  const [step, setStep] = useState<Step>('simulador');
  const [monto, setMonto] = useState<number>(0);
  const [cdtSeleccionado, setCdtSeleccionado] = useState<CDTData | null>(null);
  const [userData, setUserData] = useState<UserData>({ cedula: '', nombre: '', celular: '' });
  const [resultados, setResultados] = useState<CDTData[]>([]);

  const handleSimular = (montoIngresado: number) => {
    setMonto(montoIngresado);
    const nuevosResultados = PLAZOS_CDT.map(p => calcularCDT(montoIngresado, p.plazo, p.tasaEA));
    setResultados(nuevosResultados);
    setStep('resultados');
  };

  const handleSeleccionarPlazo = (cdt: CDTData) => {
    setCdtSeleccionado(cdt);
  };

  const handleInvertirAhora = () => {
    setStep('validacion');
  };

  const handleValidar = (data: UserData) => {
    setUserData(data);
    setStep('loading');

    setTimeout(() => {
      if (data.cedula.startsWith('999')) {
        setStep('rechazo');
      } else {
        setStep('exito');
      }
    }, 2500);
  };

  const handleVolverSimulador = () => {
    setStep('simulador');
    setMonto(0);
    setCdtSeleccionado(null);
    setResultados([]);
  };

  const handleVolverResultados = () => {
    setStep('resultados');
  };

  const generarURLWhatsApp = (): string => {
    if (!cdtSeleccionado || !userData.nombre) return '';

    const mensaje = `¡Hola Mibanco! 👋
Quiero abrir un CDT y estos son los datos de mi inversión:
💰 Monto: $${cdtSeleccionado.monto.toLocaleString('es-CO')}
📅 Plazo: ${cdtSeleccionado.plazo} meses
📈 Tasa E.A.: ${cdtSeleccionado.tasaEA}%
💵 Interés estimado: $${cdtSeleccionado.intereses.toLocaleString('es-CO')}
✅ Total al vencimiento: $${cdtSeleccionado.total.toLocaleString('es-CO')}

Mis datos:
📋 Cédula: ${userData.cedula}
👤 Nombre: ${userData.nombre}
📱 Celular: ${userData.celular}`;

    return `https://api.whatsapp.com/send/?phone=573134790866&text=${encodeURIComponent(mensaje)}`;
  };

  return (
    <div className="min-h-screen flex">
      {/* Main Content Area */}
      <div className="flex-1 bg-gray-50 flex flex-col">
        {/* Top Bar */}
        <header className="bg-[#1a1a1a] text-white py-3 px-6 flex items-center justify-between">
          <a href="/mbc-gallery" className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors">
            <span>←</span>
            <span>Galería</span>
          </a>
          <div className="flex items-center gap-3">
            <a
              href="/docs"
              className="flex items-center gap-1.5 text-white/70 hover:text-white transition-colors text-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Docs
            </a>
            <span className="bg-[#FFCE00] text-[#1a1a1a] px-4 py-1 rounded-full text-sm font-semibold">
              MEJORA CDT - MVP
            </span>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 p-8 overflow-y-auto">
          {step === 'simulador' && (
            <SimuladorCDT onSimular={handleSimular} />
          )}

          {step === 'resultados' && (
            <ResultadosPlazos
              resultados={resultados}
              plazosInfo={PLAZOS_CDT}
              seleccionado={cdtSeleccionado}
              onSeleccionar={handleSeleccionarPlazo}
              onInvertir={handleInvertirAhora}
              onVolver={handleVolverSimulador}
            />
          )}

          {step === 'validacion' && cdtSeleccionado && (
            <FormularioValidacion
              cdt={cdtSeleccionado}
              onValidar={handleValidar}
              onVolver={handleVolverResultados}
            />
          )}

          {step === 'loading' && (
            <ValidacionLoading />
          )}

          {step === 'exito' && cdtSeleccionado && (
            <ValidacionExito
              nombre={userData.nombre}
              cdt={cdtSeleccionado}
              whatsappUrl={generarURLWhatsApp()}
            />
          )}

          {step === 'rechazo' && (
            <ValidacionRechazo
              nombre={userData.nombre}
              celular={userData.celular}
              onEntendido={handleVolverSimulador}
            />
          )}
        </main>
      </div>

      {/* Green Sidebar */}
      <aside className="w-[400px] bg-gradient-to-b from-[#009330] to-[#006622] flex flex-col items-center justify-center">
        <div className="flex flex-col items-center gap-6">
          {/* Logo Mibanco */}
          <Image
            src="/logo-dkbg-mb.svg"
            alt="Mibanco"
            width={280}
            height={135}
            priority
          />

          {/* Credicorp text */}
          <p className="text-white/80 text-sm tracking-widest uppercase">
            Somos parte de Credicorp
          </p>
        </div>
      </aside>
    </div>
  );
}
