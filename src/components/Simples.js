import React from 'react'
import { Text } from 'react-native'

// export default function(props) {
// 	return <Text> {props.texto} </Text>
// }

export default props =>
	<Text>Arrow function: {props.texto} </Text>