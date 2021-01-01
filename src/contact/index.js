import React from 'react' ;
import Form from './Form';
import Particle from '../Particle' ; 
import '../styles/contact.css' ;

export default function Contact() {
    return(
        <>
            <div className="contact-container">
                <Form />
            </div>
            <Particle/>
        </>
    )
}