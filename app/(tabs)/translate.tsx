import { View, TextInput, TouchableOpacity, Text, StyleSheet, Keyboard, TouchableWithoutFeedback  } from 'react-native'
import React, { useState } from 'react'

const transalate: React.FC = () => {
  const [number, setNumber] = useState('')
  const [letter, setLetter] = useState('')

  const dismissKeyboard = () => {
    Keyboard.dismiss()
  }

  const handleTranslate = () => {
    const numberToTranslate = Number(number);

    if (isNaN(numberToTranslate) || numberToTranslate < 1 || numberToTranslate > 1000) {
      setLetter('Inserta un numero entre 1 y 1000');
      return;
    }

    const units = ['', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve'];
    const tens = ['', 'diez', 'veinte', 'treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa'];
    const exceptions = ['diez', 'once', 'doce', 'trece', 'catorce', 'quince'];
    const hundreds = ['', 'ciento', 'doscientos', 'trescientos', 'cuatrocientos', 'quinientos', 'seiscientos', 'setecientos', 'ochocientos', 'novecientos'];

    const getUnits = (num: number): string => {
      if (num <= 9) {
        return units[num];
      }

      return '';
    };

    const getTens = (num: number): string => {
      if (num <= 15) {
        return exceptions[num - 10];
      } else if (num < 20) {
        return 'dieci' + getUnits(num - 10);
      } else {
        const ten = Math.floor(num / 10);
        const unit = num % 10;

        if (unit === 0) {
          return tens[ten];
        }

        return tens[ten];
      }
    };

    const getHundreds = (num: number): string => {
      if (num === 100) {
        return 'cien';
      } else if (num > 100) {
        const hundred = Math.floor(num / 100);
        const ten = num % 100;

        if (ten === 0) {
          return hundreds[hundred];
        }

        return hundreds[hundred];
      }

      return '';
    };

    let translation = '';

    if (numberToTranslate === 1000) {
      translation = 'mil';
    } else if (numberToTranslate === 0) {
      translation = 'cero';
    } else {
      const hundredsPart = getHundreds(numberToTranslate);
      const tensPart = getTens(numberToTranslate % 100);
      const unitsPart = getUnits(numberToTranslate % 10);

      if (hundredsPart) {
        translation += hundredsPart;
      }

      if (hundredsPart && (tensPart || unitsPart)) {
        translation += ' ';
      }

      if (tensPart) {
        translation += tensPart;
      }

      if (tensPart && unitsPart) {
        translation += ' ';
      }

      if (unitsPart) {
        translation += unitsPart;
      }
    }

    setLetter(translation);

  }

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={styles.container}>
        <Text style={styles.heading}>Traductor de Números a Letras</Text>
        <TextInput
          style={styles.input}
          placeholder="Inserta un número entre 1 y 1000"
          placeholderTextColor="#999"
          value={number}
          onChangeText={setNumber}
          keyboardType="numeric"
        />
        <TouchableOpacity
          style={styles.button}
          onPress={handleTranslate}
          activeOpacity={0.7}
        >
          <Text style={styles.buttonText}>Traducir</Text>
        </TouchableOpacity>
        {letter !== '' && (
          <Text style={styles.result}>Tu número en letras es: {letter}</Text>
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
    width: 270,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    color: '#000',
    borderRadius: 20,
    textAlign: 'center'
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
  result: {
    fontSize: 20,
    marginTop: 20,
  },
});

export default transalate