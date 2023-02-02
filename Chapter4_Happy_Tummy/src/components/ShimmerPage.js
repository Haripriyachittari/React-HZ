const ShimmerPage = () => {
  return (
    <div className="">
      <div className="mt-[78px] bg-gray-200  p-4 flex flex-col md:flex-row justify-between w-full h-[200px] text-white animate-pulse  ">
        <div className="flex flex-col md:flex-row gap-6 ">
          <div className="w-[300px] h-[100px]    mx-auto md:m-0 bg-gray-300"></div>
          <div className="mx-auto md:m-0 flex flex-col  ">
            <div className=" font-bold text-4xl md:mt-6 font-poppins w-[300px] h-6 bg-gray-300"></div>
          </div>
        </div>
      </div>

      <div>
        <div className="my-4 md:ml-[280px] ">
          <div className="bg-gray-300  w-20 h-5 mb-3 animate-pulse"></div>
          <div className="bg-gray-300 w-20 h-5 animate-pulse"> </div>
        </div>
        {Array(15)
          .fill("")
          .map((a, index) => (
            <div
              key={index}
              className="flex  mx-auto w-[100%] md:w-[60%] justify-between  p-2  animate-pulse m-2 bg-gray-100 "
            >
              <div className="">
                <div className="border-2 relative mt-2 w-20 h-5  mx-auto  py-1 px-6 text-green-600 font-bold bg-gray-300 hover:text-white"></div>
                <div className="border-2 relative mt-2 w-15 h-3  mx-auto  py-1 px-6 text-green-600 font-bold bg-gray-300 hover:text-white"></div>
                <div className="border-2 relative mt-2 w-[200px] h-3  mx-auto  py-1 px-6 text-green-600 font-bold bg-gray-300 hover:text-white"></div>
              </div>
              <div className="flex flex-col">
                <div className="border-2 relative mt-2 w-10 h-10  mx-auto  py-1 px-6 text-green-600 font-bold bg-gray-300 hover:text-white"></div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
export default ShimmerPage;
