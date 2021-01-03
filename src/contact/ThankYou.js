import React from 'react' ;
import {Link} from 'react-router-dom' ;
import Particle from '../Particle' ;
import '../styles/thankyou.css' ;

export default function ThankYou(props) {
    return(
        <>
            <div className="thank-you-container">
                <img src="/images/thank-you.svg" className="thank-you-image" />
                <div className="thankyou">
                    <div class="thank-text">
                        Thank You 
                    </div>
                    <div class="thank-subtext">
                        I will reach back to you soon !!! 
                    </div>
                    <Link exact to="/">
                        <p className="home-button">
                            <i class="fas fa-home"></i>
                        </p>
                    </Link>
                </div>
            </div>
            <Particle /> 
        </>
    )
}