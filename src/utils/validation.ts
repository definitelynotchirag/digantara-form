import { FormData, FormErrors } from '../types/form';

export const validateBasicDetails = (data: FormData): FormErrors => {
  const errors: FormErrors = {};

  if (!data.firstName.trim()) {
    errors.firstName = 'First name is required';
  }

  if (!data.lastName.trim()) {
    errors.lastName = 'Last name is required';
  }

  if (!data.dateOfBirth) {
    errors.dateOfBirth = 'Date of birth is required';
  } else {
    const birthDate = new Date(data.dateOfBirth);
    const today = new Date();
    if (birthDate > today) {
      errors.dateOfBirth = 'Date of birth cannot be in the future';
    }
  }

  if (!data.gender) {
    errors.gender = 'Gender is required';
  }

  return errors;
};

export const validateContactInformation = (data: FormData): FormErrors => {
  const errors: FormErrors = {};

  if (!data.email.trim()) {
    errors.email = 'Email is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (!data.phone.trim()) {
    errors.phone = 'Phone number is required';
  } else if (!/^\+?[\d\s-]{10,}$/.test(data.phone)) {
    errors.phone = 'Please enter a valid phone number';
  }

  if (!data.address.trim()) {
    errors.address = 'Address is required';
  }

  if (!data.city.trim()) {
    errors.city = 'City is required';
  }

  if (!data.zipCode.trim()) {
    errors.zipCode = 'ZIP code is required';
  } else if (!/^\d{6}(-\d{4})?$/.test(data.zipCode)) {
    errors.zipCode = 'Please enter a valid ZIP code';
  }

  return errors;
};