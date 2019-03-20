import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    width: "100%"
  }
});

class ToggleDarkMode extends React.Component {
  render() {
    return (
      <Switch
        checked={hidden}
        onChange={this.handleHiddenChange}
        value="hidden"
        color="primary"
      />
    );
  }
}

ToggleDarkMode.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ToggleDarkMode);
