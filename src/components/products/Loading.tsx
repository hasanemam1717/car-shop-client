import { RingLoader } from "react-spinners";

const Loading = () => {
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center text-yellow-100">
        <RingLoader
          color="rgba(255, 0, 0, 1)"
          loading={true}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    </div>
  );
};

export default Loading;
