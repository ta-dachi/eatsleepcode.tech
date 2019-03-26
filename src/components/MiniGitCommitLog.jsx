import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  margins: {
    marginLeft: "auto",
    marginRight: "auto"
  },
  text: {
    fontSize: 8
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
      error: null
    };
  }

  componentWillMount() {
    // Replace this with your own repo
    // https://api.github.com/repos/:owner/:repo/branches/maste
    fetch(
      "https://api.github.com/repos/ta-dachi/eatsleepcode.tech/branches/master"
    )
      .then(response => {
        response.json().then(json => {
          console.log(json);
          if (json.commit) {
            this.setState({
              author: json.commit.author.login,
              branch: json.name,
              date: json.commit.commit.author.date,
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
        <Typography className={classes.text}>
          Last updated: {this.state.date}
        </Typography>
        <Typography className={classes.text}>{this.state.sha}</Typography>
      </div>
    );
  }
}

MiniGitCommitLog.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MiniGitCommitLog);
// export default MiniGitCommitLog;
