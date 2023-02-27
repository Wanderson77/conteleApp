import { View, Text } from 'react-native'
import React from 'react'

import { Ṕrovider } from 'react-redux';
import store from './src/redux/store';

export default function index() {
  return (
    <View>
      <Text>index</Text>
    </View>
  )
}

//<Provider store={store}></Provider>