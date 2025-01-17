import Navbar from "../../components/Navbar"
import Header from "../../components/header";
import FeaturedDeals from "./FeaturedDeals";
import RecentlyVisited from "./RecentlyVisited";
import Trending from "./Trendeing";
import Footer from "../../components/footer";



const Home:React.FC = () => {
    return (
        <>
            <Navbar />
            <Header />
            <FeaturedDeals />
            <RecentlyVisited />
            <Trending />
            <Footer/>
        </>
    )
}

export default Home;