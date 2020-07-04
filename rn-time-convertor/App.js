import React, { useState } from "react";
import { Button, TouchableOpacity, SafeAreaView, StyleSheet, View, Text, Alert } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import ButtonView from "./src/components/ButtonView";
import { timeConvert, getBeautifyDateAndTime } from './src/package/TimeConvert'

const App = () => {

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      margin: 10,
      justifyContent: "center",
      alignItems: "center"
    },
    safeView: {
      flex: 1,
      paddingTop: 30
    },
    horizontalView: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
    },
    box: {
      borderRadius: 5,
      borderWidth: 2,
      padding: 5,
      textAlign: "center"
    }
  })

  const [isDatePickerVisibleStart, setDatePickerVisibilityStart] = useState(false);
  const [isDatePickerVisibleEnd, setDatePickerVisibilityEnd] = useState(false);
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  const [startTimeMap, setStartTimeMap] = useState(new Map()) 
  const [endTimeMap, setEndTimeMap] = useState(new Map())

  const showDatePickerStart = () => {
    setDatePickerVisibilityStart(true);
  };

  const hideDatePickerStart = () => {
    setDatePickerVisibilityStart(false);
  };

  const handleConfirmStart = (date) => {
    const timeMapFromTimeConvertor = timeConvert('IST', date)
    timeMapFromTimeConvertor.forEach((value, key) => {
      // console.log(key + " " + value)
    })
    setTimeout(() => {
      setStartDate(date)
      setStartTimeMap(timeMapFromTimeConvertor)
    }, 10);
    // console.log(date.getHours() + "*******")
    hideDatePickerStart();
  };
  const showDatePickerEnd = () => {
    setDatePickerVisibilityEnd(true);
  };

  const hideDatePickerEnd = () => {
    setDatePickerVisibilityEnd(false);
  };

  const handleConfirmEnd = (date) => {
      const timeMapFromTimeConvertor = timeConvert('IST', date)
    timeMapFromTimeConvertor.forEach((value, key) => {
      // console.log(key + " " + value)
    })
    setTimeout(() => {
      setEndDate(date)
      setEndTimeMap(timeMapFromTimeConvertor)
    }, 10);
    hideDatePickerEnd();
  };

  return (
    <SafeAreaView style={styles.safeView}>
      <View style={styles.container}>
        <View style={[styles.horizontalView, { height: 100 }]}>
          <ButtonView
            text={startDate ? (getBeautifyDateAndTime(startDate)) : ("select start date")}
            onPress={showDatePickerStart}
          />
          <ButtonView
            text={endDate ? (getBeautifyDateAndTime(endDate)) : ("select end date")}
            onPress={() => { startDate ? showDatePickerEnd() : Alert.alert("Please select start date!") }}
          />
          <DateTimePickerModal
            // is24Hour={true}
            isVisible={isDatePickerVisibleStart}
            mode="datetime"
            date={startDate ? (startDate) : (new Date())}
            onConfirm={handleConfirmStart}
            onCancel={() => { hideDatePickerStart(); setStartDate(null); setEndDate(null); setStartTimeMap(new Map()); setEndTimeMap(new Map()) }}
            headerTextIOS="Pick a date and time"
          />
          <DateTimePickerModal
            // is24Hour={true}
            isVisible={isDatePickerVisibleEnd}
            mode="datetime"
            date={startDate ? (startDate) : (new Date())}
            minimumDate={startDate ? (startDate) : (new Date(1950, 0, 1))}
            onConfirm={handleConfirmEnd}
            onCancel={() => { hideDatePickerEnd(); setEndDate(null); setEndTimeMap(new Map()) }}
            headerTextIOS="Pick a date and time"
          />
        </View>
        <View style={[styles.horizontalView, { margin: 5 }]}>
          <Text style={[styles.box, { flex: 1, backgroundColor: "#B4E4DE" }]}>TZ</Text>
          <Text style={[styles.box, { flex: 4, backgroundColor: "#B4E4DE" }]}>Start</Text>
          <Text style={[styles.box, { flex: 4, backgroundColor: "#B4E4DE" }]}>End</Text>
        </View>
        <View style={[styles.horizontalView, { margin: 5 }]}>
          <Text style={[styles.box, { flex: 1 }]}>HKT</Text>
          <Text style={[styles.box, { flex: 4 }]}>{startTimeMap.has('HKT')?(startTimeMap.get('HKT').split(" ")[0]):("00:00:00")}</Text>
          <Text style={[styles.box, { flex: 4 }]}>{endTimeMap.has('HKT')?(endTimeMap.get('HKT').split(" ")[0]):("00:00:00")}</Text>
        </View>
        <View style={[styles.horizontalView, { margin: 5 }]}>
          <Text style={[styles.box, { flex: 1 }]}>IST</Text>
          <Text style={[styles.box, { flex: 4 }]}>{startTimeMap.has('IST')?(startTimeMap.get('IST').split(" ")[0]):("00:00:00")}</Text>
          <Text style={[styles.box, { flex: 4 }]}>{endTimeMap.has('IST')?(endTimeMap.get('IST').split(" ")[0]):("00:00:00")}</Text>
        </View>
        <View style={[styles.horizontalView, { margin: 5 }]}>
          <Text style={[styles.box, { flex: 1 }]}>GMT</Text>
          <Text style={[styles.box, { flex: 4 }]}>{startTimeMap.has('GMT')?(startTimeMap.get('GMT').split(" ")[0]):("00:00:00")}</Text>
          <Text style={[styles.box, { flex: 4 }]}>{endTimeMap.has('GMT')?(endTimeMap.get('GMT').split(" ")[0]):("00:00:00")}</Text>
        </View>
        
      </View>
    </SafeAreaView>
  );
};

export default App;