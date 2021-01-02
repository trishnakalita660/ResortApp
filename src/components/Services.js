import React, { Component } from 'react'
import Title from './Title';
import {FaCocktail, FaBeer, FaHiking, FaShuttleVan} from 'react-icons/fa'
export default class Services extends Component {

    state={
        services:[
            {
                icon: <FaCocktail/>,
                title: 'Free Cocktail',
                info:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '

            },
            {
                icon: <FaHiking/>,
                title: 'Hiking',
                info:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '

            }, 
            {
                icon: <FaShuttleVan/>,
                title: 'ShuttleVan',
                info:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '

            }, 
            {
                icon: <FaBeer/>,
                title: 'Free Beer',
                info:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '

            },
        ]
    }


    render() {
        return (
            <section className="services">

              <Title title="Our Services"/>
           
              <div className="services-center">
              {this.state.services.map(item=>{

                return (<article  className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p></article>)
              })}</div>
              </section>

        )
    }
}
