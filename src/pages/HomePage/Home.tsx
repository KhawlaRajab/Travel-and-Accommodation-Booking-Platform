import Header from "../../components/Header";
import FeaturedDeals from "./FeaturedDeals";
import RecentlyVisited from "./RecentlyVisited";
import Trending from "./Trendeing";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <FeaturedDeals />
      <RecentlyVisited />
      <Trending />
    </>
  );
};

export default Home;
