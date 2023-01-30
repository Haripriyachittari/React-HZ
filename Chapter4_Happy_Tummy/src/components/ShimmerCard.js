const ShimmerCard = () => {
  return (
    <div className="w-[300px] h-[300px] p-2 border  ">
      <div className="  w-[280] h-[170px]  bg-gray-300 animate-pulse "></div>
      <div className="w-[200px] h-3 my-2 bg-gray-300 animate-pulse"></div>
      <div className="w-[100px] h-3 my-2 bg-gray-300 animate-pulse"></div>
      <div className="flex justify-between items-center ">
        <div className="w-10 h-5 bg-gray-300 animate-pulse"></div>
        <div className="w-10 h-5 bg-gray-300 animate-pulse"></div>
        <div className="w-10 h-5 bg-gray-300 animate-pulse"></div>
      </div>
      <div></div>
      <div className="w-[280px] h-5 bg-gray-300 animate-pulse my-2 "></div>
    </div>
  );
};

export default ShimmerCard;
