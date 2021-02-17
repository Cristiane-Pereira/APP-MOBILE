import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import store from './redux/store';
import { StyleSheet, View } from 'react-native';
import Page_Login from './Page_Login';
import Page_Home from './Page_Home';

console.log(store.getState());

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <View style={css.maincontainer}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen
              name="Login"
              component={Page_Login}
              options={{ title: 'user: cris / password: 123' }}
            />

            <Stack.Screen
              name="Home"
              component={Page_Home}
              options={{ title: 'Welcome back!' }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </Provider>
  );
}

const css = StyleSheet.create({
  maincontainer: {
    flex: 1,
  },
});
