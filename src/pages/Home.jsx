import Category from "../components/Categorys/Category";
import CategoryItem from "../components/Categorys/CategoryItem";
import EnrollmentSchedule from "../components/Enroll/EnrollmentSchedule";
import Features from "../components/Features";
import HeroCarousel from "../components/Home/HeroCarousel";

const Home = () => {
  return (
    <div>
      <HeroCarousel />
      <Features />
      <Category />
      <CategoryItem />
      <EnrollmentSchedule />
    </div>
  );
};

export default Home;
