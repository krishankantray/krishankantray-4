import {React } from 'react' ;
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
  }));

export default function DrawerContent() { 
  const classes = useStyles();

    return (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <ListItem button key={'blog'}>
          <ListItemIcon> <i class="fas fa-book fa-lg" color="#5D6D7E"></i> </ListItemIcon>
          <ListItemText primary={'Blog'} />
        </ListItem>
        <ListItem button key={'Resume'}>
          <ListItemIcon> <i class="fas fa-file-alt fa-lg" color="#5D6D7E"></i> </ListItemIcon>
          <ListItemText primary={'Resume'} />
        </ListItem>
        <ListItem button key={'project'}>
          <ListItemIcon> <i class="fas fa-tools fa-lg" color="#5D6D7E" ></i> </ListItemIcon>
          <ListItemText primary={'Projects'} />
        </ListItem>
        <ListItem button key={'contact'}>
          <ListItemIcon> <i class="fas fa-address-book fa-lg" color="#5D6D7E"></i> </ListItemIcon>
          <ListItemText primary={'Contact'} />
        </ListItem>
      </List>
    </div>
   );
}  