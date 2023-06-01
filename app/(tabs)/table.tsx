import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Keyboard, TouchableWithoutFeedback } from 'react-native';

const table = () => {
  const [number, setNumber] = useState('');
  const [table, setTable] = useState([]);

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  }

  const generateTable = () => {
    Keyboard.dismiss();

    const parsedNumber = parseInt(number, 10);

    if (isNaN(parsedNumber)) {
      setTable([]);
      return;
    }

    const newTable = [];
    for (let i = 1; i <= 13; i++) {
      const result = parsedNumber * i;
      newTable.push(`${parsedNumber} x ${i} = ${result}`);
    }

    setTable(newTable);
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>
          Multiplication Table
        </Text>
        <TextInput
          style={{
            width: 200,
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            marginBottom: 10,
            paddingHorizontal: 10,
            borderRadius: 20,
            textAlign: 'center'
          }}
          placeholder="Inserta un número"
          placeholderTextColor="#999"
          value={number}
          onChangeText={setNumber}
          keyboardType="numeric"
          onFocus={() => setTable([])}
        />
        <TouchableOpacity
          style={{
            backgroundColor: 'blue',
            borderRadius: 10,
            padding: 10,
            marginBottom: 10,
          }}
          onPress={generateTable}
        >
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>Generar tabla</Text>
        </TouchableOpacity>
        {table.length > 0 && (
          <View>
            {table.map((result, index) => (
              <Text key={index} style={{ fontSize: 16, marginBottom: 5 }}>
                {result}
              </Text>
            ))}
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default table;
