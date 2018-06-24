import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import * as Icon from '@expo/vector-icons';

const IconView = (props) => {
  const IconViewImpl = Icon[props.iconSet];
  const style = { ...IconView.defaultProps.style, ...props.style };
  return (
    <View style={props.style.container}>
      {
        <IconViewImpl
          name={props.icon}
          size={style.icon.size}
          color={style.icon.color}
        />
      }
    </View>
  );
};

IconView.propTypes = {
  iconSet: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  style: PropTypes.shape({
    container: PropTypes.object,
    icon: PropTypes.object,
  }),
};

IconView.defaultProps = {
  style: {
    container: {
      borderWidth: 0,
      backgroundColor: 'red',
      borderRadius: 5,
      padding: 2,
      width: 32,
      height: 32,
      justifyContent: 'center',
      alignItems: 'center',
    },
    icon: {
      size: 24,
      color: 'white',
    },
  },
};

export default IconView;
