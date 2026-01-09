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
      {/* Phone Icon - friendly, not warning */}
      <div className="mb-6">
        <div className="w-20 h-20 bg-[#009330]/10 rounded-full flex items-center justify-center">
          <svg className="w-10 h-10 text-[#009330]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">
        ¡{primerNombre}, te contactaremos pronto!
      </h2>

      {/* Message Box - positive framing */}
      <div className="bg-white rounded-xl border p-6 w-full max-w-md my-6">
        <p className="text-gray-700 mb-4">
          Para brindarte una mejor atención, uno de nuestros asesores te llamará para continuar con tu CDT.
        </p>

        <div className="bg-[#009330]/5 rounded-lg p-4">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-[#009330] rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="text-sm text-gray-600">Te llamaremos al</p>
              <p className="font-bold text-gray-800 text-lg">+57 {celularFormateado}</p>
            </div>
          </div>
          <p className="text-sm text-[#009330] font-medium">
            En las próximas 24 horas hábiles
          </p>
        </div>
      </div>

      <button
        onClick={onEntendido}
        className="btn-primary w-full max-w-md text-lg"
      >
        Perfecto, esperaré tu llamada
      </button>

      {/* Alternative contact */}
      <div className="mt-6 text-center">
        <p className="text-gray-500 text-sm mb-1">
          ¿Prefieres llamarnos tú?
        </p>
        <a href="tel:018000123456" className="text-[#009330] font-semibold hover:underline">
          01 8000 123 456
        </a>
      </div>
    </div>
  );
}
