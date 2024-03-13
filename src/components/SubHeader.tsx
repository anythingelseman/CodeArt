import logo from "./../assets/logo.png";
import { Link } from "react-router-dom";
const SubHeader = () => {
  return (
    <div className="fixed w-full z-[100] top-0 bg-header">
      <div className="flex items-center w-full mt-3">
        <div className="max-w-[80%] w-full mx-auto">
          <div className="flex justify-between items-center pt-[8px] pb-[24px]">
            <div>
              <img
                src={logo}
                alt="CodeArt"
                className="w-[150px] h-[60px] object-contain"
              />
            </div>
            <div className="hidden lg:flex justify-end items-center gap-[32px] h-[60px] pl-[96px] pr-[36px] bg-[#fff] rounded-[12px] ">
              <Link to="/#homeBanner">
                <p className="text-[#172554] text-lg font-bold cursor-pointer">
                  Trang chủ
                </p>
                {/* @ts-ignore */}
              </Link>
              <Link to="/#mapSection">
                <p className="text-[#172554] text-lg font-bold cursor-pointer">
                  Giới thiệu
                </p>
              </Link>
              <Link to="/#coursesSection">
                <p className="text-[#172554] text-lg font-bold cursor-pointer">
                  Khóa học
                </p>
              </Link>
              <Link to="/#reviewSection">
                <p className="text-[#172554] text-lg font-bold cursor-pointer">
                  Đánh giá
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
