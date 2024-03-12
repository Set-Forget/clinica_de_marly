import { useState } from "react";
import ChildData from "./components/ChildData";
import IdData from "./components/IdData";
import FamilyData from "./components/FamilyData";
import SiblingsData from "./components/SiblingsData";
import OtherPeople from "./components/OtherPeople";
import ProgressIndicator from "./components/ProgressIndicator";

export default function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Function to go to the previous page
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const renderComponent = () => {
    switch (currentPage) {
      case 1:
        return <ChildData />;
      case 2:
        return <IdData />;
      case 3:
        return <FamilyData />;
      case 4:
        return <SiblingsData />;
      case 5:
        return <OtherPeople />;
      default:
        return <ChildData />;
    }
  };

  return (
    <div className="container mx-auto p-12">
      <form className="w-full">
        <h1 className="text-xl text-center font-bold mb-4">
          FORMATO HISTORIA CLÍNICA PARA NIÑOS Y ADOLESCENTES
        </h1>

        
        {/* Render the current component */}
        <div className="max-w-[900px] m-auto">{renderComponent()}</div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-6">
          {currentPage > 1 && (
            <button
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
              type="button"
              onClick={prevPage}
            >
              Anterior
            </button>
          )}
          {currentPage < totalPages ? (
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              type="button"
              onClick={nextPage}
            >
              Siguiente
            </button>
          ) : (
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Enviar
            </button>
          )}
        </div>
        {/* Progress Indicator */}
        <ProgressIndicator currentStep={currentPage} totalSteps={totalPages} />

      </form>
    </div>
  );
}
