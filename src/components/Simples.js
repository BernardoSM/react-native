import React from 'react'
import { Text } from 'react-native'
import Padrao from '../estilo/Padrao'

// export default function(props) {
// 	return <Text> {props.texto} </Text>
// }

export default ({ route, navigation }) =>
	<Text style={[Padrao.ex]}>Arrow function: {route.params.texto} </Text>