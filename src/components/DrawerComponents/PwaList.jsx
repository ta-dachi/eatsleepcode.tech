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
import pink from "@material-ui/core/colors/pink";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";
// Material UI Icons
import { GoOctoface } from "react-icons/go";

// We can inject some CSS into the DOM.
const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  orangeAvatar: {
    color: "#fff",
    backgroundColor: deepOrange[500]
  },
  pinkAvatar: {
    color: "#fff",
    backgroundColor: pink[500]
  },
  githubIcon: {
    paddingTop: "4px"
  },
  padding: {
    padding: theme.spacing.unit * 2
  },
  toolTip: {
    fontSize: 15
  }
});

function PwaList(props) {
  const { classes, children, className, ...other } = props;

  return (
    <List component="div" disablePadding className={classes.root}>
      <Tooltip
        TransitionComponent={Zoom}
        title="A PWA of my list of anime."
        classes={{ tooltip: classes.toolTip }}
        placement="bottom-end"
      >
        <ListItem button alignItems="flex-start" className={classes.nested}>
          <Link
            href={"/pwa/dir-tree-web-visual/dist/"}
            underline="none"
            target="_blank"
          >
            <ListItemIcon>
              <Avatar className={classes.orangeAvatar}>ANI</Avatar>
            </ListItemIcon>
          </Link>
          <ListItemText
            primary="Anilist"
            secondary={
              <React.Fragment>
                <Link
                  href={"https://github.com/ta-dachi/dir-tree-web-visual"}
                  underline="none"
                >
                  {"Github"}
                  <GoOctoface className={[classes.githubIcon]} />
                </Link>
              </React.Fragment>
            }
          />
        </ListItem>
      </Tooltip>
      <Tooltip
        TransitionComponent={Zoom}
        title="A starter to get your Progressive Web App going."
        classes={{ tooltip: classes.toolTip }}
        placement="bottom-end"
      >
        <ListItem button alignItems="flex-start" className={classes.nested}>
          <Link
            href={"/pwa/pwa-starter/dist/"}
            underline="none"
            target="_blank"
          >
            <ListItemIcon>
              <Avatar className={classes.pinkAvatar}>pwa</Avatar>
            </ListItemIcon>
          </Link>
          <ListItemText
            primary="pwa-starter"
            secondary={
              <React.Fragment>
                <Link
                  href={"https://github.com/ta-dachi/pwa-starter"}
                  underline="none"
                >
                  {"Github"}
                  <GoOctoface className={[classes.githubIcon]} />
                </Link>
              </React.Fragment>
            }
          />
        </ListItem>
      </Tooltip>
    </List>
  );
}

PwaList.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string
};

export default withStyles(styles)(PwaList);
