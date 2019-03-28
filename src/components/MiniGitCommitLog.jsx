import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";

const styles = theme => ({
  margins: {
    marginLeft: "auto",
    marginRight: "auto"
  },
  text: {
    fontSize: 8
  },
  toolTip: {
    fontSize: 15
  }
});

class MiniGitCommitLog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author: "",
      branch: "",
      date: "",
      sha: "",
      link: "",
      commitMessage: "",
      error: null
    };
  }

  componentWillMount() {
    // Replace this with your own repo
    // https://api.github.com/repos/:owner/:repo/branches/master
    console.log(
      `https://api.github.com/repos/ta-dachi/eatsleepcode.tech/branches/master?access_token=${
        process.env.GITHUB_ACCESS_TOKEN
      }`
    );
    fetch(
      `https://api.github.com/repos/ta-dachi/eatsleepcode.tech/branches/master?access_token=${
        process.env.GITHUB_ACCESS_TOKEN
      }`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      }
    )
      .then(response => {
        response.json().then(json => {
          if (json.commit) {
            this.setState({
              author: json.commit.author.login,
              branch: json.name,
              date: `Last updated: ${json.commit.commit.author.date}`,
              sha: json.commit.sha,
              link: json._links.html
            });
          } else {
            this.setState({
              error: json.message
            });
          }
        });
      })
      .catch(error => {
        this.setState({
          error: error
        });
        console.log(error);
      });
  }

  componentWillUnmount() {}

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.margins}>
        <Typography className={classes.text}>{this.state.date}</Typography>
        {/* <Tooltip
          TransitionComponent={Zoom}
          title="A PWA of my list of anime."
          classes={{ tooltip: classes.toolTip }}
          placement="bottom-end"
        > */}
        <Typography className={classes.text}>{this.state.sha}</Typography>
        {/* </Tooltip> */}
      </div>
    );
  }
}

MiniGitCommitLog.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MiniGitCommitLog);
// export default MiniGitCommitLog;
