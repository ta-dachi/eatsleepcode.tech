import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
// Material UI Components
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Href from "@material-ui/core/Link";
import Switch from "@material-ui/core/Switch";
// Material UI Icons
import HomeIcon from "@material-ui/icons/Home";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import BrightnessMedium from "@material-ui/icons/BrightnessMedium";
// React-Icons
import { GoOctoface } from "react-icons/go";
// React-Router-Dom
import { Link } from "react-router-dom";
// My Components
// Store
import UIStore from "../../store/UIStore";
// Mobx
import { observer, inject } from "mobx-react";

// We can inject some CSS into the DOM.
const styles = theme => ({
  linkStyle: {
    textDecoration: "none"
  }
});

@inject("routing")
@observer
class MyMenuList extends React.Component {
  render() {
    const { classes, children, className, ...other } = this.props;
    const { location, push, goBack } = this.props.routing;

    return (
      <List>
        <Link to="/" className={classes.linkStyle}>
          <ListItem button key={"Home"}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary={"Home"} />
          </ListItem>
        </Link>
        {/* Uncomment incase mobx-react-router breaks. */}
        {/* <Link
          to="/contact"
          className={classes.linkStyle}
          onClick={() => push("/contact")}
        > */}
        <ListItem button key={"Contact Mail"} onClick={() => push("/contact")}>
          <ListItemIcon>
            <ContactMailIcon />
          </ListItemIcon>
          <ListItemText primary={"Contact Mail"} />
        </ListItem>
        {/* <Link to="/posts" className={classes.linkStyle}>
          <ListItem button key={"Posts"}>
            <ListItemIcon>
              <DescriptionIcon />
            </ListItemIcon>
            <ListItemText primary={"Posts"} />
          </ListItem>
        </Link> */}
        {/* <Link to="/photoblog" className={classes.linkStyle}>
          <ListItem button key={"Photo Blog"}>
            <ListItemIcon>
              <ImageIcon />
            </ListItemIcon>
            <ListItemText primary={"Photo Blog"} />
          </ListItem>
        </Link> */}
        <Href href={"https://github.com/ta-dachi"} underline="none">
          <ListItem button key={"Github"}>
            <ListItemIcon>
              <GoOctoface size={"1.5em"} />
            </ListItemIcon>
            <ListItemText primary={"Github"} />
          </ListItem>
        </Href>
        <ListItem button key={"Toggle Dark"} onClick={UIStore.ToggleDarkMode}>
          <ListItemIcon>
            <BrightnessMedium />
          </ListItemIcon>
          <Switch checked={UIStore.darkMode} value="hidden" color="primary" />
        </ListItem>
      </List>
    );
  }
}

MyMenuList.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string
};

export default withStyles(styles, { withTheme: true })(MyMenuList);
