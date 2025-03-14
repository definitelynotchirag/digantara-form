import { useState, useEffect } from 'react';
import { FormData, INITIAL_FORM_DATA } from '../types/form';

const STORAGE_KEY = 'multistep_form_data';

export const useFormStorage = () => {
  const [formData, setFormData] = useState<FormData>(() => {
    const savedData = localStorage.getItem(STORAGE_KEY);
    return savedData ? JSON.parse(savedData) : INITIAL_FORM_DATA;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }, [formData]);

  const clearStorage = () => {
    localStorage.removeItem(STORAGE_KEY);
    setFormData(INITIAL_FORM_DATA);
  };

  return { formData, setFormData, clearStorage };
};