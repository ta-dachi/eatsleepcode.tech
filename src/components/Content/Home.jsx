import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
// Material-UI
import Typography from "@material-ui/core/Typography";

// We can inject some CSS into the DOM.
const styles = theme => ({});

function Home(props) {
  const { classes, children, className, ...other } = props;

  return (
    <div>
      <Typography paragraph>
        I am a developer in Victoria, BC. Most of my projects are web based, But
        I can build a variety of web applications that fit your needs. My strong
        points include HTML/CSS, Javascript(React, NodeJS).
      </Typography>
      <Typography paragraph>
        My Interests are not limited to programming, but also I.T and
        Networking.
      </Typography>
      <Typography paragraph>
        This section and the rest of the website is under construction!
      </Typography>
    </div>
  );
}

Home.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string
};

export default withStyles(styles)(Home);
