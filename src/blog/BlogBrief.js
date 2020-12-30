import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom' ;
import '../styles/blog.css' ;
const useStyles = makeStyles((theme)=>({
  root: {
    marginLeft:'auto',
    marginRight:'auto',
    marginTop : '40px',
    maxWidth: '55%',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '95%'
    }
  },
}));

export default function ImgMediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          image={props.data.image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.data.title}
          </Typography>
          <Typography variant="body2" component="p">
            {props.data.desc}
          </Typography>
          <Typography variant="caption" color="secondary" component="p">
            {props.data.date}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={{pathname: "/read-blog", state:{data: props.data}}} className="link">
          <Button size="large" color="secondary">
            Read More ....
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
