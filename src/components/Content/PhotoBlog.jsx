import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
// Material-UI
import Typography from "@material-ui/core/Typography";

// We can inject some CSS into the DOM.
const styles = theme => ({});

function PhotoBlog(props) {
  const { classes, children, className, ...other } = props;

  document.title = "Photo Blog";

  return (
    <div>
      <Typography paragraph>This is my Photo Blog will be.</Typography>
    </div>
  );
}

PhotoBlog.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string
};

export default withStyles(styles)(PhotoBlog);
