import Category from "../components/Categorys/Category";
import CategoryItem from "../components/Categorys/CategoryItem";
import Features from "../components/Features";
import HeroCarousel from "../components/Home/HeroCarousel";

const Home = () => {

    return (
        <div>
            <HeroCarousel/>
            <Features/>
            <Category/>
            <CategoryItem/>
        </div>
    )
};

export default Home;