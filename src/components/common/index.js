import React, { Component } from 'react';
import { View, Text } from 'react-native';

export const Header = (props)=>(
    <View>
        <Text style={{fontSize:25,color:"black"}}>{props.headerText}</Text>
    </View>
)

export const CardSection = (props)=>(
    <View>
        <Text style={{fontSize:25,color:"black"}}>{props.children}</Text>
    </View>
)
