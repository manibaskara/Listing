import {Provider} from 'react-redux';
import {store} from './store';
import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import AppNavigator from './navigation/AppNavigator';
import {ActivityIndicator, StyleSheet} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {navigationRef, isReadyRef} from './navigation/NavigationService';

const App = () => {
  const {isLoading} = useSelector((state) => {
    return state.app;
  });
  useEffect(() => {
    return () => {
      isReadyRef.current = false;
    };
  }, []);
  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => (isReadyRef.current = true)}>
      <AppNavigator />
      {isLoading && <ActivityIndicator size={'large'} style={styles.loading} />}
    </NavigationContainer>
  );
};

function AppContainer() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

const styles = StyleSheet.create({
  loading: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
});

export default AppContainer;
