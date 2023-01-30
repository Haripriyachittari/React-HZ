const carausalImg =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/";

const Carausal = ({ creativeId }) => {
  return (
    <div className=" w-[200px] h-[200px]">
      <img src={carausalImg + creativeId} alt={creativeId} />
    </div>
  );
};

export default Carausal;
