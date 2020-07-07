import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Simples from './components/Simples'
import ParImpar from './components/ParImpar'
import { Inverter, MegaSena } from './components/Mult'
import Contador from './components/Contador'
import Plataformas from './components/Plataformas'
import ValidarProps from './components/ValidarProps'

const Drawer = createDrawerNavigator();

const Validar = () =>
	<ValidarProps ano={18}/>

export default function App() {
	return (
		<NavigationContainer>
			<Drawer.Navigator initialRouteName="Home">
				<Drawer.Screen name="ValidarProps" component={Validar} />
				<Drawer.Screen name="Plataformas" component={Plataformas} />
				<Drawer.Screen name="Contador" component={Contador} 
					initialParams={{ numero: 8 }}/>
				<Drawer.Screen name="Mega Sena" component={MegaSena}
					initialParams={{ numeros: 8 }} />
				<Drawer.Screen name="Inverter" component={Inverter}
					initialParams={{ texto: 'Teste' }} />
				<Drawer.Screen name="Par Impar" component={ParImpar}
					initialParams={{ numeros: 8 }} />
				<Drawer.Screen name="Simples" component={Simples} />
			</Drawer.Navigator>
		</NavigationContainer>
	);
}