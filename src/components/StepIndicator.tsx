import { Check, Circle } from 'lucide-react';
import React from 'react';

interface StepIndicatorProps {
  currentStep: number;
  steps: string[];
}

export const StepIndicator: React.FC<StepIndicatorProps> = ({ currentStep, steps }) => {
  return (
    <div className="flex items-center justify-center mb-8">
      {steps.map((step, index) => (
        <React.Fragment key={step}>
          <div className="flex flex-col items-center">
            <div
              className={`w-10 h-10 flex items-center justify-center rounded-full border-2 ${
                index < currentStep
                  ? 'bg-purple-600 border-purple-600 text-white'
                  : index === currentStep
                  ? 'border-purple-500 text-purple-500'
                  : 'border-gray-600 text-gray-500'
              }`}
            >
              {index < currentStep ? (
                <Check className="w-5 h-5" />
              ) : (
                <Circle className="w-5 h-5" />
              )}
            </div>
            <span
              className={`mt-2 text-sm ${
                index <= currentStep ? 'text-purple-400' : 'text-gray-500'
              }`}
            >
              {step}
            </span>
          </div>
          {index < steps.length - 1 && (
            <div
              className={`h-0.5 w-16 mx-2 ${
                index < currentStep ? 'bg-purple-600' : 'bg-gray-600'
              }`}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};