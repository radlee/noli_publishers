import React, { Component } from 'react';
// import Logo from '../components/logo';
import JumboBG from '../components/jumbotron-bg';

class About extends Component {
    render() {
        return (
            <div>
                <br />
                <JumboBG />
                <br />
                <div className="container about-text">
                <h2>The Go <span className="gc">Crazy</span> Experience</h2>
                <br />
                <hr className="my-2 black-horizon" /> 
                <h3 className="objective">Objective</h3>
                <hr className="my-2 black-horizon" /> 
                <br />
                    <p className="about-paragraph"> Go Crazy is an independent media and entertainment movement based in Cape Town and established within the spirit of fun in order to meet the needs of the constantly altering social world. GC is dedicated to operating, organize and showcasing the hottest and exclusive events and entertainment and handling of brands, arts, social networks, lifestyle and website via advertising & marketing, merchandising and production.

                        Go Crazy experience brings you the next level of entertainment and party lifestyle panorama photos as well as video clips to describe the tradition of social activities that take place in the Mother City and other Cities in SA. G.C provides an online blog platform to present the Nightlife social experience through photographic images and short video clips at Night clubs, bars, lounges, fashion shows, beaches, and other special events.

                        Go Crazy also provides services such as planning, organizing and hosting of events, direct marketing to brand clients, night club promotions via its representative photographers and other special digital properties.

                        G.C aims to deliver relevant, incorporated services to its advertisers to offer expertise in designing and implementing promotional campaigns. Our objective is to create an influential platform to fit into place an audience in brand establishment and communication campaigns relevant to their social lives.

                        Our activities aim at creating high potential opportunities to empower and elevate the development of young South Africans in reaching their full prospective and promoting project campaigns through talent, modelling, creativity and entertainment.
                    </p>
                    <br />
                    <hr className="my-2 black-horizon" /> 
                    <h3 className="aim">Aim</h3>
                    <hr className="my-2 black-horizon" />
                    <br />
                    <p className="about-paragraph">
                        To build up a proud & leading media and entertainment Management Company as a revolutionary solution to link brands and consumers by means of delivering distinctive qualities in brand communication and remarkable entertainment experiences.
                    </p>
                </div>
            </div>
        )
    }
}

export default About;