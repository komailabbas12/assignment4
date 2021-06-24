import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import addcity from './screen/addcity'
import cities from './screen/city'
import location from './screen/location'


const tabNav = createBottomTabNavigator()
const stackNav = createStackNavigator()


const locationftn = () => (
  <stackNav.Navigator
    headerMode='none'
    >
    <stackNav.Screen
      name="city"
      component={cities}
    />
    <stackNav.Screen
      name="location"
      component={location}
    />
  </stackNav.Navigator>
)

export default function app(){

  return(
    <NavigationContainer>
      <tabNav.Navigator>
      <tabNav.Screen
          name="addcity"
          component={addcity}
          options={{
            title:"Add City",
            tabBarIcon:({color , size})=>(
                <MaterialCommunityIcons name="city"  color="black" size={20} />
            )
          }}
        />
        <tabNav.Screen
          name="cities"
          component={locationftn}
          options={{
            title:"Cities",
            tabBarIcon:()=>(
                <MaterialCommunityIcons name="city-variant-outline" color="black"  size={20} />
            )
          }}
        />
        
      </tabNav.Navigator>

    </NavigationContainer>
  )
}