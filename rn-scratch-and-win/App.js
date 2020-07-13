
import React, { useState, useEffect } from 'react';
import { Dimensions, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Button, Text } from 'native-base';
import { FontAwesome } from "@expo/vector-icons"


export default function App() {

  const [itemArray, setItemArray] = useState(new Array(25).fill("empty"));
  const [randomNumber, setRandomNumber] = useState(-1)
  const [reset, setReset] = useState(1)

  useEffect(() => {
    generateRandomNumber()
  }, [reset])

  const generateRandomNumber = () => {
    let randomNumber = Math.floor(Math.random() * 25);
    setRandomNumber(randomNumber)
    console.log(randomNumber)
  }

  const getIcon = itemNumber => {
    if (itemArray[itemNumber] === "lucky") {
      return "dollar"
    } else if (itemArray[itemNumber] === "unlucky") {
      return "frown-o"
    }
    return "circle"
  }

  const getColor = itemNumber => {
    if (itemArray[itemNumber] === "empty") {
      return "black"
    } else if (itemArray[itemNumber] === "unlucky") {
      return "red"
    }
    return "green"
  }

  const boxSelect = itemNumber => {
    let tempItemArray = [...itemArray]
    if (randomNumber === itemNumber) {
      tempItemArray[itemNumber] = "lucky"
    } else {
      tempItemArray[itemNumber] = "unlucky"
    }
    setItemArray(tempItemArray);
  }

  const resetGame = ()=>{
    setReset(reset+1);
    setItemArray(new Array(25).fill("empty"));
  }

  return (
    <View style={styles.container}>
      <View style={styles.textView}>
        <Text style={styles.text}>
          Scratch and win
        </Text>
      </View>
      <View style={styles.grid}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.box} onPress={() => {
            boxSelect(0)
          }}>
            <FontAwesome
              name={getIcon(0)}
              color={getColor(0)}
              size={40}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.box} onPress={() => {
            boxSelect(1)
          }}>
            <FontAwesome
              name={getIcon(1)}
              color={getColor(1)}
              size={40}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.box} onPress={() => {
            boxSelect(2)
          }}>
            <FontAwesome
              name={getIcon(2)}
              color={getColor(2)}
              size={40}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.box} onPress={() => {
            boxSelect(3)
          }}>
            <FontAwesome
              name={getIcon(3)}
              color={getColor(3)}
              size={40}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.box} onPress={() => {
            boxSelect(4)
          }}>
            <FontAwesome
              name={getIcon(4)}
              color={getColor(4)}
              size={40}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.box} onPress={() => {
            boxSelect(5)
          }}>
            <FontAwesome
              name={getIcon(5)}
              color={getColor(5)}
              size={40}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.box} onPress={() => {
            boxSelect(6)
          }}>
            <FontAwesome
              name={getIcon(6)}
              color={getColor(6)}
              size={40}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.box} onPress={() => {
            boxSelect(7)
          }}>
            <FontAwesome
              name={getIcon(7)}
              color={getColor(7)}
              size={40}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.box} onPress={() => {
            boxSelect(8)
          }}>
            <FontAwesome
              name={getIcon(8)}
              color={getColor(8)}
              size={40}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.box} onPress={() => {
            boxSelect(9)
          }}>
            <FontAwesome
              name={getIcon(9)}
              color={getColor(9)}
              size={40}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.box} onPress={() => {
            boxSelect(10)
          }}>
            <FontAwesome
              name={getIcon(10)}
              color={getColor(10)}
              size={40}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.box} onPress={() => {
            boxSelect(11)
          }}>
            <FontAwesome
              name={getIcon(11)}
              color={getColor(11)}
              size={40}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.box} onPress={() => {
            boxSelect(12)
          }}>
            <FontAwesome
              name={getIcon(12)}
              color={getColor(12)}
              size={40}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.box} onPress={() => {
            boxSelect(13)
          }}>
            <FontAwesome
              name={getIcon(13)}
              color={getColor(13)}
              size={40}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.box} onPress={() => {
            boxSelect(14)
          }}>
            <FontAwesome
              name={getIcon(14)}
              color={getColor(14)}
              size={40}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.box} onPress={() => {
            boxSelect(15)
          }}>
            <FontAwesome
              name={getIcon(15)}
              color={getColor(15)}
              size={40}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.box} onPress={() => {
            boxSelect(16)
          }}>
            <FontAwesome
              name={getIcon(16)}
              color={getColor(16)}
              size={40}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.box} onPress={() => {
            boxSelect(17)
          }}>
            <FontAwesome
              name={getIcon(17)}
              color={getColor(17)}
              size={40}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.box} onPress={() => {
            boxSelect(18)
          }}>
            <FontAwesome
              name={getIcon(18)}
              color={getColor(18)}
              size={40}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.box} onPress={() => {
            boxSelect(19)
          }}>
            <FontAwesome
              name={getIcon(19)}
              color={getColor(19)}
              size={40}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.box} onPress={() => {
            boxSelect(20)
          }}>
            <FontAwesome
              name={getIcon(20)}
              color={getColor(20)}
              size={40}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.box} onPress={() => {
            boxSelect(21)
          }}>
            <FontAwesome
              name={getIcon(21)}
              color={getColor(21)}
              size={40}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.box} onPress={() => {
            boxSelect(22)
          }}>
            <FontAwesome
              name={getIcon(22)}
              color={getColor(22)}
              size={40}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.box} onPress={() => {
            boxSelect(23)
          }}>
            <FontAwesome
              name={getIcon(23)}
              color={getColor(23)}
              size={40}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.box} onPress={() => {
            boxSelect(24)
          }}>
            <FontAwesome
              name={getIcon(24)}
              color={getColor(24)}
              size={40}
            />
          </TouchableOpacity>
        </View>
      </View>
      <Button bordered dark style={styles.button} onPress={resetGame}>
        <Text style={styles.buttonText}>Reset</Text>
      </Button>
      <Button bordered dark style={styles.button}>
        <Text style={styles.buttonText}>Show all</Text>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textView: {
    backgroundColor: "#000",
    width: Dimensions.get('screen').width,
    padding: 10,
    margin: 10
  },
  text: {
    color: "#fff",
    textAlign: "center",
  },
  grid: {
    justifyContent: "center",
    alignItems: "center"
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  box: {
    height: 70,
    width: 70,
    borderColor: "#000",
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 2,
  },
  button: {
    width: "100%",
    margin: 10,
  },
  buttonText:{
    width: "100%",
    textAlign: "center"
  }
});
