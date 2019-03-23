import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  text: {
    fontSize: 10,
    marginLeft: "auto",
    marginRight: "auto"
  }
});

function Copyright(props) {
  const { classes, children, className, ...other } = props;

  return (
    <Typography className={classes.text}>
      {props.name} &copy;{props.year}
    </Typography>
  );
}

Copyright.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired
};

export default withStyles(styles)(Copyright);
