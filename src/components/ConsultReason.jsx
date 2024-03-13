export default function ConsultReason() {
  return (
    <div className="bg-white w-auto rounded-lg shadow-md p-6">
      <p className="block text-black-700 text-sm font-bold mb-2">
        CARACTERIZACIÓN DE LA REMISIÓN, MOTIVO DE CONSULTA, HISTORIA DE LA
        PROMÁTICA ACTUAL
      </p>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="remitido_por"
        >
          Remitido por:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
          id="remitido_por"
          type="text"
        />
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="especialidad_consulta"
        >
          Especialidad:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
          id="especialidad_consulta"
          type="text"
        />
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="motivo_remision"
        >
          Motivo de la remisión:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
          id="motivo_remision"
          type="text"
        />
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="diagnosticos_recibidos"
        >
          Diagnósticos recibidos hasta el momento:
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
          id="diagnosticos_recibidos"
          type="text"
        />
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="motivo_consulta"
        >
          Motivo de la consulta:
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
          id="motivo_consulta"
          type="text"
        />
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="problematica_actual"
        >
          Historia de la problemática actual::
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
          id="problematica_actual"
          type="text"
        />
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="desde_cuando_problematica"
        >
          ¿Desde cuándo comenzaron a presentarse estas dificultades?
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
          id="desde_cuando_problematica"
          type="text"
        />
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="diagnotico_previo"
        >
          ¿Se ha dado algún diagnóstico y/o tratamiento hasta el momento?
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
          id="diagnotico_previo"
          type="text"
        />
      </div>
    </div>
  );
}
