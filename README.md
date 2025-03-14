# Multi-Step Form

A production-ready multi-step form implementation with TypeScript, form validation, state persistence, and a beautiful dark purple theme.

## Features

### Form Structure
- **Three-Step Process**: Basic Details, Contact Information, and Summary
- **Responsive Design**: Works on all device sizes
- **Progress Indicator**: Visual feedback on form completion progress
- **Intuitive Navigation**: Back/Next buttons with smooth transitions

### Validation
- **Real-time Error Feedback**: Immediate validation as users type
- **Field-specific Validation**: Custom rules for email, phone, and ZIP code
- **Clear Error Messages**: User-friendly error notifications

### State Management
- **TypeScript Integration**: Type-safe form state management
- **Local Storage Persistence**: Form progress saved between sessions
- **Clean Architecture**: Separation of concerns for maintainability

### User Experience
- **Smooth Animations**: Polished transitions between form steps
- **Dark Purple Theme**: Modern aesthetic with improved contrast
- **Keyboard Navigation**:
  - Enter key moves to next field
  - Enter on last field validates and advances to next step
  - Tab navigation works as expected
- **Success Screen**: Confirmation after successful submission

### Accessibility
- **Enhanced Focus Indicators**: Clear visual cues for keyboard navigation
- **Improved Color Contrast**: WCAG-compliant color scheme
- **Consistent Control Styling**: Predictable interaction patterns

## Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/multi-step-form.git

# Navigate to project directory
cd multi-step-form

# Install dependencies
npm install

# Start development server
npm run dev
```

## Usage

### Basic Implementation

```tsx
import { MultiStepForm } from './components/MultiStepForm';

function App() {
  const handleSubmit = (formData) => {
    console.log('Form submitted:', formData);
    // Process the form data (e.g., API call)
  };

  return (
    <div className="app">
      <MultiStepForm onSubmit={handleSubmit} />
    </div>
  );
}
```

### Custom Configuration

```tsx
import { MultiStepForm } from './components/MultiStepForm';

function App() {
  const formConfig = {
    persistKey: 'my-custom-form',
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      // ... other fields
    },
    steps: [
      {
        id: 'basic',
        title: 'Basic Information',
        fields: ['firstName', 'lastName']
      },
      // ... other steps
    ]
  };

  return (
    <div className="app">
      <MultiStepForm config={formConfig} onSubmit={handleSubmit} />
    </div>
  );
}
```

## Form Validation

Validation is handled through a custom hook that supports:

- Required field validation
- Email format validation
- Phone number format validation
- ZIP code format validation
- Custom validation rules

Example usage:

```tsx
import { useFormValidation } from './hooks/useFormValidation';

const { errors, validate } = useFormValidation({
  email: {
    required: true,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: 'Please enter a valid email address'
  }
});

// Later in your component
const handleBlur = (e) => {
  validate(e.target.name, e.target.value);
};
```

## Local Storage Persistence

Form progress is automatically saved to localStorage, allowing users to continue where they left off if they close the browser or refresh the page. The stored data is cleared upon successful submission.

## Customization

### Theme Customization

The dark purple theme can be customized by modifying the Tailwind configuration:

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6D28D9', // purple-700
          dark: '#5B21B6',    // purple-800
          light: '#8B5CF6',   // purple-500
        },
        background: {
          DEFAULT: '#1F2937', // gray-800
          dark: '#111827',    // gray-900
        }
      }
    }
  }
};
```

### Custom Steps

You can add, remove, or modify steps by updating the form configuration:

```tsx
const customSteps = [
  {
    id: 'personal',
    title: 'Personal Information',
    fields: ['firstName', 'lastName', 'birthDate']
  },
  {
    id: 'address',
    title: 'Address',
    fields: ['street', 'city', 'state', 'zipCode']
  },
  {
    id: 'payment',
    title: 'Payment Details',
    fields: ['cardNumber', 'expiryDate', 'cvv']
  }
];

<MultiStepForm steps={customSteps} />
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- iOS Safari (latest)
- Android Chrome (latest)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.