'use client';

import { useState } from 'react';

interface SimuladorCDTProps {
  onSimular: (monto: number) => void;
}

export default function SimuladorCDT({ onSimular }: SimuladorCDTProps) {
  const [monto, setMonto] = useState<string>('');
  const [error, setError] = useState<string>('');

  const formatearMonto = (valor: string): string => {
    const numero = valor.replace(/\D/g, '');
    return numero.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  };

  const handleMontoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valorFormateado = formatearMonto(e.target.value);
    setMonto(valorFormateado);
    setError('');
  };

  const handleSimular = () => {
    const montoNumerico = parseInt(monto.replace(/\./g, ''), 10);

    if (isNaN(montoNumerico) || montoNumerico < 50000) {
      setError('El monto mínimo es $50.000');
      return;
    }

    onSimular(montoNumerico);
  };

  return (
    <div className="fade-in max-w-2xl">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">
        Simula tu CDT
      </h1>
      <p className="text-gray-600 mb-8">
        Completa los campos para tener la simulación de tu CDT.
      </p>

      {/* Card de información */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-6">
        <h2 className="text-sm font-semibold text-gray-700 mb-6 uppercase tracking-wide">
          Información sobre el producto
        </h2>

        <div className="space-y-6">
          {/* Input Monto - Floating Label Style */}
          <div className="relative">
            <div className={`border-2 rounded-lg transition-colors ${
              error ? 'border-red-400' : 'border-gray-200 focus-within:border-[#009330]'
            }`}>
              <div className="relative">
                <input
                  type="text"
                  id="monto"
                  value={monto}
                  onChange={handleMontoChange}
                  placeholder=" "
                  className="peer w-full px-4 pt-6 pb-2 text-gray-800 bg-transparent outline-none text-lg"
                />
                <label
                  htmlFor="monto"
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 transition-all duration-200 pointer-events-none
                    peer-placeholder-shown:text-base peer-placeholder-shown:top-1/2
                    peer-focus:text-xs peer-focus:top-3 peer-focus:text-[#009330]
                    peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:top-3"
                >
                  ¿Cuánto dinero quieres invertir?
                </label>
                {/* Info Icon */}
                <button
                  type="button"
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#009330] text-white flex items-center justify-center text-sm font-bold"
                  title="Información"
                >
                  i
                </button>
              </div>
            </div>
            {error ? (
              <p className="text-red-500 text-sm mt-2">{error}</p>
            ) : (
              <p className="text-gray-500 text-sm mt-2">El monto mínimo es $50.000</p>
            )}
          </div>

          {/* Input Intereses - Floating Label Style */}
          <div className="relative">
            <div className="border-2 border-gray-200 rounded-lg bg-gray-50">
              <div className="relative">
                <input
                  type="text"
                  id="intereses"
                  value="Al vencimiento"
                  disabled
                  className="w-full px-4 pt-6 pb-2 text-gray-600 bg-transparent outline-none text-lg cursor-not-allowed"
                />
                <label
                  htmlFor="intereses"
                  className="absolute left-4 top-3 text-xs text-[#009330] pointer-events-none"
                >
                  ¿Cuándo recibirás tus intereses generados?
                </label>
                {/* Info Icon */}
                <button
                  type="button"
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#009330] text-white flex items-center justify-center text-sm font-bold"
                  title="Información"
                >
                  i
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimers */}
        <ul className="text-sm text-gray-600 space-y-2 mt-8 list-disc list-inside">
          <li>
            <span className="italic">Los valores presentados son representativos y pueden variar al momento de constitución del título.</span>
          </li>
          <li>
            <span className="italic">Las tasas presentadas en este simulador corresponden exclusivamente a aperturas realizadas a través de WhatsApp.</span>
          </li>
        </ul>

        {/* Button */}
        <button
          onClick={handleSimular}
          className="w-full mt-8 bg-[#009330] hover:bg-[#007a28] text-white font-semibold py-4 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 text-lg"
        >
          Simular CDT
          <span className="text-xl">→</span>
        </button>
      </div>
    </div>
  );
}
