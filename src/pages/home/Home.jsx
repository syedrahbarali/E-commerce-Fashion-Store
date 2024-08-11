import { Outlet } from "react-router-dom";
import Banner from "../../components/banner/Banner";
import BannerOffer from "../../components/banner_offer/BannerOffer";
import BestDeals from "../../components/best_deals/BestDeals";
import BlockBusterDeals from "../../components/blockbuster_deals/BlockBusterDeals";
import Category from "../../components/category/Category";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <Category />
      <Banner />
      <BestDeals />
      <BlockBusterDeals />
      <BannerOffer />
      <Outlet />
    </div>
  );
};

export default Home;
