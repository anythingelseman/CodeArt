import ContactForm from "../components/ContactForm";

const CheckoutPage = () => {
  return (
    <div className="w-full mt-3 bg-[#fff] pt-3 mx-auto">
      <div className="max-w-[90%] lg:max-w-[70%] w-full mx-auto">
        <p className="text-[#172554] font-bold text-[25px] uppercase text-center ">
          Thanh toán đơn hàng
        </p>
        <div className="flex flex-wrap mt-5">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
