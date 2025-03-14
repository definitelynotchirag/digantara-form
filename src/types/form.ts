export interface FormData {
  // Step 1: Basic Details
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  gender: 'male' | 'female' | 'other' | '';

  // Step 2: Contact Information
  email: string;
  phone: string;
  address: string;
  city: string;
  zipCode: string;
}

export type FormErrors = Partial<Record<keyof FormData, string>>;

export const INITIAL_FORM_DATA: FormData = {
  firstName: '',
  lastName: '',
  dateOfBirth: '',
  gender: '',
  email: '',
  phone: '',
  address: '',
  city: '',
  zipCode: ''
};