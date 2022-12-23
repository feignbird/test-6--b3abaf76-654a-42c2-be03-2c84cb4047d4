import React from 'react'
import {  View, Text, ScrollView, StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

const Stack = createStackNavigator()

import { item } from './DATA'
import HomeFeed from './HomeFeed'

const Feed = ({navigation, route}) => (
  <ScrollView showsVerticalScrollIndicator={false}>
    <HomeFeed item={item.home_feed} navigation={navigation} route={route}/>
  </ScrollView>
)

export default Feed;