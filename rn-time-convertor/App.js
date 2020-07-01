import React, { useState } from "react";
import { Button, View, SafeAreaView } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
 
const App = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
 
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
 
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
 
  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    hideDatePicker();
  };
 
  return (
    <SafeAreaView style={{paddingTop:30}}>
      <Button title="Show Date Picker" onPress={showDatePicker} />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="datetime"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        headerTextIOS="Pick a date and time"
      />
    </SafeAreaView>
  );
};
 
export default App;