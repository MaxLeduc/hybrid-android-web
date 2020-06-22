import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import {WelcomeMessage} from './components/WelcomeMessage';

const HybridApp = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <WelcomeMessage />
      </SafeAreaView>
    </>
  );
};

export default HybridApp;
