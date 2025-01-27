type THeading = {
  mainHeading: string;
  subHeading: string;
};

const SectionTitle = ({ mainHeading, subHeading }: THeading) => {
  return (
    <div className="items-center lg:text-xl p-2 lg:w-xl mx-auto space-y-2">
      <p className="text-center text-red-600">{subHeading}</p>
      <hr className="lg:w-xl w-48 mx-auto" />
      <h1 className="text-4xl uppercase text-center sm:text-2xl">
        {mainHeading}
      </h1>
    </div>
  );
};

export default SectionTitle;
