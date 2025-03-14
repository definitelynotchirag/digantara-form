import React from 'react';
import { FormData } from '../../types/form';

interface SummaryProps {
  formData: FormData;
}

export const Summary: React.FC<SummaryProps> = ({ formData }) => {
  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="bg-gray-700 rounded-lg shadow-lg p-6">
        <h3 className="text-lg font-medium text-white mb-4">Basic Details</h3>
        <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <dt className="text-sm font-medium text-gray-400">First Name</dt>
            <dd className="mt-1 text-sm text-gray-200">{formData.firstName}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-gray-400">Last Name</dt>
            <dd className="mt-1 text-sm text-gray-200">{formData.lastName}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-gray-400">Date of Birth</dt>
            <dd className="mt-1 text-sm text-gray-200">{formData.dateOfBirth}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-gray-400">Gender</dt>
            <dd className="mt-1 text-sm text-gray-200 capitalize">{formData.gender}</dd>
          </div>
        </dl>
      </div>

      <div className="bg-gray-700 rounded-lg shadow-lg p-6">
        <h3 className="text-lg font-medium text-white mb-4">Contact Information</h3>
        <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <dt className="text-sm font-medium text-gray-400">Email</dt>
            <dd className="mt-1 text-sm text-gray-200">{formData.email}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-gray-400">Phone</dt>
            <dd className="mt-1 text-sm text-gray-200">{formData.phone}</dd>
          </div>
          <div className="md:col-span-2">
            <dt className="text-sm font-medium text-gray-400">Address</dt>
            <dd className="mt-1 text-sm text-gray-200">{formData.address}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-gray-400">City</dt>
            <dd className="mt-1 text-sm text-gray-200">{formData.city}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-gray-400">ZIP Code</dt>
            <dd className="mt-1 text-sm text-gray-200">{formData.zipCode}</dd>
          </div>
        </dl>
      </div>
    </div>
  );
};