'use client';

import { useState } from 'react';
import { CDTData, UserData } from '../page';

interface FormularioValidacionProps {
  cdt: CDTData;
  onValidar: (data: UserData) => void;
  onVolver: () => void;
}

export default function FormularioValidacion({ cdt, onValidar, onVolver }: FormularioValidacionProps) {
  const [cedula, setCedula] = useState('');
  const [nombre, setNombre] = useState('');
  const [celular, setCelular] = useState('');
  const [acepta, setAcepta] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validarFormulario = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!nombre || nombre.trim().split(' ').length < 2) {
      newErrors.nombre = 'Ingresa tu nombre completo como aparece en la cédula';
    }

    if (!cedula || cedula.length < 6 || cedula.length > 10) {
      newErrors.cedula = 'La cédula debe tener entre 6 y 10 dígitos';
    }

    if (!celular || celular.length !== 10) {
      newErrors.celular = 'Ingresa un número de 10 dígitos';
    }

    if (!acepta) {
      newErrors.acepta = 'Debes aceptar el tratamiento de datos';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validarFormulario()) {
      onValidar({ cedula, nombre, celular });
    }
  };

  const handleCedulaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 10);
    setCedula(value);
    if (errors.cedula) setErrors(prev => ({ ...prev, cedula: '' }));
  };

  const handleCelularChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 10);
    setCelular(value);
    if (errors.celular) setErrors(prev => ({ ...prev, celular: '' }));
  };

  const isFormValid = cedula.length >= 6 && nombre.trim().split(' ').length >= 2 && celular.length === 10 && acepta;

  return (
    <div className="fade-in max-w-xl">
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

      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        Tus datos de contacto
      </h2>
      <p className="text-gray-600 mb-6">
        Para enviarte la información de tu CDT por WhatsApp
      </p>

      {/* Resumen CDT */}
      <div className="bg-[#009330]/5 border border-[#009330]/20 rounded-xl p-4 mb-6">
        <div className="flex items-center gap-2 text-[#009330] mb-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="font-semibold">Tu CDT seleccionado</span>
        </div>
        <p className="text-gray-700">
          <span className="font-bold">${cdt.monto.toLocaleString('es-CO')}</span> a {cdt.plazo} meses | Tasa {cdt.tasaEA}% E.A.
        </p>
        <p className="text-sm text-gray-600">
          Ganarás <span className="font-semibold text-[#009330]">${cdt.intereses.toLocaleString('es-CO')}</span> en intereses
        </p>
      </div>


      <form onSubmit={handleSubmit} className="space-y-5">
        {/* P0: ORDEN CORRECTO - 1. Nombre (primero, más natural) */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Nombre completo <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => {
              setNombre(e.target.value);
              if (errors.nombre) setErrors(prev => ({ ...prev, nombre: '' }));
            }}
            placeholder="Como aparece en tu cédula"
            className={`input-field ${errors.nombre ? 'error' : ''}`}
            autoFocus
          />
          {errors.nombre ? (
            <p className="text-red-500 text-sm mt-1">{errors.nombre}</p>
          ) : (
            <p className="text-gray-500 text-sm mt-1">Ingresa nombre y apellido como aparece en tu documento</p>
          )}
        </div>

        {/* P0: ORDEN CORRECTO - 2. Cédula (segundo, para validación) */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Número de cédula <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={cedula}
            onChange={handleCedulaChange}
            placeholder="Ej: 1234567890"
            className={`input-field ${errors.cedula ? 'error' : ''}`}
          />
          {errors.cedula ? (
            <p className="text-red-500 text-sm mt-1">{errors.cedula}</p>
          ) : cedula && cedula.length >= 6 && (
            <p className="text-green-600 text-sm mt-1 flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Formato válido
            </p>
          )}
        </div>

        {/* P0: ORDEN CORRECTO - 3. Celular (tercero, para contacto) */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Número de celular <span className="text-red-500">*</span>
          </label>
          <div className="flex gap-2">
            <div className="flex items-center px-3 bg-gray-100 border border-gray-300 rounded-lg text-gray-600">
              +57
            </div>
            <input
              type="text"
              value={celular}
              onChange={handleCelularChange}
              placeholder="310 123 4567"
              className={`input-field flex-1 ${errors.celular ? 'error' : ''}`}
            />
          </div>
          {errors.celular ? (
            <p className="text-red-500 text-sm mt-1">{errors.celular}</p>
          ) : (
            <p className="text-gray-500 text-sm mt-1">Te contactaremos si necesitas asistencia con tu CDT</p>
          )}
        </div>

        {/* Checkbox */}
        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            id="acepta"
            checked={acepta}
            onChange={(e) => {
              setAcepta(e.target.checked);
              if (errors.acepta) setErrors(prev => ({ ...prev, acepta: '' }));
            }}
            className="mt-1 w-5 h-5 text-[#009330] rounded border-gray-300 focus:ring-[#009330]"
          />
          <label htmlFor="acepta" className="text-sm text-gray-600">
            Autorizo el tratamiento de mis datos personales según la{' '}
            <a href="#" className="text-[#009330] underline">política de privacidad</a>
          </label>
        </div>
        {errors.acepta && (
          <p className="text-red-500 text-sm -mt-3">{errors.acepta}</p>
        )}

        <button
          type="submit"
          disabled={!isFormValid}
          className="btn-primary w-full text-lg"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Continuar a WhatsApp
        </button>
      </form>

      {/* Footer simple de seguridad */}
      <p className="mt-6 text-center text-xs text-gray-400">
        Tus datos están protegidos bajo la Ley 1581 de 2012
      </p>
    </div>
  );
}
