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
          headerTitle: () => (
            <Text style={{ textTransform: 'capitalize', textAlign: 'center', fontWeight: 'bold' }}>
              {'Inicio'}
            </Text>
          ),
          headerTitleAlign: 'center',
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
          headerTitle: () => (
            <Text style={{ textTransform: 'capitalize', textAlign: 'center', fontWeight: 'bold' }}>
              {'Sumar'}
            </Text>
          ),
          headerTitleAlign: 'center',
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
          headerTitle: () => (
            <Text style={{ textTransform: 'capitalize', textAlign: 'center', fontWeight: 'bold' }}>
              {'Traductor'}
            </Text>
          ),
          headerTitleAlign: 'center',
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
          headerTitle: () => (
            <Text style={{ textTransform: 'capitalize', textAlign: 'center', fontWeight: 'bold' }}>
              {'Tabla'}
            </Text>
          ),
          headerTitleAlign: 'center',
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
          headerTitle: () => (
            <Text style={{ textTransform: 'capitalize', textAlign: 'center', fontWeight: 'bold' }}>
              {'Video'}
            </Text>
          ),
          headerTitleAlign: 'center',
        }}
      />
    </Tabs>
  );
};