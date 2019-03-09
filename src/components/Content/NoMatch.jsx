import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
// Material-UI
import Typography from "@material-ui/core/Typography";

// We can inject some CSS into the DOM.
const styles = theme => ({});

function NoMatch(props) {
  const { classes, children, className, ...other } = props;

  return (
    <div>
      <Typography paragraph>Seems like you hit a wrong turn.</Typography>
    </div>
  );
}

NoMatch.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string
};

export default withStyles(styles)(NoMatch);
