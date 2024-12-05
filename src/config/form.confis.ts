// formConfig.ts
import * as yup from 'yup';

export interface FieldConfig {
  name: string;
  label: string;
  type: 'text' | 'number' | 'email' | 'password' | 'select';
  options?: { value: string; label: string }[];
  validation?: any; // Add validation rules here if needed
}

export const formFields: FieldConfig[] = [
  { name: 'firstName', label: 'First Name', type: 'text', validation: yup.string().required('First Name is required') },
  { name: 'lastName', label: 'Last Name', type: 'text', validation: yup.string().required('Last Name is required') },
  { name: 'email', label: 'Email', type: 'email', validation: yup.string().email('Invalid email').required('Email is required') },
  { name: 'age', label: 'Age', type: 'number', validation: yup.number().positive('Age must be positive').required('Age is required') },
  { name: 'password', label: 'Password', type: 'password', validation: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required') },
  {
    name: 'gender',
    label: 'Gender',
    type: 'select',
    options: [
      { value: 'male', label: 'Male' },
      { value: 'female', label: 'Female' },
      { value: 'other', label: 'Other' }
    ],
    validation: yup.string().required('Gender is required')
  }
];