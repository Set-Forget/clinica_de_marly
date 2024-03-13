import IllnessDuringPregnancy from "./IllnessDuringPregnancy";

const PrenatalHistory = () => {
  return (
    <form className="bg-white w-auto rounded-lg shadow-md p-6">
      <p className="block text-black-700 text-sm font-bold mb-2">
        ANTECEDENTES PRENATALES
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {/* Product of the gestation number */}
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Producto de la gesta número
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
            type="number"
          />
        </div>
        {/* Mother's age at pregnancy */}
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Edad de la madre cuando quedó embarazada:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
            type="number"
          />
        </div>
        {/* Was the pregnancy planned? */}
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            ¿Embarazo planeado?
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
            type="text"
          />
        </div>
        {/* Father's age */}
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Edad del padre:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
            type="number"
          />
        </div>
        {/* How do you rate the nutrition during pregnancy? */}
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            ¿Cómo califica la alimentación durante el embarazo?
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
            type="text"
          />
        </div>
        {/* Was the pregnancy desired? */}
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            ¿Embarazo deseado?
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
            type="text"
          />
        </div>
        {/* Did you consume any SPA during pregnancy? */}
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            ¿Consumió alguna SPA durante el embarazo?
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
            type="text"
          >
            <option disabled selected></option>
            <option value="Sí">Sí</option>
            <option value="No">No</option>
          </select>
        </div>
        {/* Did you consume folic acid and other supplements? */}
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            ¿Consumió ácido fólico y otros complementos?
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
            type="text"
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            En caso de haber consumido alguna SPA, indique tiempo y frecuencia.
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
            rows="3"
          ></textarea>
        </div>
        <div className="md:col-span-2">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            ¿Abortos espontáneos antes de este embarazo?
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
            rows="3"
          ></textarea>
        </div>
        <div className="md:col-span-2">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Especificar número de abortos, edades gestacionales, intervención
            médica requerida y realización de exámenes para determinar posibles
            causas.
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
            rows="3"
          ></textarea>
        </div>
      </div>

      <IllnessDuringPregnancy />
    </form>
  );
};

export default PrenatalHistory;
