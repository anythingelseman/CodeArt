import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";

import CoursePage from "./pages/CoursePage";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import CheckoutPage from "./pages/CheckoutPage";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <ShoppingCartProvider>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/course/:id" element={<CoursePage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 5000,
        }}
      />
    </ShoppingCartProvider>
  );
};

export default App;
