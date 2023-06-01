import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Text } from 'react-native';

export default () => {
  return (
    <Tabs>
      <Tabs.Screen
        name='home'
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-home" size={size} color={color} />
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={{ textTransform: 'capitalize' }}>
              {focused ? 'Inicio' : 'inicio'}
            </Text>
          ),
        }}
      />
      <Tabs.Screen
        name='adder'
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-add" size={size} color={color} />
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={{ textTransform: 'capitalize' }}>
              {focused ? 'Sumar' : 'sumar'}
            </Text>
          ),
        }}
      />
      <Tabs.Screen
        name='translate'
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-globe" size={size} color={color} />
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={{ textTransform: 'capitalize' }}>
              {focused ? 'Traductor' : 'traductor'}
            </Text>
          ),
        }}
      />
      <Tabs.Screen
        name='table'
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-grid" size={size} color={color} />
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={{ textTransform: 'capitalize' }}>
              {focused ? 'Tabla' : 'tabla'}
            </Text>
          ),
        }}
      />
      <Tabs.Screen
        name='video'
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-videocam" size={size} color={color} />
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={{ textTransform: 'capitalize' }}>
              {focused ? 'Video' : 'video'}
            </Text>
          ),
        }}
      />
    </Tabs>
  );
};