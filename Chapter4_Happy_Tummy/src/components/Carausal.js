const carausalImg =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/";

const Carausal = ({ creativeId }) => {
  return (
    <div>
      <img src={carausalImg + creativeId} alt={creativeId} />
    </div>
  );
};

export default Carausal;
