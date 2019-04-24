import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";
import Link from "@material-ui/core/Link";

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
      commitMessage: "Test",
      error: null
    };
  }

  componentDidMount() {
    // Replace this with your own repo
    // https://api.github.com/repos/:owner/:repo/branches/master
    // See https://stackoverflow.com/questions/50029580/why-is-my-fetch-request-being-called-twice
    // On why it requests twice on Chrome's Network tab. It is by design.
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
              link: json._links.html,
              commitMessage: json.commit.commit.message
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

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.margins}>
        <Link
          href={"https://github.com/ta-dachi/eatsleepcode.tech"}
          underline="none"
          target="_blank"
        >
          <Typography className={classes.text}>{this.state.date}</Typography>
        </Link>
        {
          <Tooltip
            TransitionComponent={Zoom}
            title={this.state.commitMessage}
            classes={{ tooltip: classes.toolTip }}
            placement="bottom-end"
          >
            <Typography className={classes.text}>{this.state.sha}</Typography>
          </Tooltip>
        }
      </div>
    );
  }
}

MiniGitCommitLog.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MiniGitCommitLog);
