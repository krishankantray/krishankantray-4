import React from 'react' ;
import Grid from '@material-ui/core/Grid' ;
import '../styles/projects.css' ;
import Particle from '../Particle' ;
import ProjectCards from './ProjectCard' ;
import profile from '../resume/resume.json' ;

export default function Projects(){
    return (<div>
        <div className="projects-container">
            <Grid container spacing={3} direction="row">
                {profile.projects.map(d=>(
                    <Grid container item lg={6} sm={12} spacing={1}>
                        <ProjectCards proj={d} /> 
                    </Grid>
                ))}
            </Grid>
        </div>
        <Particle/>
    </div>)
}