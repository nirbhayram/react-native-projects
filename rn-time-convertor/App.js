import React, { useState } from "react";
import { Button, TouchableOpacity, SafeAreaView, StyleSheet, View, Text } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import ButtonView from "./src/components/ButtonView";

const App = () => {

  const styles = StyleSheet.create({
    container: {
      flex: 1,
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
      margin: 10,
      width: "100%"
    },
    buttonStyle: {
      margin: 10,
    },

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

  return (
    <SafeAreaView style={styles.safeView}>
      <View style={styles.container}>
        <View style={styles.horizontalView}>
          <ButtonView
            text={startDate ? ("Start") : ("select start date")}
            onPress={showDatePickerStart}
          />
          <ButtonView
            text={endDate ? ("End") : ("select start date")}
            onPress={showDatePickerEnd}
          />
          <DateTimePickerModal
            isVisible={isDatePickerVisibleStart}
            mode="datetime"
            onConfirm={handleConfirmStart}
            onCancel={() => { hideDatePickerStart(); setStartDate(null) }}
            headerTextIOS="Pick a date and time"
          />
          <DateTimePickerModal
            isVisible={isDatePickerVisibleEnd}
            mode="datetime"
            onConfirm={handleConfirmEnd}
            onCancel={() => { hideDatePickerEnd(); setEndDate(null) }}
            headerTextIOS="Pick a date and time"
          />
        </View>
        <View>

        </View>
      </View>
    </SafeAreaView>
  );
};

export default App;