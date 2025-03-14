import React from 'react';
import { FormData, FormErrors } from '../../types/form';

interface BasicDetailsProps {
  formData: FormData;
  errors: FormErrors;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

export const BasicDetails: React.FC<BasicDetailsProps> = ({
  formData,
  errors,
  onChange,
}) => {
  return (
    <div className="space-y-4 animate-fadeIn">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="form-label">
            First Name *
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={onChange}
            className={`form-input ${errors.firstName ? 'border-red-500' : ''}`}
          />
          {errors.firstName && (
            <p className="error-message">{errors.firstName}</p>
          )}
        </div>

        <div>
          <label htmlFor="lastName" className="form-label">
            Last Name *
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={onChange}
            className={`form-input ${errors.lastName ? 'border-red-500' : ''}`}
          />
          {errors.lastName && (
            <p className="error-message">{errors.lastName}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="dateOfBirth" className="form-label">
          Date of Birth *
        </label>
        <input
          type="date"
          id="dateOfBirth"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={onChange}
          className={`form-input ${errors.dateOfBirth ? 'border-red-500' : ''}`}
        />
        {errors.dateOfBirth && (
          <p className="error-message">{errors.dateOfBirth}</p>
        )}
      </div>

      <div>
        <label htmlFor="gender" className="form-label">
          Gender *
        </label>
        <select
          id="gender"
          name="gender"
          value={formData.gender}
          onChange={onChange}
          className={`form-input ${errors.gender ? 'border-red-500' : ''}`}
        >
          <option value="">Select gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        {errors.gender && (
          <p className="error-message">{errors.gender}</p>
        )}
      </div>
    </div>
  );
};