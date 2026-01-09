'use client';

import { CDTData } from '../page';

interface PlazoInfo {
  plazo: number;
  tasaEA: number;
  label?: string;
}

interface ResultadosPlazosProps {
  resultados: CDTData[];
  plazosInfo: PlazoInfo[];
  seleccionado: CDTData | null;
  onSeleccionar: (cdt: CDTData) => void;
  onInvertir: () => void;
  onVolver: () => void;
}

export default function ResultadosPlazos({
  resultados,
  plazosInfo,
  seleccionado,
  onSeleccionar,
  onInvertir,
  onVolver,
}: ResultadosPlazosProps) {
  return (
    <div className="fade-in">
      <div className="flex items-center gap-4 mb-6">
        <button
          onClick={onVolver}
          className="text-gray-500 hover:text-gray-700 flex items-center gap-1"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Volver
        </button>
      </div>

      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Resultado de la Simulación
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {resultados.map((cdt, index) => {
          const info = plazosInfo[index];
          const isSelected = seleccionado?.plazo === cdt.plazo;
          const isBest = info.label === 'Mejor opción';

          return (
            <div
              key={cdt.plazo}
              onClick={() => onSeleccionar(cdt)}
              className={`card-option ${isSelected ? 'selected' : ''} ${isBest ? 'best' : ''}`}
            >
              {isBest && (
                <span className="absolute -top-3 left-4 bg-[#ffd100] text-gray-800 text-xs font-semibold px-3 py-1 rounded-full">
                  Mejor opción
                </span>
              )}

              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-gray-500">Total</span>
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                  isSelected ? 'border-[#00a651] bg-[#00a651]' : 'border-gray-300'
                }`}>
                  {isSelected && (
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
              </div>

              <p className="text-2xl font-bold text-gray-800 mb-3">
                ${cdt.total.toLocaleString('es-CO')}
              </p>

              <div className="space-y-1 text-sm text-gray-600">
                <p><span className="font-medium">Plazo:</span> {cdt.plazo} meses</p>
                <p><span className="font-medium">Tasa E.A.:</span> {cdt.tasaEA}%</p>
                <p><span className="font-medium">Retención:</span> ${cdt.retencion.toLocaleString('es-CO')}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-gray-50 rounded-lg p-4 mb-6 text-sm text-gray-600">
        <p className="mb-2">
          Este valor puede cambiar dependiendo de las tasas aplicables y las características específicas de cada producto financiero.
        </p>
        <p>
          Esta simulación es únicamente informativa y no constituye una oferta comercial.
        </p>
      </div>


      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={onInvertir}
          disabled={!seleccionado}
          className="btn-primary flex-1 text-lg"
        >
          Invertir ahora
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        <button
          onClick={onVolver}
          className="btn-secondary flex-1"
        >
          Seguir simulando
        </button>
      </div>
    </div>
  );
}
