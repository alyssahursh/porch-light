/* eslint react/forbid-prop-types: 0 */
/* eslint react/jsx-props-no-spreading: 0 */

import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

export function MonoText(props) {
  const { style } = props;
  return (
    <Text {...props} style={[style, { fontFamily: 'space-mono' }]} />
  );
}

MonoText.propTypes = {
  style: PropTypes.object,
};

MonoText.defaultProps = {
  style: {},
};

export function SerifText(props) {
  const { style } = props;
  return (
    <Text style={[style, { fontFamily: 'space-mono' }]} />
  );
}

SerifText.propTypes = {
  style: PropTypes.object,
};

SerifText.defaultProps = {
  style: {},
};
