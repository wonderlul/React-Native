import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Image} from 'react-native';

import HomeView from './Views/HomeView/HomeView';

import BerriesDetailsView from './Views/DetailsView/BerriesDetailsView';
import PokemonDetailsView from './Views/DetailsView/PokemonDetailsView';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const PokemonStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Pokemon" component={HomeView} />
    <Stack.Screen name="Details" component={PokemonDetailsView} />
  </Stack.Navigator>
);

const BerriesStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Berries" component={HomeView} />
    <Stack.Screen name="Details" component={BerriesDetailsView} />
  </Stack.Navigator>
);

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: () => {
            let imageUrl;
            if (route.name === 'Pokemon') {
              imageUrl = require('./images/Pokemon.png');
            } else {
              imageUrl = require('./images/Berries.png');
            }
            return <Image source={imageUrl} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'black',
          inactiveTintColor: 'gray',
          activeBackgroundColor: '#bbb',
          inactiveBackgroundColor: '#eee',
        }}>
        <Tab.Screen name="Pokemon" component={PokemonStack} />
        <Tab.Screen name="Berries" component={BerriesStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
