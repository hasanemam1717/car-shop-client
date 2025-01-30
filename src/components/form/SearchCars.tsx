import { useForm } from "react-hook-form";
import { CiSearch } from "react-icons/ci";

const SearchCars = ({ handleSearch }) => {
  const { register, handleSubmit } = useForm();

  return (
    <div>
      <form onSubmit={handleSubmit(handleSearch)}>
        <div className="flex sm:w-full ">
          <input
            type="text"
            {...register("name")}
            placeholder="Search"
            className="p-1 border-gray-100  text-black bg-white rounded-l-md "
          />
          <button
            type="submit"
            className="p-2 border-2 hover:cursor-pointer  rounded-l-none rounded-r-md"
          >
            <CiSearch size={20} className="text-xl font-semibold" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchCars;
