export default function IdData() {
  return (
    <div>
      <p className="block text-black-700 text-sm font-bold mt-12 mb-2">
        DATOS DE IDENTIFICACIÓN
      </p>

      <div className="flex flex-wrap -mx-3 mb-4">
        <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="fecha_nacimiento"
          >
            Fecha de nacimiento:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
            id="fecha_nacimiento"
            type="text"
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="lugar_nacimiento"
          >
            Lugar de nacimiento:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
            id="lugar_nacimiento"
            type="text"
          />
        </div>
      </div>

      <div className="flex flex-wrap -mx-3 mb-4">
        <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="edad"
          >
            Edad:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
            id="edad"
            type="text"
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="mano_dominante"
          >
            Mano dominante:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
            id="mano_dominante"
            type="text"
          />
        </div>
      </div>

      <div className="flex flex-wrap -mx-3 mb-4">
        <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="colegio"
          >
            Colegio:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
            id="colegio"
            type="text"
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="curso"
          >
            Curso:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
            id="curso"
            type="text"
          />
        </div>
      </div>

      <div className="flex flex-wrap -mx-3 mb-4">
        <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="sexo"
          >
            Sexo:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
            id="sexo"
            type="text"
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="telefono"
          >
            Teléfono:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
            id="telefono"
            type="text"
          />
        </div>
      </div>

      <div className="flex flex-wrap -mx-3 mb-4">
        <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="direccion"
          >
            Dirección:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
            id="direccion"
            type="text"
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="residencia"
          >
            Ciudad residencia:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
            id="residencia"
            type="text"
          />
        </div>
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="correo"
        >
          Correo:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
          id="correo"
          type="text"
        />
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="seguro_medico"
        >
          Seguro médico:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
          id="seguro_medico"
          type="text"
        />
      </div>
    </div>
  );
}
