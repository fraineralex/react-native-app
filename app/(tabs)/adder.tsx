import React, { useState } from 'react'
import { View, TextInput, Button, Text, StyleSheet, TouchableOpacity, Keyboard, TouchableWithoutFeedback } from 'react-native'

const adder: React.FC = () => {
  const [number1, setNumber1] = useState('')
  const [number2, setNumber2] = useState('')
  const [result, setResult] = useState<number | undefined>(undefined)

  const handleSum = () => {
    const sum = Number(number1) + Number(number2)
    setResult(sum)
  }

  const dismissKeyboard = () => {
    Keyboard.dismiss()
  }

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={styles.container}>
        <Text style={styles.heading}>Sumadora de Números</Text>
        <TextInput
          style={styles.input}
          placeholder="Inserta tu primer número"
          placeholderTextColor="#999"
          value={number1}
          onChangeText={setNumber1}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Inserta tu segundo número"
          placeholderTextColor="#999"
          value={number2}
          onChangeText={setNumber2}
          keyboardType="numeric"
        />
        <TouchableOpacity
          style={styles.button}
          onPress={handleSum}
          activeOpacity={0.7}
        >
          <Text style={styles.buttonText}>Sumar</Text>
        </TouchableOpacity>
        {result !== undefined && (
          <Text style={styles.result}>El resultado de la suma es: <Text style={{fontWeight: 'bold'}}>{result}</Text></Text>
        )}
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: 200,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    color: '#000',
    borderRadius: 20,
    textAlign: 'center'
  },
  result: {
    fontSize: 20,
    marginTop: 20,
  },
  button: {
    backgroundColor: '#007bff',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
})

export default adder