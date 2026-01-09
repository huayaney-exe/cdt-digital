'use client';

import Link from 'next/link';

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-[#1a1a1a] text-white py-3 px-6 flex items-center justify-between sticky top-0 z-10">
        <Link href="/" className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors">
          <span>←</span>
          <span>Volver al Demo</span>
        </Link>
        <span className="bg-[#FFCE00] text-[#1a1a1a] px-4 py-1 rounded-full text-sm font-semibold">
          DOCUMENTACIÓN
        </span>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto py-12 px-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Mejora CDT - Documentación Técnica
        </h1>
        <p className="text-gray-600 mb-8">
          Especificación del flujo de usuario y la integración con el API de validación de listas restrictivas.
        </p>

        {/* Premisas de Diseño */}
        <section className="bg-white rounded-xl border p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="w-8 h-8 bg-[#009330] text-white rounded-full flex items-center justify-center text-sm">1</span>
            Premisas de Diseño del Flujo
          </h2>

          <div className="space-y-4">
            <div className="border-l-4 border-[#009330] pl-4">
              <h3 className="font-semibold text-gray-800">Captura de datos POST-simulación</h3>
              <p className="text-gray-600 text-sm mt-1">
                Los datos de identidad (cédula, nombre, celular) se capturan <strong>después</strong> de que el usuario
                ha simulado y seleccionado su CDT. Esto maximiza el compromiso (commitment escalation) y reduce
                el abandono temprano.
              </p>
            </div>

            <div className="border-l-4 border-[#009330] pl-4">
              <h3 className="font-semibold text-gray-800">Validación invisible para el usuario</h3>
              <p className="text-gray-600 text-sm mt-1">
                La validación contra listas restrictivas ocurre en backend sin que el usuario perciba que está
                siendo "evaluado". El flujo se presenta como "preparando tu conexión con WhatsApp".
              </p>
            </div>

            <div className="border-l-4 border-[#009330] pl-4">
              <h3 className="font-semibold text-gray-800">Honestidad sin promesas falsas</h3>
              <p className="text-gray-600 text-sm mt-1">
                Cuando un usuario no califica, el mensaje es honesto: "no tenemos una oferta lista para ti"
                pero deja la puerta abierta: "de calificar, te contactaremos". No prometemos contactar a todos.
              </p>
            </div>

            <div className="border-l-4 border-[#009330] pl-4">
              <h3 className="font-semibold text-gray-800">Celular para recontacto de falsos positivos</h3>
              <p className="text-gray-600 text-sm mt-1">
                El número de celular no solo se usa para WhatsApp sino para recontactar usuarios que fueron
                falsamente rechazados por las listas restrictivas (falsos positivos).
              </p>
            </div>
          </div>
        </section>

        {/* API de Validación */}
        <section className="bg-white rounded-xl border p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="w-8 h-8 bg-[#009330] text-white rounded-full flex items-center justify-center text-sm">2</span>
            API de Validación de Listas Restrictivas
          </h2>

          <div className="bg-gray-900 rounded-lg p-4 mb-4 overflow-x-auto">
            <pre className="text-sm text-gray-100">
{`POST /api/validacion/listas-restrictivas

Request:
{
  "cedula": "1234567890",
  "nombre": "Juan Carlos Pérez",
  "celular": "3101234567"
}

Response (Aprobado):
{
  "status": "APROBADO",
  "message": "Cliente habilitado para apertura de CDT",
  "whatsapp_enabled": true
}

Response (No califica):
{
  "status": "NO_CALIFICA",
  "message": "Sin oferta disponible actualmente",
  "whatsapp_enabled": false,
  "recontacto_posible": true
}`}
            </pre>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <h4 className="font-semibold text-amber-800 mb-2">Características del servicio</h4>
            <ul className="text-sm text-amber-700 space-y-1">
              <li>• <strong>Respuesta inmediata:</strong> El servicio responde en menos de 2 segundos</li>
              <li>• <strong>Disponibilidad:</strong> 99.9% uptime, integrado con sistemas de cumplimiento</li>
              <li>• <strong>Auditoría:</strong> Todas las consultas quedan registradas para compliance</li>
            </ul>
          </div>
        </section>

        {/* Flujo de Estados */}
        <section className="bg-white rounded-xl border p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="w-8 h-8 bg-[#009330] text-white rounded-full flex items-center justify-center text-sm">3</span>
            Flujo de Estados del Usuario
          </h2>

          <div className="space-y-3">
            <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-600">1</div>
              <div>
                <p className="font-semibold text-gray-800">Simulador</p>
                <p className="text-sm text-gray-600">Usuario ingresa monto y ve opciones de plazo</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-600">2</div>
              <div>
                <p className="font-semibold text-gray-800">Selección de Plazo</p>
                <p className="text-sm text-gray-600">Usuario elige el CDT que prefiere y hace clic en "Invertir ahora"</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-600">3</div>
              <div>
                <p className="font-semibold text-gray-800">Datos de Contacto</p>
                <p className="text-sm text-gray-600">Captura de nombre, cédula y celular (orden optimizado por UX)</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-3 bg-[#25D366]/10 rounded-lg border border-[#25D366]/30">
              <div className="w-10 h-10 bg-[#25D366] rounded-full flex items-center justify-center font-bold text-white">4a</div>
              <div>
                <p className="font-semibold text-gray-800">Éxito → WhatsApp</p>
                <p className="text-sm text-gray-600">Si califica: transición directa a WhatsApp con datos pre-llenados</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg border border-gray-200">
              <div className="w-10 h-10 bg-gray-400 rounded-full flex items-center justify-center font-bold text-white">4b</div>
              <div>
                <p className="font-semibold text-gray-800">No califica → Mensaje honesto</p>
                <p className="text-sm text-gray-600">"No tenemos oferta lista, de calificar te contactaremos"</p>
              </div>
            </div>
          </div>
        </section>

        {/* Métricas Esperadas */}
        <section className="bg-white rounded-xl border p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="w-8 h-8 bg-[#009330] text-white rounded-full flex items-center justify-center text-sm">4</span>
            Métricas Esperadas
          </h2>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-2xl font-bold text-[#009330]">75%</p>
              <p className="text-sm text-gray-600">Tasa de completación del formulario</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-2xl font-bold text-[#009330]">&lt;2s</p>
              <p className="text-sm text-gray-600">Tiempo de respuesta del API</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-2xl font-bold text-[#009330]">95%</p>
              <p className="text-sm text-gray-600">Usuarios que califican (pasan listas)</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-2xl font-bold text-[#009330]">60%</p>
              <p className="text-sm text-gray-600">Conversión simulación → WhatsApp</p>
            </div>
          </div>
        </section>

        {/* Consideraciones Técnicas */}
        <section className="bg-white rounded-xl border p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="w-8 h-8 bg-[#009330] text-white rounded-full flex items-center justify-center text-sm">5</span>
            Consideraciones para Implementación
          </h2>

          <div className="space-y-3 text-sm">
            <div className="flex items-start gap-2">
              <span className="text-[#009330]">✓</span>
              <p className="text-gray-700">
                <strong>Demo Mode:</strong> En este demo, cédulas que inician con "999" simulan el escenario de revisión.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#009330]">✓</span>
              <p className="text-gray-700">
                <strong>Integración WhatsApp:</strong> URL generada con mensaje pre-formateado incluyendo datos del CDT.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#009330]">✓</span>
              <p className="text-gray-700">
                <strong>Cumplimiento Ley 1581:</strong> Checkbox de autorización obligatorio antes de procesar datos.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#009330]">✓</span>
              <p className="text-gray-700">
                <strong>Orden de campos:</strong> Nombre → Cédula → Celular (optimizado por psicología conductual).
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
