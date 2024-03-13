const ProgressIndicator = ({ currentStep, totalSteps }) => {
  // Calculate the width for the progress bar
  const progressBarWidth = (currentStep / totalSteps) * 100;

  return (
    <div className="fixed bottom-14 inset-x-0 p-4 bg-white shadow-md">
      <div className="flex flex-col items-center space-y-2">
        <div className="text-sm font-semibold">
          <span>
            Página {currentStep} de {totalSteps}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
          <div
            className="bg-[#0167A4] h-2.5 rounded-full"
            style={{ width: `${progressBarWidth}%` }}
          ></div>
        </div>
        <div className="flex justify-between w-full text-xs font-medium"></div>
      </div>
    </div>
  );
};

export default ProgressIndicator;
