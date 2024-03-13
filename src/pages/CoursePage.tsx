import { useParams } from "react-router-dom";
import SubHeader from "../components/SubHeader";
import { useEffect, useState } from "react";
import { CourseType } from "../types/Course";
import Footer from "../components/Footer";
import apiClient from "../services/apiClient";
import { useShoppingCart } from "../context/ShoppingCartContext";
import formatCurrency from "../utilities/formatCurrency";

const CoursePage = () => {
  const { id } = useParams();
  const [course, setCourse] = useState<CourseType>();
  const { increaseCartQuantity } = useShoppingCart();

  useEffect(() => {
    const fetchData = async () => {
      const response = await apiClient.get(`/course/${id}`);
      setCourse(response.data[0]);
    };
    fetchData();
  }, []);

  return (
    <>
      <SubHeader />

      <div className="w-full pb-8 bg-[#172554] pt-8 mx-auto flex flex-col items-center">
        <img
          src={course?.image}
          className="w-[60%] mx-auto h-[200[x] lg:h-[400px] mt-5 rounded-md"
        />
        <p className="font-bold text-center text-xl text-[#fff] uppercase mt-5">
          {course?.title}
        </p>
        <p className="font-semibold text-center text-md text-[#fff] mt-5">
          Giảng viên: {course?.creator.first_name} {course?.creator.last_name}
        </p>
        <div className="flex gap-4">
          <p className="font-bold text-center text-2xl text-[#fff] mt-5">
            Giá ưu đãi: {course && formatCurrency(course?.price)}
          </p>
          <div className="mt-2 w-48[px] h-[48px] rounded-[50%] bg-red-400 flex justify-center items-center">
            <p className="text-white font-semibold text-lg p-1">
              -{course?.discount}%
            </p>
          </div>
        </div>

        <button
          className="bg-[#f05a1a] text-white px-4 py-2 rounded-md mt-5"
          onClick={() => increaseCartQuantity(course?._id ?? "")}
        >
          <p className="font-semibold text-center text-md text-[#fff]">
            Thêm vào giỏ hàng
          </p>
        </button>
      </div>

      <div className="w-full  mt-10 bg-[#fff] pt-8 mx-auto mb-10">
        <div className="max-w-[90%] w-full mx-auto">
          <p className="text-[#172554] font-bold text-[25px] uppercase text-center ">
            Thông tin khóa học
          </p>
          <div className="font-light text-lg text-black text-justify mt-5 whitespace-pre-line">
            <p>{course?.description}</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CoursePage;
