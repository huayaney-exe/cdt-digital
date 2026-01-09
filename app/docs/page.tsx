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
          DEBRIEFING
        </span>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto py-12 px-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          CDT Digital - Debriefing de Implementación
        </h1>
        <p className="text-gray-600 mb-8">
          Resumen ejecutivo del prototipo: flujo, decisiones UX/UI, y estrategia de rescate de usuarios.
        </p>

        {/* Resumen Ejecutivo */}
        <section className="bg-[#009330]/5 border border-[#009330]/20 rounded-xl p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Resumen Ejecutivo
          </h2>
          <p className="text-gray-700 mb-4">
            Este prototipo implementa un flujo de simulación CDT con validación de listas restrictivas
            <strong> previo al direccionamiento a WhatsApp</strong>. El objetivo es evitar que usuarios que no
            califican lleguen a un asesor, optimizando recursos del canal.
          </p>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="bg-white p-3 rounded-lg">
              <p className="text-sm text-gray-500">Problema</p>
              <p className="font-semibold text-gray-800">Usuarios no calificados en WhatsApp</p>
            </div>
            <div className="bg-white p-3 rounded-lg">
              <p className="text-sm text-gray-500">Solución</p>
              <p className="font-semibold text-gray-800">Validación pre-WhatsApp</p>
            </div>
            <div className="bg-white p-3 rounded-lg">
              <p className="text-sm text-gray-500">Resultado</p>
              <p className="font-semibold text-gray-800">Solo leads calificados</p>
            </div>
          </div>
        </section>

        {/* Flujo Implementado */}
        <section className="bg-white rounded-xl border p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="w-8 h-8 bg-[#009330] text-white rounded-full flex items-center justify-center text-sm">1</span>
            Flujo Implementado
          </h2>

          <div className="space-y-3">
            <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
              <div className="w-10 h-10 bg-[#009330] rounded-full flex items-center justify-center font-bold text-white">1</div>
              <div className="flex-1">
                <p className="font-semibold text-gray-800">Simulador CDT</p>
                <p className="text-sm text-gray-600">Usuario ingresa monto. Sin requerir datos personales aún.</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
              <div className="w-10 h-10 bg-[#009330] rounded-full flex items-center justify-center font-bold text-white">2</div>
              <div className="flex-1">
                <p className="font-semibold text-gray-800">Selección de Plazo</p>
                <p className="text-sm text-gray-600">Visualiza opciones (6, 9, 12 meses) con tasa y ganancia. Selecciona y hace clic en "Invertir ahora".</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
              <div className="w-10 h-10 bg-[#009330] rounded-full flex items-center justify-center font-bold text-white">3</div>
              <div className="flex-1">
                <p className="font-semibold text-gray-800">Captura de Datos</p>
                <p className="text-sm text-gray-600">Nombre completo, cédula, celular. Autorización de tratamiento de datos.</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
              <div className="w-10 h-10 bg-[#009330] rounded-full flex items-center justify-center font-bold text-white">4</div>
              <div className="flex-1">
                <p className="font-semibold text-gray-800">Validación (invisible)</p>
                <p className="text-sm text-gray-600">Se muestra "Generando tu oferta..." mientras se valida contra listas restrictivas.</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-3 bg-[#25D366]/10 rounded-lg border border-[#25D366]/30">
              <div className="w-10 h-10 bg-[#25D366] rounded-full flex items-center justify-center font-bold text-white">✓</div>
              <div className="flex-1">
                <p className="font-semibold text-gray-800">Éxito → WhatsApp</p>
                <p className="text-sm text-gray-600">Resumen del CDT + botón que abre WhatsApp con mensaje pre-formateado.</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-3 bg-red-50 rounded-lg border border-red-200">
              <div className="w-10 h-10 bg-gray-400 rounded-full flex items-center justify-center font-bold text-white">✗</div>
              <div className="flex-1">
                <p className="font-semibold text-gray-800">No califica → Mensaje honesto</p>
                <p className="text-sm text-gray-600">"No tenemos una oferta lista para ti en este momento."</p>
              </div>
            </div>
          </div>
        </section>

        {/* Decisiones UX/UI */}
        <section className="bg-white rounded-xl border p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="w-8 h-8 bg-[#009330] text-white rounded-full flex items-center justify-center text-sm">2</span>
            Decisiones UX/UI
          </h2>

          <div className="space-y-4">
            <div className="border-l-4 border-[#009330] pl-4">
              <h3 className="font-semibold text-gray-800">Commitment Escalation</h3>
              <p className="text-gray-600 text-sm mt-1">
                Los datos personales se piden <strong>después</strong> de simular y seleccionar el CDT.
                El usuario ya invirtió tiempo y mostró interés real antes de compartir información sensible.
              </p>
            </div>

            <div className="border-l-4 border-[#009330] pl-4">
              <h3 className="font-semibold text-gray-800">Orden de Campos Optimizado</h3>
              <p className="text-gray-600 text-sm mt-1">
                Nombre → Cédula → Celular. El nombre es menos intimidante, la cédula valida identidad,
                el celular cierra el compromiso de contacto.
              </p>
            </div>

            <div className="border-l-4 border-[#009330] pl-4">
              <h3 className="font-semibold text-gray-800">Validación Invisible</h3>
              <p className="text-gray-600 text-sm mt-1">
                El usuario no sabe que está siendo validado contra listas restrictivas.
                Solo ve "Generando tu oferta..." — evitamos ansiedad innecesaria.
              </p>
            </div>

            <div className="border-l-4 border-[#009330] pl-4">
              <h3 className="font-semibold text-gray-800">Rechazo Honesto Sin Promesas Falsas</h3>
              <p className="text-gray-600 text-sm mt-1">
                Cuando alguien no califica, el mensaje es claro pero no agresivo:
                "No tenemos una oferta lista para ti". No prometemos contactar a todos.
              </p>
            </div>

            <div className="border-l-4 border-[#009330] pl-4">
              <h3 className="font-semibold text-gray-800">Resumen Visual Pre-WhatsApp</h3>
              <p className="text-gray-600 text-sm mt-1">
                Antes de ir a WhatsApp, el usuario ve un resumen completo de su CDT:
                monto, plazo, tasa, intereses estimados, total al vencimiento. Refuerza la decisión.
              </p>
            </div>
          </div>
        </section>

        {/* Estrategia de Rescate */}
        <section className="bg-white rounded-xl border p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="w-8 h-8 bg-[#009330] text-white rounded-full flex items-center justify-center text-sm">3</span>
            Estrategia de Rescate de Usuarios
          </h2>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-4">
            <h4 className="font-semibold text-amber-800 mb-2">Problema: Falsos Positivos</h4>
            <p className="text-sm text-amber-700">
              Las listas restrictivas pueden rechazar usuarios que en realidad sí califican
              (homonimia, datos desactualizados, errores de sistema). Sin un mecanismo de rescate,
              perdemos oportunidades comerciales válidas.
            </p>
          </div>

          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-gray-800">Captura de Datos de Todos los Usuarios</h3>
              <p className="text-gray-600 text-sm mt-1">
                Independiente del resultado de validación, almacenamos: nombre, cédula, celular,
                CDT seleccionado (monto, plazo, tasa), timestamp, y resultado de validación.
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-gray-800">Cola de Revisión Manual</h3>
              <p className="text-gray-600 text-sm mt-1">
                Los usuarios marcados como "NO_CALIFICA" entran a una cola de revisión.
                Un analista puede verificar si fue falso positivo y reclasificarlo.
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-gray-800">Recontacto Proactivo</h3>
              <p className="text-gray-600 text-sm mt-1">
                Si tras revisión el usuario sí califica, el banco puede contactarlo al celular registrado:
                "Tenemos buenas noticias sobre tu solicitud de CDT". El interés ya está demostrado.
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-gray-800">Datos para Análisis</h3>
              <p className="text-gray-600 text-sm mt-1">
                La data acumulada permite analizar: tasa de rechazo, montos promedio rechazados,
                patrones de usuarios que no califican, y oportunidades de mejora en las listas.
              </p>
            </div>
          </div>
        </section>

        {/* Especificación Técnica */}
        <section className="bg-white rounded-xl border p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="w-8 h-8 bg-[#009330] text-white rounded-full flex items-center justify-center text-sm">4</span>
            Especificación Técnica
          </h2>

          <h3 className="font-semibold text-gray-800 mb-3">API de Validación</h3>
          <div className="bg-gray-900 rounded-lg p-4 mb-4 overflow-x-auto">
            <pre className="text-sm text-gray-100">
{`POST /api/validacion/listas-restrictivas

Request:
{
  "cedula": "1234567890",
  "nombre": "Juan Carlos Pérez",
  "celular": "3101234567",
  "cdt": {
    "monto": 5000000,
    "plazo": 12,
    "tasaEA": 11.5
  }
}

Response (Aprobado):
{
  "status": "APROBADO",
  "whatsapp_enabled": true
}

Response (No califica):
{
  "status": "NO_CALIFICA",
  "whatsapp_enabled": false,
  "guardado_para_revision": true
}`}
            </pre>
          </div>

          <h3 className="font-semibold text-gray-800 mb-3">Mensaje WhatsApp Pre-formateado</h3>
          <div className="bg-gray-100 rounded-lg p-4 text-sm text-gray-700">
            <p className="font-mono">
              Hola, quiero abrir un CDT por $5.000.000 a 12 meses con tasa del 11.5% E.A.
              Mi nombre es Juan Pérez, cédula 1234567890.
            </p>
          </div>
        </section>

        {/* Notas del Demo */}
        <section className="bg-white rounded-xl border p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="w-8 h-8 bg-[#009330] text-white rounded-full flex items-center justify-center text-sm">5</span>
            Notas del Demo
          </h2>

          <div className="space-y-3 text-sm">
            <div className="flex items-start gap-2">
              <span className="text-[#009330]">✓</span>
              <p className="text-gray-700">
                <strong>Modo Demo:</strong> Cédulas que inician con "999" simulan el escenario de "No califica" para testing.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#009330]">✓</span>
              <p className="text-gray-700">
                <strong>WhatsApp:</strong> Abre la app con mensaje pre-llenado. Número destino configurable.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#009330]">✓</span>
              <p className="text-gray-700">
                <strong>Tasas:</strong> Las tasas mostradas son ilustrativas. En producción vendrían del core bancario.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#009330]">✓</span>
              <p className="text-gray-700">
                <strong>Compliance:</strong> Autorización Ley 1581 de 2012 obligatoria antes de enviar datos.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-8 pt-6 border-t text-center text-sm text-gray-500">
          <p>Prototipo desarrollado por Innovación Digital - Mibanco Colombia</p>
          <p className="mt-1">Última actualización: Enero 2025</p>
        </footer>
      </main>
    </div>
  );
}
