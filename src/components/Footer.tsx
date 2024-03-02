import logo from "./../assets/logo.png";

const Footer = () => {
  return (
    <div className="bg-[#172554]  w-full mt-10">
      <div className="w-full flex justify-center items-center pt-10">
        <img src={logo} className="object-fit h-[100px]" />
      </div>
      <div className="flex flex-wrap mt-10 max-w-[80%] w-full mx-auto pb-10">
        <div className="flex flex-col gap-3 items-start justify-start w-full lg:w-1/2 flex-initial  ">
          <p className="font-bold text-xl text-[#fff]">Công ty CodeArt</p>
          <p className="font-normal text-lg text-[#fff]">
            Đà Nẵng: 60 Nguyễn Trãi, quận Hải Châu, thành phố Đà Nẵng
          </p>
          <p className="font-normal text-lg text-[#fff]">
            Đà Nẵng: 60 Nguyễn Trãi, quận Hải Châu, thành phố Đà Nẵng
          </p>
          <p className="font-normal text-lg text-[#fff]">
            Đà Nẵng: 60 Nguyễn Trãi, quận Hải Châu, thành phố Đà Nẵng
          </p>
        </div>
        <div className="flex flex-col items-end justify-start w-full lg:w-1/2 flex-initial ">
          <p className="font-bold text-xl  text-[#fff]">
            Liên hệ với chúng tôi
          </p>
          <p className="font-normal text-lg text-[#fff] ">
            Email: abc@gmail.com
          </p>
          <p className="font-normal text-lg text-[#fff]">
            Số điện thoại: 0123456789
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
