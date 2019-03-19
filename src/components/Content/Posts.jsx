import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
// Material-UI
import Typography from "@material-ui/core/Typography";

// We can inject some CSS into the DOM.
const styles = theme => ({});

function Posts(props) {
  const { classes, children, className, ...other } = props;

  document.title = "Posts";

  return (
    <div>
      <Typography paragraph>
        This is where my posts about all my interests will be.
      </Typography>
    </div>
  );
}

Posts.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string
};

export default withStyles(styles)(Posts);
