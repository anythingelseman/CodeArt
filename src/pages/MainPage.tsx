import CoursesSection from "../components/CoursesSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HomeBanner from "../components/HomeBanner";
import MapSection from "../components/MapSection";
import ReasonSection from "../components/ReasonSection";
import ReviewSection from "../components/ReviewSection";

import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { CourseType } from "../types/Course";

import apiClient from "../services/apiClient";

function MainPage() {
  const { hash } = useLocation();
  const [courses, setCourses] = useState<CourseType[]>();

  useEffect(() => {
    const fetchData = async () => {
      const response = await apiClient.get("/course/");
      setCourses(response.data.courses);
      const targetElement = document.querySelector(hash) as HTMLElement;
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    };
    fetchData();
  }, [hash]);

  return (
    <div className="bg-[#fff] mb-0">
      <Header />

      <main>
        <HomeBanner />
        <MapSection />
        <ReasonSection />
        <CoursesSection courses={courses} />
        <ReviewSection />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default MainPage;
