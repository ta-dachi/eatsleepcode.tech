import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
// Material UI Components
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
// Material UI Icons
import HomeIcon from "@material-ui/icons/Home";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";

// We can inject some CSS into the DOM.
const styles = theme => ({});

function MyMenuList(props) {
  const { classes, children, className, ...other } = props;

  return (
    <List>
      <ListItem button key={"Home"}>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary={"Home"} />
      </ListItem>
      <ListItem button key={"Contact Mail"}>
        <ListItemIcon>
          <ContactMailIcon />
        </ListItemIcon>
        <ListItemText primary={"Contact Mail"} />
      </ListItem>
      <ListItem button key={"Posts"}>
        <ListItemIcon>
          <DescriptionIcon />
        </ListItemIcon>
        <ListItemText primary={"Posts"} />
      </ListItem>
      <ListItem button key={"Photo Blog"}>
        <ListItemIcon>
          <ImageIcon />
        </ListItemIcon>
        <ListItemText primary={"Photo Blog"} />
      </ListItem>
    </List>
  );
}

MyMenuList.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string
};

export default withStyles(styles)(MyMenuList);
