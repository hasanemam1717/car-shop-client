import {
  Controller,
  FieldValues,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { useCreateCarMutation } from "../../redux/feature/product/productApi";
import { toast } from "sonner";

// Define the Car type
type Car = {
  name: string;
  brand: string;
  model: string;
  image?: File; // Use File type for image upload
  year: number;
  price: number;
  category: "Sedan" | "SUV" | "Truck" | "Coupe" | "Convertible";
  description: string;
  quantity: number;
  inStock: boolean;
};

const CreateCar = () => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<Car>();

  const [addCar, { data, error }] = useCreateCarMutation();

  console.log({ data, error });

  const onSubmit: SubmitHandler<Car> = (data) => {
    console.log(data);

    const formData = new FormData();
    if (data.image) {
      formData.append("file", data.image);
    }
    formData.append("data", JSON.stringify(data));
    console.log(formData);
    addCar(formData); // Send car data to the API
    toast.success("Car created successfully.", { duration: 1000 });
    reset();
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold text-center mb-6">Create Car</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Car Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Car Name
              </label>
              <input
                {...register("name", { required: "Car Name is required" })}
                type="text"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message as string}
                </p>
              )}
            </div>

            {/* Image Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Picture
              </label>
              <Controller
                name="image"
                control={control}
                render={({ field }) => (
                  <input
                    type="file"
                    onChange={(e) => field.onChange(e.target.files?.[0])}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  />
                )}
              />
            </div>

            {/* Brand */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Brand
              </label>
              <select
                {...register("brand", { required: "Brand is required" })}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="Honda">Honda</option>
                <option value="Toyota">Toyota</option>
                <option value="Ford">Ford</option>
                <option value="BMW">BMW</option>
                <option value="Tesla">Tesla</option>
              </select>
              {errors.brand && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.brand.message as string}
                </p>
              )}
            </div>

            {/* Model */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Model
              </label>
              <input
                {...register("model", { required: "Model is required" })}
                type="text"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
              {errors.model && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.model.message as string}
                </p>
              )}
            </div>

            {/* Year */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Year
              </label>
              <input
                {...register("year", {
                  required: "Year is required",
                  valueAsNumber: true, // Ensure the value is parsed as a number
                })}
                type="number"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
              {errors.year && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.year.message as string}
                </p>
              )}
            </div>

            {/* Price */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Price ($)
              </label>
              <input
                {...register("price", {
                  required: "Price is required",
                  valueAsNumber: true, // Ensure the value is parsed as a number
                })}
                type="number"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
              {errors.price && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.price.message as string}
                </p>
              )}
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Category
              </label>
              <select
                {...register("category", { required: "Category is required" })}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="Sedan">Sedan</option>
                <option value="SUV">SUV</option>
                <option value="Truck">Truck</option>
                <option value="Coupe">Coupe</option>
                <option value="Convertible">Convertible</option>
              </select>
              {errors.category && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.category.message as string}
                </p>
              )}
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <input
                {...register("description", {
                  required: "Description is required",
                })}
                type="text"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
              {errors.description && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.description.message as string}
                </p>
              )}
            </div>

            {/* Quantity */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Quantity
              </label>
              <input
                {...register("quantity", {
                  required: "Quantity is required",
                  valueAsNumber: true, // Ensure the value is parsed as a number
                })}
                type="number"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
              {errors.quantity && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.quantity.message as string}
                </p>
              )}
            </div>

            {/* In Stock */}
            <div className="flex items-center space-x-2">
              <input
                defaultChecked
                {...register("inStock")}
                type="checkbox"
                className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
              />
              <label className="block text-sm font-medium text-gray-700">
                In Stock
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-blue-600"
            >
              Create Car
            </button>
          </div>
        </form>
      </div>
    </div>
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
