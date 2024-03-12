const ProgressIndicator = ({ currentStep, totalSteps }) => {
  // Calculate the width for the progress bar
  const progressBarWidth = (currentStep / totalSteps) * 100;

  return (
    <div className="flex flex-col items-center space-y-2">
      <div className="text-sm font-semibold">
        <span>
          Página {currentStep} de {totalSteps}
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div
          className="bg-blue-600 h-2.5 rounded-full"
          style={{ width: `${progressBarWidth}%` }}
        ></div>
      </div>
      <div className="flex justify-between w-full text-xs font-medium">
      </div>
    </div>
  );
};

export default ProgressIndicator;
