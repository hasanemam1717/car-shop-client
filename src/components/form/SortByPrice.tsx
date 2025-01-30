import { Select } from "antd";

const SortByPrice = () => {
  const handleChange = (value: string) => {
    console.log(`${value}`);
  };
  return (
    <Select
      defaultValue="Low"
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
    />
  );
};

export default SortByPrice;
