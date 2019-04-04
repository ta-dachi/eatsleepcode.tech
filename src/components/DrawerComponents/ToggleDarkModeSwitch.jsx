import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import { observer } from "mobx-react";
import UIStore from "../../store/UIStore";

const styles = theme => ({
  root: {
    width: "100%"
  }
});

@inject("UIStore")
@observer
class ToggleDarkModeSwitch extends React.Component {
  render() {
    return (
      <Switch
        checked={this.props.UIStore.darkMode}
        onChange={() => this.props.UIStore.ToggleDarkMode()}
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
