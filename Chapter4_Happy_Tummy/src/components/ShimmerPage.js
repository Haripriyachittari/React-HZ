const ShimmerPage = () => {
  return (
    <div className="">
      <div className="mt-[78px] bg-gray-300  p-4 flex flex-col md:flex-row justify-between w-full h-[200px] text-white animate-pulse  ">
        <div className="flex flex-col md:flex-row gap-6 ">
          <div className="w-[300px] h-[100px]    mx-auto md:m-0 bg-gray-400"></div>
          <div className="mx-auto md:m-0 flex flex-col  ">
            <div className=" font-bold text-4xl md:mt-6 font-poppins w-[300px] h-6 bg-gray-400"></div>
          </div>
        </div>
      </div>

      <div>
        <div className="my-4 ml-[280px] ">
          <div className="bg-gray-300  w-20 h-5 mb-3 animate-pulse"></div>
          <div className="bg-gray-300 w-20 h-5 animate-pulse"> </div>
        </div>
        {Array(15)
          .fill("")
          .map((item) => (
            <div
              key={item.id}
              className="flex  mx-auto w-[100%] md:w-[60%] justify-between  p-2  border-b-2 hover:shadow-lg hover:bg-gray-100 "
            >
              <div className="">
                <p className="font-bold font-monteserrat">
                  <span></span>
                </p>
                <p className="font-monteserrat"></p>
                <p className="mt-5 font-poppins text-slate-500 text-sm w-[80%]"></p>
              </div>
              <div className="flex flex-col">
                <button className="border-2 relative mt-2  mx-auto  py-1 px-6 text-green-600 font-bold hover:bg-green-600 hover:text-white">
                  ADD+
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
export default ShimmerPage;
