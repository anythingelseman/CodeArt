import cropcoding from "./../assets/cropcoding.png";

const ReviewSection = () => {
  return (
    <div id="reviewSection" className="w-full  mt-10 bg-[#fff] pt-8 mx-auto">
      <div className="max-w-[90%] w-full mx-auto">
        <p className="text-[#172554] font-bold text-[25px] uppercase text-center ">
          Học viên nói gì về CodeArt ?
        </p>

        <div
          className="flex flex-wrap mt-4 gap-7 justify-center items-start"
          data-aos="fade-right"
        >
          <div className="bg-[#f5f5f5] flex flex-col items-center gap-4 justify-start w-full lg:w-[30%] flex-initial p-5 mt-8  review-shadow">
            <img src={cropcoding} className="w-[150px] h-[150px] mt-10" />

            <div className="font-light text-lg text-black text-justify">
              <p>
                CodeArt không chỉ đào tạo kiến thức chuyên môn, mà còn giúp mình
                nâng cao kỹ năng làm việc. Qua các hoạt động seminar,
                teambuilding, techtalk… khả năng giao tiếp của mình đã cải
                thiện, tự tin hơn, đây là một yếu tố rất quan trọng để mình trở
                thành Sub-Leader như hiện tại.
              </p>
            </div>
            <p className="font-semibold text-xl text-black text-center">
              Lê Tấn Linh
            </p>
            <p className="font-semibold text-xl text-black text-center mt-[-10px]">
              Sub Leader, Pro Group VietNam
            </p>
          </div>
          <div className="bg-[#f5f5f5] flex flex-col items-center gap-4 justify-start w-full lg:w-[30%] flex-initial p-5 mt-8  review-shadow">
            <img src={cropcoding} className="w-[150px] h-[150px] mt-10" />

            <div className="font-light text-lg text-black text-justify">
              <p>
                Trước khi đến CodeArt, mình từng học đại học và bỏ ngang, sau đó
                cũng trải qua nhiều ngành nghề khác nhau nhưng cuối cùng vẫn
                quyết định bắt đầu lại với ngành lập trình tại CodeArt. Tập
                trung rèn luyện sau 6 tháng, mình tốt nghiệp và đi làm. Sau gần
                2 năm, mình đang là PO/Team Leader.
              </p>
            </div>
            <p className="font-semibold text-xl text-black text-center">
              Trần Hà
            </p>
            <p className="font-semibold text-xl text-black text-center mt-[-10px]">
              PO/Technical Leader, Google
            </p>
          </div>
          <div className="bg-[#f5f5f5] flex flex-col items-center gap-4 justify-start w-full lg:w-[30%] flex-initial p-5 mt-8 review-shadow">
            <img src={cropcoding} className="w-[150px] h-[150px] mt-10" />

            <div className="font-light text-lg text-black text-justify">
              <p>
                Tính kỷ luật là thứ mà mình đã được trui rèn trong suốt 6 tháng
                học tại CodeArt. Để phát triển trong ngành IT với những vị trí
                quản lý như Leader, Manager, bạn cần có năng lực cả về chuyên
                môn, ngoại ngữ, kỹ năng quản lý, ngoại ngữ… Chính sự kỷ luật đã
                giúp mình bám đuổi kế hoạch học tập và đạt được mục tiêu.
              </p>
            </div>
            <p className="font-semibold text-xl text-black text-center">
              Phan Khắc Tú
            </p>
            <p className="font-semibold text-xl text-black text-center mt-[-10px]">
              Team Leader, Hypergryph
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;
