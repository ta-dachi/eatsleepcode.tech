import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
// Material-UI
import Typography from "@material-ui/core/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import IconButton from "@material-ui/core/IconButton";
import EmailIcon from "@material-ui/icons/Email";

// We can inject some CSS into the DOM.
const styles = theme => ({
  email: {
    marginTop: 10
  },
  emailIconSize: {
    fontSize: 30
  }
});

function Contact(props) {
  const { classes, children, className, ...other } = props;

  document.title = "Contact";

  return (
    <div>
      <Typography paragraph>
        This is where I will put my Contact Details.
      </Typography>
      <Typography>
        For now, my preferred point of contact is my email:
      </Typography>

      <FormControlLabel
        className={classes.email}
        control={
          <a
            target="_top"
            rel="noopener noreferrer"
            href="mailto:takumiadachi@gmail.com"
            target="_blank"
          >
            <IconButton color="primary">
              <EmailIcon className={classes.emailIconSize} /> {/* icon */}
            </IconButton>
          </a>
        }
        label={"takumiadachi@gmail.com"}
        labelPlacement="end"
      />
    </div>
  );
}

Contact.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string
};

export default withStyles(styles)(Contact);
