//import libraries
import React from 'react';
import { Text, View } from 'react-native';

//make Component
const Header = () => {
  const { textStyles, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyles}>Albums!</Text>
    </View>
  );
};


const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    alignItems: 'center'
  },
  textStyles: {
    fontSize: 20
  }
};
//make component to other part of the project
export default Header;
