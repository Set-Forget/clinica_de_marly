import { useState } from "react";
import ChildData from "./components/ChildData";
import IdData from "./components/IdData";
import FamilyData from "./components/FamilyData";
import SiblingsData from "./components/SiblingsData";
import OtherPeople from "./components/OtherPeople";
import ProgressIndicator from "./components/ProgressIndicator";
import Footer from "./components/Footer";
import ConsultReason from "./components/ConsultReason";
import PrenatalHistory from "./components/PrenatalHistory";

export default function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 8;

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
      case 6:
        return <ConsultReason />;
      case 7:
        return <PrenatalHistory />;
      case 8:
        return <PrenatalHistory />;
    }
  };

  return (
    <>
      <div
        className="fixed inset-0 bg-no-repeat bg-cover bg-center opacity-20"
        style={{
          backgroundImage:
            "url('https://i.postimg.cc/vHBkhFdF/PVP-Versiones-de-logo-Azul-Claro-3.png')",
        }}
      ></div>
      <div className="container mx-auto p-4">
        <form className="w-full relative opacity-100">
          <div className="relative">
            <div className="flex justify-center mb-6">
              <img
                src="https://i.postimg.cc/MHW3VzPf/PVP-Versiones-de-logo-Azul-1.png"
                alt="Paula Piedrita"
                className="w-[320px]"
              />
            </div>

            <h1 className="text-xl text-center font-bold mb-12">
              FORMATO HISTORIA CLÍNICA PARA NIÑOS Y ADOLESCENTES
            </h1>

            {/* Render the current component */}
            <div className="max-w-[900px] m-auto bg-transparent">
              {renderComponent()}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center mt-6 bg-transparent mb-12">
              {currentPage > 1 && (
                <button
                  className="bg-gray-500 hover:bg-gray-700 text-white font-semibold text-sm h-10 w-28 py-2 px-4 rounded mr-6"
                  type="button"
                  onClick={prevPage}
                >
                  Anterior
                </button>
              )}
              {currentPage < totalPages ? (
                <button
                  className="bg-[#0167A4] hover:bg-sky-800 text-white font-semibold text-sm h-10 w-28 py-2 px-4 rounded"
                  type="button"
                  onClick={nextPage}
                >
                  Siguiente
                </button>
              ) : (
                <button
                  className="bg-green-500 hover:bg-green-700 text-white font-semibold text-sm h-10 w-28 py-2 px-4 rounded"
                  type="submit"
                >
                  Enviar
                </button>
              )}
            </div>
            {/* Progress Indicator */}
            <div className="container mx-auto p-12 pb-12 bg-transparent">
              <ProgressIndicator
                currentStep={currentPage}
                totalSteps={totalPages}
              />
            </div>
            <Footer />
          </div>
        </form>
      </div>
    </>
  );
}
