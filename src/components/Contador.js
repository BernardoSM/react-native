import React, { Component, useState } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'



export default ({ route, navigation }) => {
	const [number, setNumber] = useState(route.params.numero)

	const addOne = () => {
	    setNumber(number + 1);
	}

	const clear = () => {
		console.log('limpou')
	    setNumber(0);
	}

	return <View>
		<Text style={{fontSize: 40}}>{number}</Text>
		<TouchableHighlight
			onPress={addOne}
			onLongPress={clear}>
			<Text>Incrementar/Zerar</Text>
		</TouchableHighlight>
	</View>
}
	