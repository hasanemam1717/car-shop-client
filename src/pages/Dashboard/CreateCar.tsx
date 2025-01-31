import { Controller, FieldValues, SubmitHandler } from "react-hook-form";
import { Button, Col, Divider, Form, Input, Row } from "antd";
import { useCreateCarMutation } from "../../redux/feature/product/productApi";
import CarFrom from "../../components/form/CarFrom";
import CarInput from "../../components/form/CarInput";

//! This is only for development
//! Should be removed
const carDefaultValues = {
  name: "Civic",
  brand: "Honda",
  model: "Classic",
  year: 2022,
  price: 25000,
  category: "Coupe",
  description: "A stylish and fuel-efficient car with a sporty feel.",
  quantity: 20,
  inStock: true,
};

const CreateCar = () => {
  const [addCar, { data, error }] = useCreateCarMutation();

  console.log({ data, error });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    // console.log(data.image);

    const formData = new FormData();

    formData.append("file", data.image);
    formData.append("data", JSON.stringify(data));
    console.log(formData);
    addCar(formData); // Send car data to the API
  };

  return (
    <Row justify="center" style={{ marginTop: "20px" }}>
      <Col span={24}>
        <CarFrom onSubmit={onSubmit} defaultValues={carDefaultValues}>
          <Divider>Car Information</Divider>
          <Row gutter={8}>
            {/* Car Name */}
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <CarInput type="text" name="name" label="Car Name" />
            </Col>
            {/* image */}
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <Controller
                name="image"
                render={({ field: { onChange, value, ...field } }) => (
                  <Form.Item label="Picture">
                    <Input
                      type="file"
                      value={value?.fileName}
                      {...field}
                      onChange={(e) => onChange(e.target.files?.[0])}
                    />
                  </Form.Item>
                )}
              />
            </Col>
            {/* Brand */}
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <CarInput type="text" name="brand" label="Brand" />
            </Col>

            {/* Model */}
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <CarInput type="text" name="model" label="Model" />
            </Col>

            {/* Year */}
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <CarInput type="number" name="year" label="Year" />
            </Col>

            {/* Price */}
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <CarInput type="number" name="price" label="Price ($)" />
            </Col>

            {/* Category */}
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <CarInput type="text" name="category" label="Category" />
            </Col>

            {/* Description */}
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <CarInput type="text" name="description" label="Description" />
            </Col>

            {/* Quantity */}
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <CarInput type="number" name="quantity" label="Quantity" />
            </Col>

            {/* In Stock */}
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <CarInput type="checkbox" name="inStock" label="In Stock" />
            </Col>
          </Row>

          <Divider>
            <Button type="primary" htmlType="submit">
              Create Car
            </Button>
          </Divider>
        </CarFrom>
      </Col>
    </Row>
  );
};

export default CreateCar;

// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import { useCreateCarMutation } from "../../redux/feature/product/productApi";

// const CreateCar = () => {
//   const { register, handleSubmit, reset, setValue } = useForm({
//     defaultValues: {
//       name: "Civic",
//       brand: "Honda",
//       model: "Classic",
//       year: 2022,
//       price: 25000,
//       category: "Coupe",
//       description: "A stylish and fuel-efficient car with a sporty feel.",
//       quantity: 20,
//       inStock: true,
//     },
//   });

//   const [file, setFile] = useState<File | null>(null);
//   const [addCar, { data, error }] = useCreateCarMutation();
//   console.log("Data=>", data);
//   console.log("Err=>", error);

//   const onSubmit = async (data: any) => {
//     if (!file) {
//       alert("Please select an image.");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("name", data.name);
//     formData.append("brand", data.brand);
//     formData.append("model", data.model);
//     formData.append("year", data.year);
//     formData.append("price", data.price);
//     formData.append("category", data.category);
//     formData.append("description", data.description);
//     formData.append("quantity", data.quantity);
//     formData.append("inStock", data.inStock);
//     formData.append("image", file); // Append the file properly

//     console.log("🚀 FormData Ready for Upload:", formData);

//     addCar(formData); // Send formData (not JSON) to API
//     reset();
//     setFile(null);
//   };

//   // Handle File Selection
//   const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const selectedFile = event.target.files?.[0];
//     if (selectedFile) {
//       setFile(selectedFile);
//       setValue("image", selectedFile.name); // Save file name in the form (only for reference)
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
//       <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg">
//         <h2 className="text-2xl font-bold text-center mb-6">
//           Create a New Car
//         </h2>

//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//           {/* Car Name */}
//           <div>
//             <label className="block text-sm font-medium">Car Name</label>
//             <input
//               {...register("name", { required: true })}
//               type="text"
//               className="w-full border p-2 rounded-md"
//             />
//           </div>

//           {/* Image Upload */}
//           <div>
//             <label className="block text-sm font-medium">Car Image</label>
//             <input
//               type="file"
//               accept="image/*"
//               onChange={handleFileChange}
//               className="w-full border p-2 rounded-md"
//             />
//             {file && (
//               <p className="text-green-600 text-sm mt-1">
//                 Selected: {file.name}
//               </p>
//             )}
//           </div>

//           {/* Brand */}
//           <div>
//             <label className="block text-sm font-medium">Brand</label>
//             <select
//               {...register("brand", { required: true })}
//               className="w-full border p-2 rounded-md"
//             >
//               <option value="Honda">Honda</option>
//               <option value="Toyota">Toyota</option>
//               <option value="Ford">Ford</option>
//               <option value="BMW">BMW</option>
//               <option value="Tesla">Tesla</option>
//             </select>
//           </div>

//           {/* Model */}
//           <div>
//             <label className="block text-sm font-medium">Model</label>
//             <input
//               {...register("model", { required: true })}
//               type="text"
//               className="w-full border p-2 rounded-md"
//             />
//           </div>

//           {/* Year */}
//           <div>
//             <label className="block text-sm font-medium">Year</label>
//             <input
//               {...register("year", { required: true, valueAsNumber: true })}
//               type="number"
//               className="w-full border p-2 rounded-md"
//             />
//           </div>

//           {/* Price */}
//           <div>
//             <label className="block text-sm font-medium">Price ($)</label>
//             <input
//               {...register("price", { required: true, valueAsNumber: true })}
//               type="number"
//               className="w-full border p-2 rounded-md"
//             />
//           </div>

//           {/* Category */}
//           <div>
//             <label className="block text-sm font-medium">Category</label>
//             <select
//               {...register("category", { required: true })}
//               className="w-full border p-2 rounded-md"
//             >
//               <option value="Sedan">Sedan</option>
//               <option value="SUV">SUV</option>
//               <option value="Coupe">Coupe</option>
//               <option value="Convertible">Convertible</option>
//               <option value="Truck">Truck</option>
//             </select>
//           </div>

//           {/* Description */}
//           <div>
//             <label className="block text-sm font-medium">Description</label>
//             <textarea
//               {...register("description", { required: true })}
//               className="w-full border p-2 rounded-md"
//             />
//           </div>

//           {/* Quantity */}
//           <div>
//             <label className="block text-sm font-medium">Quantity</label>
//             <input
//               {...register("quantity", { required: true, valueAsNumber: true })}
//               type="number"
//               className="w-full border p-2 rounded-md"
//             />
//           </div>

//           {/* In Stock */}
//           <div className="flex items-center gap-2">
//             <input
//               {...register("inStock")}
//               type="checkbox"
//               className="w-4 h-4"
//             />
//             <label className="text-sm">In Stock</label>
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
//           >
//             Create Car
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default CreateCar;
