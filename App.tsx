import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import { AppNavigator } from './src/navigation/AppNavigator';
import { Provider } from 'react-redux';
import { store } from './src/store/store';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <Provider store={store}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
      </Provider>
    </SafeAreaView>
  );
}

export default App
