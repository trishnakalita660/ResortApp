import React from 'react'
import MainBanner from '../components/MainBanner';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom'
export default function Error() {
    return (
        <div>
        <MainBanner>
        <Banner title=" 404" subtitle="Page Not Found">
          <Link to="/" className="btn-primary">
            {" "}
            Return
          </Link>
        </Banner>
      </MainBanner>
        </div>
    )
}
