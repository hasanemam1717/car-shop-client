import { Controller } from "react-hook-form";
import { Form, Input, Checkbox } from "antd";

const CarInput = ({
  type,
  name,
  label,
}: {
  type: string;
  name: string;
  label: string;
}) => {
  return (
    <Controller
      name={name}
      render={({ field }) => (
        <Form.Item label={label}>
          {type === "checkbox" ? (
            <Checkbox {...field} checked={field.value} />
          ) : (
            <Input {...field} type={type} />
          )}
        </Form.Item>
      )}
    />
  );
};

export default CarInput;
