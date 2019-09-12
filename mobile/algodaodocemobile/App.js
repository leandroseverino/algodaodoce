/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import TurmasScreen from './screens/TurmasScreen';
import EscolaScreen from './screens/EscolaScreen';
import CardapioScreen from './screens/CardapioScreen';
import CalendarioScreen from './screens/CalendarioScreen';
import GaleriasScreen from './screens/GaleriasScreen';
import ContatoScreen from './screens/ContatoScreen';

const AppNavigator = createDrawerNavigator({
  Home: {
    screen: HomeScreen
  },
  Turmas: {
    screen: TurmasScreen
  },
  Escola: {
    screen: EscolaScreen
  },
  Cardapio: {
    screen: CardapioScreen
  },
  Calendario: {
    screen: CalendarioScreen
  },
  Galerias: {
    screen: GaleriasScreen
  },
  Contato: {
    screen: ContatoScreen
  },
});

export default createAppContainer(AppNavigator);