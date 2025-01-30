type THeading = {
  mainHeading: string;
  subHeading: string;
};

const SectionTitle = ({ mainHeading, subHeading }: THeading) => {
  return (
    <div className="items-center mt-3 mb-3 lg:text-xl p-2 lg:w-xl mx-auto space-y-2">
      <p className="text-center text-red-600">{mainHeading}</p>
      <hr className="lg:w-xl w-48 mx-auto" />
      <h1 className="text-2xl lg:text-4xl  uppercase text-center sm:text-2xl">
        {subHeading}
      </h1>
    </div>
  );
};

export default SectionTitle;
