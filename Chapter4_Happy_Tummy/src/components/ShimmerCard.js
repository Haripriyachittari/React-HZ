const ShimmerCard = () => {
  return (
    <div className="w-[300px] h-[300px] p-2 border ">
      <div className="  w-[280] h-[170px]  bg-gray-200 "></div>
      <div className="w-[200px] h-3 my-2 bg-gray-200"></div>
      <div className="w-[100px] h-3 my-2 bg-gray-200"></div>
      <div className="flex justify-between items-center ">
        <div className="w-10 h-5 bg-gray-200"></div>
        <div className="w-10 h-5 bg-gray-200"></div>
        <div className="w-10 h-5 bg-gray-200"></div>
      </div>
      <div></div>
      <div className="w-[280px] h-4 bg-gray-200 my-2 rounded"></div>
    </div>
  );
};

export default ShimmerCard;
