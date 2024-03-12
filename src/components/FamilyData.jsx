export default function FamilyData() {
  return (
    <div>
      <p className="block text-black-700 text-sm font-bold mt-12 mb-2">
        DATOS FAMILIARES
      </p>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="cuidador_principal"
        >
          Cuidador principal del menor:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
          id="cuidador_principal"
          type="text"
        />
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="estado_civil_padres"
        >
          Estado civil padres:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
          id="estado_civil_padres"
          type="text"
        />
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="nombre_madre"
        >
          Nombre de la madre:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
          id="nombre_madre"
          type="text"
        />
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="edad_familiares"
        >
          Edad:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
          id="edad_familiares"
          type="text"
        />
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="ocupacion_familiares"
        >
          Ocupación:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
          id="ocupacion_familiares"
          type="text"
        />
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="celular_familiares"
        >
          Celular:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
          id="celular_familiares"
          type="text"
        />
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="escolaridad_familiares"
        >
          Escolaridad:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
          id="escolaridad_familiares"
          type="text"
        />
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="relacion_niño"
        >
          Relación con el niño:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
          id="relacion_niño"
          type="text"
        />
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="nombre_padre"
        >
          Nombre del padre:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
          id="nombre_padre"
          type="text"
        />
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="edad_padre"
        >
          Edad:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
          id="edad_padre"
          type="text"
        />
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="ocupacion_padre"
        >
          Ocupación:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
          id="ocupacion_padre"
          type="text"
        />
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="celular_padre"
        >
          Celular:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
          id="celular_padre"
          type="text"
        />
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="escolaridad_padre"
        >
          Escolaridad:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
          id="escolaridad_padre"
          type="text"
        />
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="relacion_padre"
        >
          Relación con el niño:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
          id="relacion_padre"
          type="text"
        />
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="relacion_padres"
        >
          Relación con los padres:
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
          id="relacion_padres"
          type="text"
        />
      </div>

      <div className="flex flex-wrap -mx-3 mb-4">
        <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="num_hermanos"
          >
            Número de hermanos:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
            id="num_hermanos"
            type="text"
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="lugar_familiar"
          >
            Lugar que ocupa el niño:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
            id="lugar_familiar"
            type="text"
          />
        </div>
      </div>
    </div>
  );
}
