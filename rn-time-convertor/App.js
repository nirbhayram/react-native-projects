import React, { useState } from "react";
import { Button, TouchableOpacity, SafeAreaView, StyleSheet, View, Text, Alert } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import ButtonView from "./src/components/ButtonView";

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
      width: "100%"
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

  const showDatePickerStart = () => {
    setDatePickerVisibilityStart(true);
  };

  const hideDatePickerStart = () => {
    setDatePickerVisibilityStart(false);
  };

  const handleConfirmStart = (date) => {
    setStartDate(date)
    hideDatePickerStart();
  };

  const showDatePickerEnd = () => {
    setDatePickerVisibilityEnd(true);
  };

  const hideDatePickerEnd = () => {
    setDatePickerVisibilityEnd(false);
  };

  const handleConfirmEnd = (date) => {
    setEndDate(date)
    hideDatePickerEnd();
  };

  const getTime = (date) => {
    if (!date) {
      return "00:00:00"
    }
    let hour = date.getHours()
    if (hour < 10) {
      hour = "0" + hour
    }
    let minute = date.getMinutes()
    if (minute < 10) {
      minute = "0" + minute
    }
    let second = date.getSeconds()
    if (second < 10) {
      second = "0" + second
    }
    return hour + ":" + minute + ":" + second
  }

  return (
    <SafeAreaView style={styles.safeView}>
      <View style={styles.container}>
        <View style={[styles.horizontalView, { margin: 20 }]}>
          <ButtonView
            text={startDate ? (getTime(startDate)) : ("select start date")}
            onPress={showDatePickerStart}
          />
          <ButtonView
            text={endDate ? (getTime(endDate)) : ("select end date")}
            onPress={() => { startDate ? showDatePickerEnd() : Alert.alert("Please select start date!") }}
          />
          <DateTimePickerModal
            is24Hour={true}
            isVisible={isDatePickerVisibleStart}
            mode="datetime"
            date={startDate ? (startDate) : (new Date())}
            onConfirm={handleConfirmStart}
            onCancel={() => { hideDatePickerStart(); setStartDate(null); setEndDate(null) }}
            headerTextIOS="Pick a date and time"
          />
          <DateTimePickerModal
            is24Hour={true}
            isVisible={isDatePickerVisibleEnd}
            mode="datetime"
            date={startDate ? (startDate) : (new Date())}
            minimumDate={startDate ? (startDate) : (new Date(1950, 0, 1))}
            onConfirm={handleConfirmEnd}
            onCancel={() => { hideDatePickerEnd(); setEndDate(null) }}
            headerTextIOS="Pick a date and time"
          />
        </View>
        <View style={[styles.horizontalView, { margin: 5 }]}>
          <Text style={[styles.box, { flex: 1, backgroundColor: "#B4E4DE" }]}>TZ</Text>
          <Text style={[styles.box, { flex: 4, backgroundColor: "#B4E4DE" }]}>Start</Text>
          <Text style={[styles.box, { flex: 4, backgroundColor: "#B4E4DE" }]}>End</Text>
        </View>
        <View style={[styles.horizontalView, { margin: 5 }]}>
          <Text style={[styles.box, { flex: 1 }]}>IST</Text>
          <Text style={[styles.box, { flex: 4 }]}>{getTime(startDate)}</Text>
          <Text style={[styles.box, { flex: 4 }]}>{getTime(endDate)}</Text>
        </View>
        <View style={[styles.horizontalView, { margin: 5 }]}>
          <Text style={[styles.box, { flex: 1 }]}>GMT</Text>
          <Text style={[styles.box, { flex: 4 }]}>10:22 AM</Text>
          <Text style={[styles.box, { flex: 4 }]}>10:52 AM</Text>
        </View>
        <View style={[styles.horizontalView, { margin: 5 }]}>
          <Text style={[styles.box, { flex: 1 }]}>HKT</Text>
          <Text style={[styles.box, { flex: 4 }]}>10:22 AM</Text>
          <Text style={[styles.box, { flex: 4 }]}>10:52 AM</Text>
        </View>
        <View style={[styles.horizontalView, { margin: 5 }]}>
          <Text style={[styles.box, { flex: 1 }]}>UTC</Text>
          <Text style={[styles.box, { flex: 4 }]}>10:22 AM</Text>
          <Text style={[styles.box, { flex: 4 }]}>10:52 AM</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default App;