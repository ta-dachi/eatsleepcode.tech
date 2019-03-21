import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import Hidden from "@material-ui/core/Hidden";
import { observer } from "mobx-react";
import UIStore from "../../store/UIStore";

const styles = theme => ({
  root: {
    width: "100%"
  }
});

@observer
class ToggleDarkModeSwitch extends React.Component {
  render() {
    return (
      <Switch
        checked={UIStore.darkMode}
        onChange={UIStore.ToggleDarkMode}
        value="hidden"
        color="primary"
      />
    );
  }
}

ToggleDarkModeSwitch.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ToggleDarkModeSwitch);
