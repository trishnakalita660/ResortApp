import React from 'react';
import defaultImg from '../images/room-12.jpeg';
import PropTypes from 'prop-types'
import {Link } from 'react-router-dom';
export default function Room({room}) {

    const {name, slug,images,price} = room;

    return (
       <article className="room">
       <div className="img-container">
       <img src={images[0] || defaultImg} alt="image"/>

       <div className="price-top">
       <h6>${price}</h6>
       <p>per night</p>
       </div>
<Link to={`/Rooms/${slug}`} className="btn-primary room-link"> Features</Link>
       </div>
       <p className="room-info">{name}</p>
       </article>
    )
}

Room.pgropTypes={
    room: PropTypes.shape({
        name: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
        price: PropTypes.number.isRequired,
    })
}
