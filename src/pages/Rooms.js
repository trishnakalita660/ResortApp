import React from 'react';
import MainBanner from '../components/MainBanner';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom'
 const Rooms = () => {
    return (
        <div>
        <MainBanner mainbanner="roomsMainBanner">
        <Banner title="Our rooms" subtitle="Checkout your stay">
        <Link to="/" className="btn-primary">
          {" "}
          Return Home
        </Link>
      </Banner>
        
        </MainBanner>
        </div>
        
    )
}

export default Rooms