'use client';

interface ValidacionRechazoProps {
  nombre: string;
  celular: string;
  onEntendido: () => void;
}

export default function ValidacionRechazo({ nombre, celular, onEntendido }: ValidacionRechazoProps) {
  const primerNombre = nombre.split(' ')[0];
  const celularFormateado = celular.replace(/(\d{3})(\d{3})(\d{4})/, '$1 $2 $3');

  return (
    <div className="fade-in flex flex-col items-center justify-center py-12">
      {/* Info Icon - neutral, informative */}
      <div className="mb-6">
        <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center">
          <svg className="w-10 h-10 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">
        {primerNombre}, gracias por tu interés
      </h2>

      {/* Message Box - honest framing */}
      <div className="bg-white rounded-xl border p-6 w-full max-w-md my-6">
        <p className="text-gray-700 mb-4">
          En este momento no tenemos una oferta lista para ti.
        </p>
        <p className="text-gray-600 text-sm">
          De calificar, te contactaremos durante los siguientes días al número que registraste.
        </p>

        <div className="bg-gray-50 rounded-lg p-4 mt-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <p className="text-sm text-gray-500">Número registrado</p>
              <p className="font-medium text-gray-700">+57 {celularFormateado}</p>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={onEntendido}
        className="btn-secondary w-full max-w-md text-lg"
      >
        Entendido
      </button>

      {/* Alternative contact */}
      <div className="mt-6 text-center">
        <p className="text-gray-500 text-sm mb-1">
          ¿Tienes preguntas?
        </p>
        <a href="tel:018000123456" className="text-[#009330] font-semibold hover:underline">
          01 8000 123 456
        </a>
      </div>
    </div>
  );
}
