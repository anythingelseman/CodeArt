// import coursebg from "../assets/coursebg.png";
import { Link } from "react-router-dom";
import { CourseType } from "../types/Course";
import formatCurrency from "../utilities/formatCurrency";

const Course: React.FC<{ course: CourseType }> = ({ course }) => {
  return (
    <div className="flex flex-col items-center gap-4 justify-start w-full lg:w-[25%] flex-initial p-5 mt-8 bg-[#172554] rounded-md">
      <img src={course.image} className="w-full h-[150px] rounded-md" />
      <p className="font-bold text-center text-xl text-[#fff] uppercase h-[80px]  overflow-y-scroll title">
        {course.title}
      </p>
      <p className="font-semibold text-center text-md text-[#fff]">
        Giảng viên: {course.creator.first_name} {course.creator.last_name}
      </p>
      <p className="font-bold text-center text-2xl text-[#fff]">
        {formatCurrency(course.price)}
      </p>
      <Link to={`/course/${course._id}`}>
        <button className="bg-[#f05a1a] text-white px-4 py-2 rounded-md">
          <p className="font-semibold text-center text-md text-[#fff]">
            Chi Tiết
          </p>
        </button>
      </Link>
    </div>
  );
};
export default Course;
