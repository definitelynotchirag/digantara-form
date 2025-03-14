import React from 'react';
import { FormData, FormErrors } from '../../types/form';

interface ContactInformationProps {
  formData: FormData;
  errors: FormErrors;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ContactInformation: React.FC<ContactInformationProps> = ({
  formData,
  errors,
  onChange,
}) => {
  return (
    <div className="space-y-4 animate-fadeIn">
      <div>
        <label htmlFor="email" className="form-label">
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={onChange}
          className={`form-input ${errors.email ? 'border-red-500' : ''}`}
        />
        {errors.email && <p className="error-message">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="phone" className="form-label">
          Phone Number *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={onChange}
          className={`form-input ${errors.phone ? 'border-red-500' : ''}`}
        />
        {errors.phone && <p className="error-message">{errors.phone}</p>}
      </div>

      <div>
        <label htmlFor="address" className="form-label">
          Address *
        </label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={onChange}
          className={`form-input ${errors.address ? 'border-red-500' : ''}`}
        />
        {errors.address && (
          <p className="error-message">{errors.address}</p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="city" className="form-label">
            City *
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={onChange}
            className={`form-input ${errors.city ? 'border-red-500' : ''}`}
          />
          {errors.city && <p className="error-message">{errors.city}</p>}
        </div>

        <div>
          <label htmlFor="zipCode" className="form-label">
            ZIP Code *
          </label>
          <input
            type="text"
            id="zipCode"
            name="zipCode"
            value={formData.zipCode}
            onChange={onChange}
            className={`form-input ${errors.zipCode ? 'border-red-500' : ''}`}
          />
          {errors.zipCode && (
            <p className="error-message">{errors.zipCode}</p>
          )}
        </div>
      </div>
    </div>
  );
};