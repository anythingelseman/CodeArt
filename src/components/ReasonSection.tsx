import { useEffect } from "react";
import reason1 from "../assets/reason1.png";
import reason2 from "../assets/reason2.png";
import reason3 from "../assets/reason3.png";
import reason4 from "../assets/reason4.png";
import Aos from "aos";
import "aos/dist/aos.css";

const ReasonSection = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, offset: 200, delay: 300 });
  }, []);

  return (
    <div className="w-full  mt-10 bg-[#172554] pt-8 mx-auto">
      <div className="max-w-[85%] w-full mx-auto">
        <p className="text-[#fff] font-bold text-[25px] uppercase text-center ">
          Vì sao bạn nên chọn codeart
        </p>

        <div className="flex flex-wrap mt-4" data-aos="fade-right">
          <div className="flex flex-col items-center gap-4 justify-start w-1/2 lg:w-1/4 flex-initial px-7 mt-8">
            <img src={reason1} className="w-[75px] h-[75px]" />
            <div className="h-[130px] lg:h-[85px] ">
              <p className="font-bold text-xl text-[#f05a1a] text-center ">
                Nắm chắc nghề "hot" nhất thời đại 4.0
              </p>
            </div>
            <div className="font-light text-lg text-[#fff] text-justify">
              <p>
                Với chương trình đào tạo nghề bài bản theo mô hình Coding
                Bootcamp, CodeArt sẽ đưa bạn từ con số 0 đến với nghề nghiệp mơ
                ước chỉ trong 20 tuần với chi phí chỉ bằng 1/10 chương trình đào
                tạo truyền thống. Bạn sẽ có việc làm ngay trong 90 ngày sau khi
                học xong mà không mất bất kỳ chi phí xin việc nào.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4 justify-start w-1/2 lg:w-1/4 flex-initial px-7 mt-8">
            <img src={reason3} className="w-[75px] h-[75px]" />
            <div className="h-[130px] lg:h-[85px]">
              <p className="font-bold text-xl text-[#f05a1a] text-center">
                Cam kết việc làm 100% bằng văn bản
              </p>
            </div>
            <div className="font-light text-lg text-[#fff] text-justify">
              <p>
                CodeArt cam kết việc làm bằng hợp đồng pháp lý, hoàn 100% học
                phí nếu bạn không nhận được việc làm trong vòng 90 ngày kể từ
                khi tốt nghiệp. Mặc dù hơn 80% học viên không có kinh nghiệm về
                lập trình trước đó, 100% học viên tốt nghiệp tại CodeArt đã đi
                làm với mức lương khởi điểm trung bình từ 8-12 triệu.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4 justify-start w-1/2 lg:w-1/4 flex-initial px-7 mt-8">
            <img src={reason4} className="w-[75px] h-[75px]" />
            <div className="h-[130px] lg:h-[85px]">
              <p className="font-bold text-xl text-[#f05a1a] text-center">
                Học tiếng Anh và luyện thi chứng chỉ quốc tế
              </p>
            </div>
            <div className="font-light text-lg text-[#fff] text-justify">
              <p>
                Sau khi tốt nghiệp khoá lập trình, học viên tiếp tục được
                CodeArt đào tạo tiếng Anh chuyên ngành IT và luyện thi chứng chỉ
                quốc tế (OCA) hoàn toàn miễn phí. Việc này giúp học viên nâng
                cao lợi thế cạnh tranh việc làm, tăng mức lương và cơ hội thăng
                tiến, bền vững trong suốt lộ trình nghề nghiệp sau này.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4 justify-start w-1/2 lg:w-1/4 flex-initial px-7 mt-8">
            <img src={reason2} className="w-[75px] h-[75px]" />
            <div className="h-[130px] lg:h-[85px]">
              <p className="font-bold text-xl text-[#f05a1a] text-center">
                Bất kì ai cũng có thể học được - làm được!
              </p>
            </div>
            <div className="font-light text-lg text-[#fff] text-justify">
              <p>
                Chương trình đào tạo sát với nhu cầu tuyển dụng của doanh
                nghiệp, lộ trình học tập và huấn luyện được cá nhân hoá đến từng
                học viên thông qua hệ thống phần mềm học tập hiện đại. Bạn sẽ
                được các huấn luyện viên hỗ trợ 1-1 trong suốt khóa học. Có thể
                học lại hoàn toàn miễn phí cho tới khi làm được việc.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReasonSection;
