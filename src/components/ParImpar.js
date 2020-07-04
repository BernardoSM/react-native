import React from 'react'
import { View, Text } from 'react-native'
import Padrao from '../estilo/Padrao'
import If from './If'

function parOuImpar(num) {
	const result = num % 2 === 0 ? 'Par' : 'Impar'

	return <Text style={Padrao.ex}>{result}</Text>
}

export default ({ route, navigation }) =>
	<View>

		{
			parOuImpar(route.params.numero)
		}

		{
			// props.numero % 2 == 0
			// ? <Text style={Padrao.ex}>Par</Text>
			// : <Text style={Padrao.ex}>Impar</Text>
		}
	</View>