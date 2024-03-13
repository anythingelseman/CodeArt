import Course from "./Course";

import { CourseType } from "../types/Course";

const CoursesSection: React.FC<{ courses: CourseType[] | undefined }> = ({
  courses,
}) => {
  return (
    <div id="coursesSection" className="w-full  mt-10 bg-[#fff] pt-8 mx-auto">
      <div className="max-w-[90%] w-full mx-auto">
        <p className="text-[#172554] font-bold text-[25px] uppercase text-center ">
          Danh sách khóa học
        </p>

        <div
          className="flex flex-wrap mt-4 gap-10 justify-center items-center"
          data-aos="fade-right"
        >
          {courses?.map((course) => (
            <Course key={course._id} course={course} />
          ))}

          {/* <Course />
          <Course />
          <Course />
          <Course />
          <Course />
          <Course /> */}
        </div>
      </div>
    </div>
  );
};
export default CoursesSection;
