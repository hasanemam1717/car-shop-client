import { CiFilter } from "react-icons/ci";

const Filterbar = () => {
  return (
    <div className="h-ful min-h-screen bg-gray-900 ">
      <div className="flex gap-2 items-center mt-5 p-1 lg:p-5 ">
        <CiFilter size={24} />
        <h1 className="font-semibold">Filter</h1>
      </div>
      <div className="mt-8 flex flex-col gap-3">
        {/* <Select
          placeholder="Brand"
          style={{ width: 250 }}
          onChange={handleChange}
          options={[
            {
              label: <span>Price</span>,
              title: "price",
              options: [
                { label: <span>Low</span>, value: "desc" },
                { label: <span>High</span>, value: "asc" },
              ],
            },
          ]}
        /> */}
        <select className="border-2 p-1  rounded-md ">
          <option className="bg-gray-900 rounded-sm" value="desc">
            High
          </option>
          <option value="asc">Low</option>
        </select>
        <select className="border-2 p-1 rounded-md ">
          <option className="bg-gray-900 rounded-sm" value="desc">
            Brand
          </option>{" "}
          <option className="bg-gray-900 rounded-sm" value="desc">
            High
          </option>
        </select>

        <button className="w-full bg-red-600 rounded-sm p-1">Reset</button>
      </div>
    </div>
  );
};

export default Filterbar;
