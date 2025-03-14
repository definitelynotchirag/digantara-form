import React, { useState, useRef, useEffect } from 'react';
import { BasicDetails } from './components/FormSteps/BasicDetails';
import { ContactInformation } from './components/FormSteps/ContactInformation';
import { Summary } from './components/FormSteps/Summary';
import { StepIndicator } from './components/StepIndicator';
import { useFormStorage } from './hooks/useFormStorage';
import { FormErrors } from './types/form';
import { validateBasicDetails, validateContactInformation } from './utils/validation';
import { CheckCircle2 } from 'lucide-react';

const STEPS = ['Basic Details', 'Contact Info', 'Review'];

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const { formData, setFormData, clearStorage } = useFormStorage();
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        const inputs = formRef.current?.querySelectorAll('input, select');
        const currentInput = document.activeElement;
        
        if (inputs && currentInput) {
          const currentIndex = Array.from(inputs).indexOf(currentInput as HTMLElement);
          if (currentIndex < inputs.length - 1) {
            (inputs[currentIndex + 1] as HTMLElement).focus();
          } else if (currentIndex === inputs.length - 1) {
            handleNext();
          }
        }
      }
    };

    document.addEventListener('keypress', handleKeyPress);
    return () => document.removeEventListener('keypress', handleKeyPress);
  }, [currentStep]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateStep = (): boolean => {
    let stepErrors: FormErrors = {};

    if (currentStep === 0) {
      stepErrors = validateBasicDetails(formData);
    } else if (currentStep === 1) {
      stepErrors = validateContactInformation(formData);
    }

    setErrors(stepErrors);
    return Object.keys(stepErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    clearStorage();
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-gray-800 rounded-lg shadow-xl p-8 text-center animate-fadeIn">
          <CheckCircle2 className="w-16 h-16 text-purple-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-2">Thank You!</h2>
          <p className="text-gray-300 mb-6">Your information has been submitted successfully.</p>
          <button
            onClick={() => {
              setIsSubmitted(false);
              setCurrentStep(0);
            }}
            className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition-colors"
          >
            Submit Another Response
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-gray-800 rounded-lg shadow-xl p-8 border border-gray-700">
          <StepIndicator currentStep={currentStep} steps={STEPS} />

          <form ref={formRef} className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            {currentStep === 0 && (
              <BasicDetails
                formData={formData}
                errors={errors}
                onChange={handleInputChange}
              />
            )}
            {currentStep === 1 && (
              <ContactInformation
                formData={formData}
                errors={errors}
                onChange={handleInputChange}
              />
            )}
            {currentStep === 2 && <Summary formData={formData} />}

            <div className="flex justify-between pt-6">
              <button
                type="button"
                onClick={handleBack}
                className={`px-4 py-2 text-sm font-medium text-gray-300 bg-gray-700 border border-gray-600 
                rounded-md shadow-sm hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 
                focus:ring-offset-gray-800 focus:ring-purple-500 ${currentStep === 0 ? 'invisible' : ''}`}
              >
                Back
              </button>
              <button
                type="button"
                onClick={currentStep === 2 ? handleSubmit : handleNext}
                className="px-4 py-2 text-sm font-medium text-white bg-purple-600 border border-transparent 
                rounded-md shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 
                focus:ring-offset-gray-800 focus:ring-purple-500"
              >
                {currentStep === 2 ? 'Submit' : 'Next'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;