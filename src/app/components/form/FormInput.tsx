// FormInput.tsx

interface FormInputProps {
  label: string;
  name: string;
  type: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

export const FormInput: React.FC<FormInputProps> = ({
  label,
  name,
  type,
  value,
  handleChange,
  required = false,
}) => (
  <div className="form-row">
    <label htmlFor={name} className="form-label">
      {label}
    </label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={handleChange}
      className="form-input"
      required={required}
    />
  </div>
);
