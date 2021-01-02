import React, {useState} from 'react' ;
import { useHistory } from 'react-router-dom';
import '../styles/contact.css' ;

export default function Form(props){
    const [state, setState] = useState({name: "", email: "", message: ""});
    const [errors, setErrors] = useState({nameErr: "", emailErr: "", messageErr: ""}) ;
    const [submitting, setSubmitting] = useState(false);
    
    const history = useHistory();

    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
      }
    const handleSubmit = e => {
        if(state.name === ""){
            setErrors({...errors, nameErr:"❌ Please Enter Your Name"}) ;
        }
        else if(state.email === ""){
            setErrors({...errors, emailErr:"❌ Please Enter Your Email"}) ;
        }
        else if(state.message === ""){
            setErrors({...errors, messageErr:"❌ Please Enter Your Message"}) ;
        }
        if(state.name && state.email && state.message){
            setSubmitting(true) ;
            fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...state })
            })
            .then(() => {
                setSubmitting(false) ;
                history.push("/contact/thankyou");
            })
            .catch(error => alert(error)); 
        }
        e.preventDefault();
      };
  
    const handleChange = e => {
        switch(e.target.name) {
            case 'name': 
                setErrors({...errors, nameErr: "" }) ;
                break;
            case 'email': 
                setErrors({...errors, emailErr: "" }) ;
                break;
            case 'message': 
                setErrors({...errors, messageErr: "" }) ;
                break;
        }
        setState({ ...state ,  [e.target.name]: e.target.value }) ;
    };

    return (
        <div className="contact-form">
            <div className="contact-us-left">
                <form name="contact" method="POST" onSubmit={handleSubmit} autocomplete="off" className="form">
                <p>
                    <input className="text-field" type="text" name="name" value={state.name} placeholder="Name" onChange={handleChange} />
                    <label className="error-message"> {errors.nameErr} </label>
                </p>
                <p>
                    <input className="text-field" type="email" name="email" placeholder="E-Mail" value={state.email} onChange={handleChange} />
                    <label className="error-message">{errors.emailErr}</label>
                </p>
                <p>
                    <textarea className="text-field" rows="6" name="message" placeholder="Your message here" value={state.message} onChange={handleChange} />
                    <label className="error-message">{errors.messageErr}</label>
                </p>
                <p>
                    {
                        submitting ? ( <div class="lds-ripple"><div></div><div></div></div> )
                        :  
                        <button className="send-button" type="submit" ><i class="fas fa-paper-plane"></i> &nbsp; Send</button>
                    }
                </p>
                </form>
            </div>    
            <div className="contact-us-right">
                <img src="/images/contact-us.svg" className="contact-us-image"/>
            </div>
        </div>
    )
}