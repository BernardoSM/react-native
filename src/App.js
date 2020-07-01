import React from 'react'
import { View, StyleSheet } from 'react-native'
import Simples from './components/Simples'
import ParImpar from './components/ParImpar'
import { Inverter, MegaSena } from './components/Mult'

export default class App extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<Simples texto="Texto" />
				<ParImpar numero={30} />
				<Inverter texto='odranreB' />
				<MegaSena numeros={6} />
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
})