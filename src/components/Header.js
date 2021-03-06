import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = () => {
    const classes = useStyles();
    return <div>
        <AppBar position="static">
                <Toolbar>
                    <Link to="/" style={{color: "white"}}>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"><HomeIcon/></IconButton>
                    </Link>
                    <Typography variant="h6" className={classes.title}>Resume Builder</Typography>
                    <Link to="/login" style={{color: "white"}}>
                        <Button color="inherit">Login</Button>
                    </Link>
                </Toolbar>
            </AppBar>
    </div>;
};

export default Header;
