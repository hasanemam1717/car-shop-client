import { useForm, FormProvider } from "react-hook-form";
import { Form } from "antd";

const CarFrom = ({
  onSubmit,
  defaultValues,
  children,
}: {
  onSubmit: any;
  defaultValues: any;
  children: React.ReactNode;
}) => {
  const methods = useForm({ defaultValues });

  return (
    <FormProvider {...methods}>
      <Form layout="vertical" onFinish={methods.handleSubmit(onSubmit)}>
        {children}
      </Form>
    </FormProvider>
  );
};

export default CarFrom;
