import React, { Component } from 'react';
import QRCodeReader from './src/screens/QRCodeReader'
import ImageList from './src/screens/ImageList'
import {createAppContainer} from 'react-navigation'
import {createDrawerNavigator} from 'react-navigation-drawer'

const DrawerNavigator = createDrawerNavigator({
    ImageList: {
        screen: ImageList
    }, 
    QRCodeReader: {
        screen: QRCodeReader
    },
  },
  {
      initialRouteName: 'ImageList'
  }
);
  
export default createAppContainer(DrawerNavigator);