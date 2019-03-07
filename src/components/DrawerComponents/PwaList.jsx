import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
// Material UI Components
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Link from "@material-ui/core/Link";
import Avatar from "@material-ui/core/Avatar";
import deepOrange from "@material-ui/core/colors/deepOrange";
// Material UI Icons

// We can inject some CSS into the DOM.
const styles = theme => ({
  orangeAvatar: {
    margin: 10,
    color: "#fff",
    backgroundColor: deepOrange[500]
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4
  }
});

function PwaList(props) {
  const { classes, children, className, ...other } = props;

  return (
    <List component="div" disablePadding>
      <Link
        href={"/pwa/dir-tree-web-visual/dist/"}
        underline="none"
        target="_blank"
      >
        <ListItem button className={classes.nested}>
          <ListItemIcon>
            <Avatar className={classes.orangeAvatar}>ANI</Avatar>
          </ListItemIcon>

          <ListItemText inset primary="AniList" />
        </ListItem>
      </Link>
    </List>
  );
}

PwaList.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string
};

export default withStyles(styles)(PwaList);
