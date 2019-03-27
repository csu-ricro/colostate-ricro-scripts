import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import { LoadingIndicator } from 'colostate-ricro-ui';
import PropTypes from 'prop-types';
import React from 'react';

const styles = () => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    height: '100%',
  },
});

const Placeholder = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Typography align="center" variant="h3">
        colostate-ricro-ui
      </Typography>
      <div>
        <LoadingIndicator />
      </div>
      <Typography align="center" variant="h6">
        Edit <code>app.js</code> to begin
      </Typography>
    </div>
  );
};

Placeholder.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Placeholder);
