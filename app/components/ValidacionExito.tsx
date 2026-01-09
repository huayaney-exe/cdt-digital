'use client';

import { CDTData } from '../page';

interface ValidacionExitoProps {
  nombre: string;
  cdt: CDTData;
  whatsappUrl: string;
}

export default function ValidacionExito({ nombre, cdt, whatsappUrl }: ValidacionExitoProps) {
  const primerNombre = nombre.split(' ')[0];

  return (
    <div className="fade-in flex flex-col items-center justify-center py-12">
      {/* Success Icon */}
      <div className="mb-6">
        <div className="w-20 h-20 bg-[#00a651] rounded-full flex items-center justify-center">
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">
        ¡Verificación completada!
      </h2>
      <p className="text-gray-600 text-center mb-8">
        {primerNombre}, todo está listo para continuar con tu inversión
      </p>

      {/* Resumen CDT */}
      <div className="bg-white rounded-xl border p-6 w-full max-w-md mb-8">
        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
          Resumen de tu CDT
        </h3>
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-gray-600">Monto</span>
            <span className="font-semibold text-gray-800">${cdt.monto.toLocaleString('es-CO')}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Plazo</span>
            <span className="font-semibold text-gray-800">{cdt.plazo} meses</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Tasa E.A.</span>
            <span className="font-semibold text-gray-800">{cdt.tasaEA}%</span>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between">
            <span className="text-gray-600">Intereses estimados</span>
            <span className="font-semibold text-[#00a651]">${cdt.intereses.toLocaleString('es-CO')}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-800 font-medium">Total al vencimiento</span>
            <span className="font-bold text-xl text-gray-800">${cdt.total.toLocaleString('es-CO')}</span>
          </div>
        </div>
      </div>

      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary w-full max-w-md text-lg flex items-center justify-center gap-3"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        Continuar en WhatsApp
      </a>

      <p className="text-gray-500 text-sm mt-4 text-center">
        Un asesor te atenderá para finalizar tu inversión
      </p>
    </div>
  );
}
