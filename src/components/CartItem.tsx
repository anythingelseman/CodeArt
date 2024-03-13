import { useShoppingCart } from "../context/ShoppingCartContext";
import { CourseType } from "../types/Course";
import formatCurrency from "../utilities/formatCurrency";

type CartItemProps = {
  id: string;
  quantity: number;
};

const CartItem: React.FC<{
  cartItem: CartItemProps;
  courses: CourseType[];
}> = ({ cartItem, courses }) => {
  const course = courses.find((course) => course._id === cartItem.id);
  const { increaseCartQuantity, decreaseCartQuantity, removeFromCart } =
    useShoppingCart();
  return (
    <li className="flex py-6">
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img src={course?.image} className="h-full w-full object-center" />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>{course?.title}</h3>
            <p className="ml-4">
              {course && formatCurrency(course?.price * cartItem.quantity)}
            </p>
          </div>
          <p className="mt-1 text-sm text-gray-500">
            Đơn giá: {course && formatCurrency(course?.price)}
          </p>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm ">
          <button className="flex gap-3 items-center justify-center ">
            <div
              className=" text-[#172554] text-xl cursor-pointer"
              onClick={() => {
                decreaseCartQuantity(cartItem.id);
              }}
            >
              -
            </div>
            <p className="text-gray-500">Số lượng: {cartItem.quantity}</p>
            <button
              className=" text-[#172554] text-xl cursor-pointer"
              onClick={() => {
                increaseCartQuantity(cartItem.id);
              }}
            >
              +
            </button>
          </button>
          <div className="flex">
            <button
              onClick={() => removeFromCart(cartItem.id)}
              type="button"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Xóa
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
