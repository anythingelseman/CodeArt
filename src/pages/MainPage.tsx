import CoursesSection from "../components/CoursesSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HomeBanner from "../components/HomeBanner";
import MapSection from "../components/MapSection";
import ReasonSection from "../components/ReasonSection";
import ReviewSection from "../components/ReviewSection";

function MainPage() {
  return (
    <div className="bg-[#fff] mb-0">
      <Header />
      <main>
        <HomeBanner />
        <MapSection />
        <ReasonSection />
        <CoursesSection />
        <ReviewSection />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default MainPage;
