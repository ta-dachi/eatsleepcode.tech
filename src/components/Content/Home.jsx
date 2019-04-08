import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
// Material-UI
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Grow from "@material-ui/core/Grow";

// We can inject some CSS into the DOM.
const styles = theme => ({
  root: {
    flexGrow: 1,
    overflow: "hidden",
    padding: `0 ${theme.spacing.unit * 3}px`
  },
  paper: {
    maxWidth: 1024,
    margin: `${theme.spacing.unit}px auto`,
    padding: theme.spacing.unit * 2
  },
  text: {
    [theme.breakpoints.down("sm")]: {
      fontSize: 12
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 15
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: 20
    }
  }
});

function Home(props) {
  const { classes, children, className, ...other } = props;

  document.title = "Home";

  return (
    <div className={classes.root}>
      <Grow in={true} style={{ transitionDelay: "100ms" }}>
        <Paper className={classes.paper}>
          <Grid container wrap="nowrap" spacing={16}>
            <Grid item>
              <Avatar>TA</Avatar>
            </Grid>
            <Grid item xs>
              <Typography paragraph className={classes.text}>
                I am a developer in Victoria, BC. Most of my projects are web
                based, But I can build a variety of web applications that fit
                your needs. My strong points include HTML/CSS, Javascript(React,
                NodeJS).
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Grow>
      <Grow in={true} style={{ transitionDelay: "150ms" }}>
        <Paper className={classes.paper}>
          <Grid container wrap="nowrap" spacing={16}>
            <Grid item>
              <Avatar>TA</Avatar>
            </Grid>
            <Grid item xs>
              <Typography paragraph className={classes.text}>
                My Interests are not limited to programming, but also I.T and
                Networking.
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Grow>
      <Grow in={true} style={{ transitionDelay: "200ms" }}>
        <Paper className={classes.paper}>
          <Grid container wrap="nowrap" spacing={16}>
            <Grid item>
              <Avatar>TA</Avatar>
            </Grid>
            <Grid item xs>
              <Typography paragraph className={classes.text}>
                This section and the rest of the website is under construction!
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Grow>
    </div>
  );
}

Home.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string
};

export default withStyles(styles)(Home);
