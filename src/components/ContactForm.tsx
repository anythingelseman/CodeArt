import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CourseType } from "../types/Course";
import apiClient from "../services/apiClient";
import formatCurrency from "../utilities/formatCurrency";
import { useShoppingCart } from "../context/ShoppingCartContext";
import toast from "react-hot-toast";
const ContactForm = () => {
  const navigate = useNavigate();
  const { cartItems } = useShoppingCart();
  const [formData, setFormData] = useState<any>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData);
  };

  const [courses, setCourses] = useState<CourseType[]>();

  useEffect(() => {
    const fetchData = async () => {
      const response = await apiClient.get("/course/");
      setCourses(response.data.courses);
    };
    fetchData();
  }, []);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      Object.values(formData).some(
        (value) =>
          (typeof value === "string" && value.trim() === "") ||
          value === null ||
          value === undefined
      )
    ) {
      toast.error("Hãy điền đầy đủ thông tin");
      return;
    }
    navigate("/");
  };
  return (
    <div className="flex flex-col justify-center w-[90%] lg:w-[60%] flex-initial bg-[#e2e2e2] rounded-md pb-5 mb-5 mx-auto">
      <p className="text-center text-xl my-3 font-semibold text-[#535156]">
        Thông tin liên hệ
      </p>
      <form className="flex flex-col w-[90%] mx-auto" onSubmit={submitHandler}>
        <p className="font-medium my-2">Địa chỉ email</p>
        <input
          type="email"
          className="w-full p-2  border border-gray-300 rounded-md"
          onChange={handleChange}
          name="email"
        />
        <p className="font-medium my-2">Họ và tên</p>
        <input
          name="name"
          type="text"
          className="w-full p-2 border border-gray-300 rounded-md"
          onChange={handleChange}
        />
        <p className="font-medium my-2">Địa chỉ nhà</p>
        <input
          name="address"
          type="text"
          className="w-full p-2 border border-gray-300 rounded-md"
          onChange={handleChange}
        />
        <p className="font-medium my-2">Số điện thoại</p>
        <input
          name="phone"
          type="text"
          className="w-full p-2 border border-gray-300 rounded-md"
          onChange={handleChange}
        />
        <p className="font-bold text-lg my-3 text-[#535156]">
          Phương thức thanh toán
        </p>

        <div className="w-[90%] rouned-md border-3 flex flex-col items-center mx-auto mb-5">
          <p className="my-2 font-semibold">Chuyển khoản ngân hàng</p>
          <div className="text-justify">
            Thực hiện thanh toán vào ngay tài khoản ngân hàng của chúng tôi. Đơn
            hàng sẽ đươc giao sau khi tiền đã chuyển.
          </div>

          <p className="font-semibold mt-5 mb-2 text-2xl text-center">
            Tổng số tiền:{" "}
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = courses?.find((i) => i._id === cartItem.id);
                return total + (item?.price || 0) * cartItem.quantity;
              }, 0)
            )}
          </p>
        </div>
        <hr className="border-black mb-2" />

        <div className="text-justify text-[#374151]">
          Dữ liệu cá nhân của bạn sẽ được sử dụng để xử lý đơn đặt hàng, hỗ trợ
          trải nghiệm của bạn trên trang web này và cho các mục đích khác được
          mô tả trong phần chính sách riêng tư của chúng tôi .
        </div>

        <button
          type="submit"
          className="mt-6 flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
        >
          Thanh toán
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
