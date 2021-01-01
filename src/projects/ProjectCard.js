import React from 'react' ;
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import '../styles/projects.css';

export default function ProjectCards(props) {
    return (
    <Card className="project-card">
      <CardActionArea>
        <CardMedia
          component="img"
          height="auto"
          width="auto"
          style={{opacity:"0.8"}}
          image={props.proj.image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.proj.title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {props.proj.github.length === 0 ? <div /> : <a title="GitHub Link" href={props.proj.github} target="_blank" style={{marginRight: '20px'}}><i class="fab fa-github" style={{color: '#D7DBDD', fontSize: '20px'}}></i></a>}  
        {props.proj.demoLink.length === 0 ? <div/> : <a title="Visit App" href={props.proj.demoLink} target="_blank"><i class="fas fa-globe" style={{color: '#D7DBDD', fontSize: '20px'}}></i></a> }
      </CardActions>
    </Card>
    )
}