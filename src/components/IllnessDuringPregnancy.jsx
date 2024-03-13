const IllnessDuringPregnancy = () => {
    const conditions = [
        "Amenaza de aborto",
        "Amenaza de parto pretérmino",
        "Diabetes gestacional",
        "Rubeola",
        "Toxoplasmosis",
        "Hemorragias",
        "Edema",
        "Citomegalovirus",
        "Incompatibilidad del RH",
        "Anemia",
        "Varicela",
        "Traumatismos",
        "VIH",
        "Hipertensión",
        "Sífilis",
        "Ganancia excesiva de peso (+15kg)",
        "Hepatitis B",
        "No aumento del peso esperable",
        "Náuseas y vómitos frecuentes",
        "Otros",
      ];
    
  return (
    <div>
      <p className="block text-black-700 text-sm font-bold mb-2">
        Enfermedades o accidentes sufridos durante el embarazo:
      </p>
      <div className="mb-4 text-sm">
        <table className="table-fixed w-full">
          <thead>
            <tr>
              <th className="w-3/4 px-4 py-2 text-left">
                Enfermedad o Condición
              </th>
              <th className="w-1/8 px-4 py-2 text-center">SI</th>
              <th className="w-1/8 px-4 py-2 text-center">NO</th>
            </tr>
          </thead>
          <tbody>
            {conditions.map((condition, index) => (
              <tr key={condition}>
                <td className="border px-4 py-2">{condition}</td>
                <td className="border px-4 py-2 text-center">
                  <input
                    type="checkbox"
                    id={`yes-${index}`}
                    name={condition}
                    value="yes"
                    className="rounded-lg"
                  />
                </td>
                <td className="border px-4 py-2 text-center">
                  <input
                    type="checkbox"
                    id={`no-${index}`}
                    name={condition}
                    value="no"
                    className="rounded-lg"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default IllnessDuringPregnancy;
