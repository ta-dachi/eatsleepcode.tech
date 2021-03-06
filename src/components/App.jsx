import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
// Material UI Components
import Toolbar from "@material-ui/core/Toolbar";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import deepPurple from "@material-ui/core/colors/deepPurple";
// Material UI Icons
import MenuIcon from "@material-ui/icons/Menu";
import AppsIcon from "@material-ui/icons/Apps";
// React-Router-Dom
import { Route, Switch } from "react-router-dom";
// My Components
import AppList from "./DrawerComponents/AppList";
import MyMenuList from "./DrawerComponents/MyMenuList";
import Home from "./Content/Home";
import Contact from "./Content/Contact";
import Posts from "./Content/Posts";
import PhotoBlog from "./Content/PhotoBlog";
import NoMatch from "./Content/NoMatch";
import Copyright from "./Copyright";
import MiniGitCommitLog from "./MiniGitCommitLog";
// Mobx
import { observer, inject } from "mobx-react";

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: "flex"
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`
    }
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3
  },
  mainAvatar: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 5,
    marginBottom: 3,
    width: 70,
    height: 70,
    fontSize: 40,
    color: "#fff",
    backgroundColor: deepPurple[500]
  },
  centerInDrawer: {
    marginLeft: "auto",
    marginRight: "auto",
    fontSize: 30
  }
});

@inject("routing")
@inject("UIStore")
@observer
class App extends React.Component {
  render() {
    const { classes, theme } = this.props;
    const { location, push, goBack } = this.props.routing;

    const drawer = (
      <div>
        <Avatar className={classes.mainAvatar}>TA</Avatar>
        <ListItem className={classes.centerInDrawer}>
          <Copyright name="Takumi Adachi" year={2019} />
        </ListItem>
        <ListItem className={classes.centerInDrawer}>
          <MiniGitCommitLog />
        </ListItem>
        {/* <ListItem className={classes.centerInDrawer}>
          <Typography>{location.pathname}</Typography>
        </ListItem> */}
        <Divider />
        <MyMenuList />
        <Divider />
        <ListItem button onClick={() => this.props.UIStore.pwasOpenToggle()}>
          <ListItemIcon>
            <AppsIcon />
          </ListItemIcon>
          <ListItemText inset primary="My Apps" />
          {this.props.UIStore.pwasOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={this.props.UIStore.pwasOpen} timeout="auto" unmountOnExit>
          <AppList />
        </Collapse>
      </div>
    );

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={() => this.props.UIStore.handleDrawerToggle()}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              T.Adachi's Home Page
            </Typography>
          </Toolbar>
        </AppBar>
        <nav className={classes.drawer}>
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              container={this.props.container}
              variant="temporary"
              anchor={theme.direction === "rtl" ? "right" : "left"}
              open={this.props.UIStore.drawerOpen}
              onClose={() => this.props.UIStore.handleDrawerToggle()}
              classes={{
                paper: classes.drawerPaper
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/contact" component={Contact} />
            <Route path="/posts" component={Posts} />
            <Route path="/photoblog" component={PhotoBlog} />
            {/* Catch all if there are no route matches */}
            <Route component={NoMatch} />
          </Switch>
        </main>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
  container: PropTypes.object,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(App);
