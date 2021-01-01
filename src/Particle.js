import React from 'react' ;
import Particles from 'react-particles-js';
export default function Particle(props) {
    
    return (
        <Particles
            className="particle-js"
            params={{
                "particles": {
                    "number": {
                        "value": 160,
                        "density": {
                            "enable": false
                        }
                    },
                    "size": {
                        "value": 6,
                        "random": true
                    },
                    "opacity" : {
                        "value": 0.1,
                        "random" : true
                    },
                    "move": {
                        "direction": "bottom",
                        "out_mode": "out"
                    },
                    "line_linked": {
                        "enable": false
                    }
                },
                "interactivity": {
                    "events": {
                        "onclick": {
                            "enable": true,
                            "mode": "remove"
                        },
                        "onhover": {
                            "enable": true,
                            "mode": "repulse"
                        }
                    },
                    "modes": {
                        "remove": {
                            "particles_nb": 10
                        }
                    }
                }
            }} />
    )
}