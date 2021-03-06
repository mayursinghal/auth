// import the labiraries for making a  Component
import React from 'react';
import { Text, View } from 'react-native';

// make the Component
const Header = (props) => {
  const { textStyle, viewStyle } = style;
  return (
    <View style={viewStyle}>
    <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};
const style = {
  viewStyle: {
    backgroundColor: '#f8f8f8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
   fontSize: 30,
   fontWeight: '600'
  }
};
// for making the compont avialable for other part of the ap
export { Header };
