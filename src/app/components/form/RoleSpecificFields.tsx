import { FormInput } from "./FormInput";
import { FormSelect } from "./FormSelect";

interface RoleSpecificFieldsProps {
  role: string;
  formData: {
    services?: string;
    experience?: string;
    availability?: string;
    serviceAreas?: string;
    portfolio?: string;
    business_name?: string;
    product_categories?: string;
    delivery_options?: string;
    payment_methods?: string;
    stock_levels?: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

export const RoleSpecificFields: React.FC<RoleSpecificFieldsProps> = ({
  role,
  formData,
  handleChange,
}) => {
  if (role === "Tasker") {
    return (
      <>
        <FormInput
          label="Services"
          name="services"
          type="text"
          value={formData.services || ""}
          handleChange={handleChange}
          required
        />
        <FormInput
          label="Experience"
          name="experience"
          type="text"
          value={formData.experience || ""}
          handleChange={handleChange}
          required
        />
        <FormInput
          label="Availability"
          name="availability"
          type="text"
          value={formData.availability || ""}
          handleChange={handleChange}
          required
        />
        <FormInput
          label="Service Areas"
          name="serviceAreas"
          type="text"
          value={formData.serviceAreas || ""}
          handleChange={handleChange}
          required
        />
        <FormInput
          label="Portfolio"
          name="portfolio"
          type="text"
          value={formData.portfolio || ""}
          handleChange={handleChange}
          required
        />
      </>
    );
  } else if (role === "Merchant") {
    return (
      <>
        <FormInput
          label="Business Name"
          name="business_name"
          type="text"
          value={formData.business_name || ""}
          handleChange={handleChange}
          required
        />
        <FormInput
          label="Product Categories"
          name="product_categories"
          type="text"
          value={formData.product_categories || ""}
          handleChange={handleChange}
          required
        />
        <FormSelect
          label="Delivery Options"
          name="delivery_options"
          value={formData.delivery_options || ""}
          options={[
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ]}
          handleChange={handleChange}
        />
        <FormSelect
          label="Payment Methods"
          name="payment_methods"
          value={formData.payment_methods || ""}
          options={[
            { label: "Cash", value: "Cash" },
            { label: "Mobile Money", value: "Mobile Money" },
            { label: "Swipe", value: "Swipe" }
          ]}
          handleChange={handleChange}
        />
        <FormInput
          label="Stock Levels"
          name="stock_levels"
          type="text"
          value={formData.stock_levels || ""}
          handleChange={handleChange}
          required
        />
      </>
    );
  }
  return null;
};
