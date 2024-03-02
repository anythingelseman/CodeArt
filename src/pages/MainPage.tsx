import Header from "../components/Header";
import HomeBanner from "../components/HomeBanner";
import MapSection from "../components/MapSection";
import ReasonSection from "../components/ReasonSection";

function MainPage() {
  return (
    <div className="bg-[#fff] mb-0">
      <Header />
      <main>
        <HomeBanner />
        <MapSection />
        <ReasonSection />
      </main>
    </div>
  );
}

export default MainPage;
