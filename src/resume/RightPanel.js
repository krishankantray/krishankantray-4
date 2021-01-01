import React from 'react' ;
import moment from 'moment';
import {Link} from 'react-router-dom';
import profile from './resume.json';
import '../styles/resume.css' ;

export default function RightPanel() {
    console.log(profile);
    return (
        <>
        <div className="resume-body-separator">
            <div className="resume-heading"> Experience </div>
            {profile.work.map((d,i)=>(
            <>
            <div className="experience-table">
                <table border="0" width="100%">
                    <tr>
                        <td><p className="resume-text-5"><b>{d.position}</b></p></td>
                        <td style={{textAlign:'right', color: '#C1E0FF'}}><i> ( {moment(d.startDate, "YYYY-MM-DD").format("MMM YYYY").toString()} - {d.endDate ? moment(d.endDate, "YYYY-MM-DD").format("MMM YYYY").toString() : "Present"} )</i></td>
                    </tr>
                    <tr>
                        <td><a href={d.website} target="_blank" className="experience-company">{d.company}</a></td>
                    </tr>
                    <tr>
                        <td><span className="experience-glow-text">Language : </span> {d.highlights.languages.map(d=>(d+", "))}</td>
                    </tr>
                    <tr>
                        <td><span className="experience-glow-text">Tools used : </span> {d.highlights.tools.map(d=>d+", ")}</td>
                    </tr>
                    <tr>
                        <td><span className="experience-glow-text">Project : </span>{d.highlights.projects.map(d=>d)}</td>
                    </tr>
                </table>
            </div>
            { i+1 < profile.work.length && <hr className="divider"/>}
        </>))
        }
        </div>
        <div className="resume-body-separator">
        <div className="resume-heading"> Projects </div>
        <Link exact to="/projects" className="experience-company"><i class="fas fa-paper-plane"></i> &nbsp; Projects Page</Link>
        {profile.projects.map((d,i)=>(
            <>
            <div className="experience-table">
                <table border="0" width="100%">
                    <tr>
                        <td><p className="resume-text-5"><b>{d.title}</b></p></td>                    
                    </tr>
                    <tr>
                        <span>{d.desc}</span>
                    </tr>
                    <tr>
                        <td>
                            {d.github.length === 0 ? <div /> : <a title="GitHub Link" href={d.github} target="_blank" style={{marginRight: '20px'}}><i class="fab fa-github" style={{color: '#D7DBDD', fontSize: '20px'}}></i></a>}
                            {d.demoLink.length === 0 ? <div/> : <a title="Visit App" href={d.demoLink} target="_blank"><i class="fas fa-globe" style={{color: '#D7DBDD', fontSize: '20px'}}></i></a> }
                        </td>
                    </tr>
                </table>
            </div>
            { i+1 < profile.projects.length && <hr className="divider"/>}
        </>))
        }
        </div>

        <div className="resume-body-separator">
        <div className="resume-heading"> Education </div>
            {profile.education.map((d,i)=>(
            <>
            <div className="experience-table">
                <table border="0" width="100%">
                    <tr>
                        <td><p className="resume-text-5"><b>{d.studyType}</b></p></td>
                        <td style={{textAlign:'right', color: '#C1E0FF'}}><i> ( {moment(d.startDate, "YYYY-MM-DD").format("MMM YYYY").toString()} - {d.endDate ? moment(d.endDate, "YYYY-MM-DD").format("MMM YYYY").toString() : "Present"} )</i></td>
                    </tr>
                    <tr>
                        <td style={{color: "#67B3FF"}}><b>{d.area}</b></td>
                    </tr>
                    <tr>
                        <td>{d.institution}</td>
                    </tr>
                    <tr>
                        <td style={{color: "#D4AC0D"}}>{d.score}</td>
                    </tr>
                </table>
            </div>
            { i+1 < profile.education.length && <hr className="divider"/>}
        </>))
        }
        </div>    
        </>
    )
}