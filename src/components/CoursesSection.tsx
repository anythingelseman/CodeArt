import Course from "./Course";

const CoursesSection = () => {
  return (
    <div id="coursesSection" className="w-full  mt-10 bg-[#fff] pt-8 mx-auto">
      <div className="max-w-[85%] w-full mx-auto">
        <p className="text-[#172554] font-bold text-[25px] uppercase text-center ">
          Danh sách khóa học
        </p>

        <div
          className="flex flex-wrap mt-4 gap-10 justify-center items-center"
          data-aos="fade-right"
        >
          <Course />
          <Course />
          <Course />
          <Course />
          <Course />
          <Course />
        </div>
      </div>
    </div>
  );
};
export default CoursesSection;
