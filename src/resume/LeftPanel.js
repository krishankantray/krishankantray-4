import React from 'react' ;
import profile from './resume.json';
import Divider from '@material-ui/core/Divider';
import '../styles/resume.css' ;

export default function LeftPanel(props) {
    return (
        <>
            <img alt="Krishankant" src="/images/profile.jpg" className="avatar-img" />
            <p className="resume-text-1">{profile.basics.name}</p>
            <p className="resume-text-2">{profile.basics.label}</p>
            <div className="resume-separator">
                <p className="resume-text-3"><i className="fas fa-map-marker-alt" style={{color: '#E74C3C'}}></i> &nbsp; {profile.basics.location.city}</p> <br/>
                <p className="resume-text-3"><i className="fas fa-phone-alt" style={{color: '#40E0D0'}}></i> &nbsp; {profile.basics.phone}</p> <br/>
                <p className="resume-text-3"><i className="fas fa-envelope" style={{color: '#F1C40F'}}></i> &nbsp;  {profile.basics.email}</p> <br/>
                <p className="resume-text-3"><i class="fab fa-linkedin" style={{color: '#1DAFEF'}}></i> &nbsp; <a className="resume-link" href="https://www.linkedin.com/in/krishankantray" target="_blank">https://www.linkedin.com/in/krishankantray</a></p> <br/>
                <p className="resume-text-3"><i class="fab fa-github" style={{color: '#D7DBDD'}}></i> &nbsp; <a className="resume-link" href="https://github.com/krishankantray" target="_blank">https://github.com/krishankantray</a></p> <br/>
                <p className="resume-text-3"><i class="fas fa-globe" style={{color: '#0000FF'}}></i> &nbsp; <a className="resume-link" href="https://krishankantray.com" target="_blank">https://krishankantray.com</a></p> <br/>
            </div>
            <Divider />
            <div className="resume-separator">
                <p className="resume-text-3"><i class="fab fa-js-square" style={{color: '#F1C40F'}}></i> &nbsp; JavaScript : <div class="progress-bar-custom-80"></div> </p> <br/>
                <p className="resume-text-3"><i class="fab fa-react" style={{color: '#1DAFEF'}}></i> &nbsp; React JS : <div class="progress-bar-custom-80"></div> </p> <br/>
                <p className="resume-text-3"><i class="fab fa-node" style={{color: '#008000'}}></i> &nbsp; Node JS : <div class="progress-bar-custom-75"></div> </p> <br/>
                <p className="resume-text-3"><i class="fas fa-database"></i> &nbsp; SQL : <div class="progress-bar-custom-75"></div> </p> <br/>
                <p className="resume-text-3"><i class="fab fa-cuttlefish" style={{color: '#0B7CEE'}}></i> &nbsp; C++ : <div class="progress-bar-custom-90"></div> </p> <br/>
            </div>
            <Divider />
            <div className="resume-separator">
                <p className="resume-text-4"> <i class="fas fa-trophy" style={{color: '#F1C40F'}} ></i> &nbsp; Awards</p>
                <div className="resume-awards-ul-container">
                    <ul>
                        <li>
                            Got Rank 230 in TCS Codevita <br/>
                            <hr/>
                            <i style={{opacity: "0.6"}}>Codevita is a coding competition organised by TCS</i>
                        </li>
                        <li>
                            Six stars badge in Hackerrank problem solving <br/>
                            <hr/>
                            <i style={{opacity: "0.6"}}>HackerRank is a competitive programming platform where I has solved more than 300+ problems </i>
                        </li>
                        <li>
                            Cleared Hackwith Infy coding contest till final round <br/>
                            <hr/>
                            <i style={{opacity: "0.6"}}>Hack with infy is a coding competition organised by Infosys </i>
                        </li>
                        <li>
                            Got bronze medal at Week of code 37 and Hour Rank 29 contest at Hackerrank.
                            <hr/>
                            <i style={{opacity: "0.6"}}>Week of code and Hour Rank are contests orgainsed by HackerRank</i>
                        </li>
                        <li>
                            Around 3k view on my blog where I share problem solutions.. <br/>
                            <hr/>
                            <i style={{opacity: "0.6"}}>I have a blogging site : <a href="https://krishankantray.blogspot.com/" target="_blank" className="resume-link">https://krishankantray.blogspot.com/ </a> </i>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}