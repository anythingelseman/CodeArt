import coursebg from "../assets/coursebg.png";

const Course = () => {
  return (
    <div className="flex flex-col items-center gap-4 justify-start w-full lg:w-[25%] flex-initial p-5 mt-8 bg-[#172554] rounded-md">
      <img src={coursebg} className="w-full h-[150px] object-fit rounded-md" />
      <p className="font-bold text-center text-xl text-[#fff] uppercase">
        Làm chủ Nodejs trong 30 ngày
      </p>
      <p className="font-semibold text-center text-md text-[#fff]">
        Giảng viên: Hồ Tấn Tài
      </p>
      <p className="font-bold text-center text-2xl text-[#fff]">1,900,000 đ</p>
      <button className="bg-[#f05a1a] text-white px-4 py-2 rounded-md">
        <p className="font-semibold text-center text-md text-[#fff]">
          Chi Tiết
        </p>
      </button>
    </div>
  );
};
export default Course;
