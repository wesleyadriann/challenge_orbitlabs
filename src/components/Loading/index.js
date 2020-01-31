import React from 'react';
import {View, ActivityIndicator} from 'react-native';

import {Container, Text} from './style';

const LoadingFullScreen = ({isLoading, message = ''}) => (
  <View>
    {isLoading ? (
      <Container>
        <ActivityIndicator size="large" color="#E69A09" />
        <Text>{message}</Text>
      </Container>
    ) : (
      <View />
    )}
  </View>
);

export default LoadingFullScreen;
