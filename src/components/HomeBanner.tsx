import banner from "./../assets/home-banner.avif";
import cropcoding from "./../assets/cropcoding.png";
const HomeBanner = () => {
  return (
    <div>
      <img src={banner} className="hidden lg:block" />
      <div
        id="homeBanner"
        className="bg-[#172554] lg:bg-inherit lg:absolute top-1/2 left-1/2 w-full z-[1] lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 pb-5"
      >
        <div className="max-w-[80%] w-full mx-auto">
          <div className="flex flex-wrap">
            <div className="flex justify-center w-full lg:w-1/2 flex-initial ">
              <img
                src={cropcoding}
                className="w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] object-fit align-middle mt-[132px] lg:mt-0 "
              />
            </div>
            <div className="flex items-center justify-center w-full lg:w-1/2 flex-initial">
              <div className="flex flex-col gap-3 items-center justify-center mt-3">
                <h1 className="text-[#fff] font-bold text-[25px]">CODEART</h1>
                <h1 className="text-[#fff] font-bold text-[20px] text-center">
                  MÔ HÌNH ĐÀO TẠO LẬP TRÌNH HIỆN ĐẠI
                </h1>
                <h1 className="text-[#fff] font-semibold text-base uppercase mt-5">
                  NỖ LỰC - TẬP TRUNG - HIỆU QUẢ
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
