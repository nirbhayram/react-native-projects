import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { Button, Text } from 'native-base';
import { Entypo } from '@expo/vector-icons';

export default function App() {

  const [widthOfBox, setWidthOfBox] = useState(81.5);
  const [turn, setTurn] = useState("circle")
  const [boxes, setBoxes] = useState(new Array(9).fill("empty"))

  const resetTheGame = ()=>{
    setTurn("circle")
    setBoxes(new Array(9).fill("empty"))
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#B49FCC',
    },
    rowView: {
      height: "11%",
      width: "100%",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center"
    },
    box: {
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#ffffff",
      width: widthOfBox,
      height: widthOfBox,
      borderWidth: 2,
      borderRadius: 10,
      marginVertical: 10,
      marginHorizontal: 10
    },
    text: {
      fontSize: 30,
      padding: 10,
      color: "#fff",
      fontWeight: "bold"
    }
  });

  const getText = () => {
    if (turn !== "cross" && turn !== "circle") {
      return turn
    }
    return turn + "'s turn "
  }

  const boxPressed = (number) => {
    if (turn !== "cross" && turn !== "circle") {
      return
    }
    if (boxes[number] === "empty") {
      boxes[number] = turn
      setTurn(turn === "cross" ? "circle" : "cross")
      checkWin()
    }
  }

  const checkWin = () => {
    if (boxes[0] !== "empty" && boxes[0] === boxes[1] && boxes[1] === boxes[2]) {
      setTurn(`${boxes[0]} wins`)
    } else if (boxes[3] !== "empty" && boxes[3] === boxes[4] && boxes[4] === boxes[5]) {
      setTurn(`${boxes[3]} wins`)
    } else if (boxes[6] !== "empty" && boxes[6] === boxes[7] && boxes[7] === boxes[8]) {
      setTurn(`${boxes[6]} wins`)
    } else if (boxes[0] !== "empty" && boxes[0] === boxes[3] && boxes[3] === boxes[6]) {
      setTurn(`${boxes[0]} wins`)
    } else if (boxes[1] !== "empty" && boxes[1] === boxes[4] && boxes[4] === boxes[7]) {
      setTurn(`${boxes[1]} wins`)
    } else if (boxes[2] !== "empty" && boxes[2] === boxes[5] && boxes[5] === boxes[8]) {
      setTurn(`${boxes[2]} wins`)
    } else if (boxes[0] !== "empty" && boxes[0] === boxes[4] && boxes[4] === boxes[8]) {
      setTurn(`${boxes[0]} wins`)
    } else if (boxes[2] !== "empty" && boxes[2] === boxes[4] && boxes[4] === boxes[6]) {
      setTurn(`${boxes[2]} wins`)
    }
  }

  const getImage = (number) => {
    if (boxes[number] !== "empty") {
      return boxes[number] === "circle" ? "circle" : "cross"
    }
    return "pencil"
  }


  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.rowView, { backgroundColor: "#6D466B" }]} onLayout={
        (event) => {
          var { x, y, width, height } = event.nativeEvent.layout;
          setWidthOfBox(height - 10)
          console.log(height);
        }}
      >
        <TouchableOpacity onPress={() => boxPressed(0)}>
          <View style={styles.box}>
            <Entypo
              name={getImage(0)}
              size={35}
              color="black" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => boxPressed(1)}>
          <View style={styles.box}>
            <Entypo
              name={getImage(1)}
              size={35}
              color="black" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => boxPressed(2)}>
          <View style={styles.box}>
            <Entypo
              name={getImage(2)}
              size={35}
              color="black" />
          </View>
        </TouchableOpacity>
      </View>
      <View style={[styles.rowView, { backgroundColor: "#412234" }]}>
        <TouchableOpacity onPress={() => boxPressed(3)}>
          <View style={styles.box}>
            <Entypo
              name={getImage(3)}
              size={35}
              color="black" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => boxPressed(4)}>
          <View style={styles.box}>
            <Entypo
              name={getImage(4)}
              size={35}
              color="black" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => boxPressed(5)}>
          <View style={styles.box}>
            <Entypo
              name={getImage(5)}
              size={35}
              color="black" />
          </View>
        </TouchableOpacity>
      </View>
      <View style={[styles.rowView, { backgroundColor: "#6D466B" }]}>
        <TouchableOpacity onPress={() => boxPressed(6)}>
          <View style={styles.box}>
            <Entypo
              name={getImage(6)}
              size={35}
              color="black" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => boxPressed(7)}>
          <View style={styles.box}>
            <Entypo
              name={getImage(7)}
              size={35}
              color="black" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => boxPressed(8)}>
          <View style={styles.box}>
            <Entypo
              name={getImage(8)}
              size={35}
              color="black" />
          </View>
        </TouchableOpacity>
      </View>
      <Text style={[styles.text]}>{getText()}</Text>
      {
        (turn !== "cross" && turn !== "circle") ?
          <Button bordered dark onPress={resetTheGame}>
            <Text>Reset</Text>
          </Button>
        :
          <></>
      }
    </SafeAreaView>
  );
}
