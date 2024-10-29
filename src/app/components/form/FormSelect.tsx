// FormSelect.tsx

interface FormSelectProps {
  label: string;
  name: string;
  value: string;
  options: { label: string; value: string }[];
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const FormSelect: React.FC<FormSelectProps> = ({
  label,
  name,
  value,
  options,
  handleChange,
}) => (
  <div className="form-row">
    <label htmlFor={name} className="form-label">
      {label}
    </label>
    <select
      name={name}
      value={value}
      onChange={handleChange}
      className="form-select"
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);
