import React, { Fragment } from "react";
import MainBanner from "../components/MainBanner";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";
function Home() {
  return (

    <Fragment>
    <MainBanner>
      <Banner title="luxurious rooms" subtitle="deluxe rooms starting at $299">
        <Link to="/Rooms" className="btn-primary">
          {" "}
          Checkout Rooms
        </Link>
      </Banner>
    </MainBanner>
    <Services/>
    <FeaturedRooms/>
    </Fragment>
  );
}

export default Home;
