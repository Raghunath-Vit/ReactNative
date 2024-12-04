import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import {useNavigation} from "@react-navigation/native";


// React Navigation automatically provides the navigation props to the screen. Here i removed the navigation props and use the useNavigation hooks because navigation props only works with screen component while useNavigation can be used with any Component.


// route is being destructured so that it can be used to get data which is being passed as the params.
export default function HomeScreen({ route }) {
    const navigation=useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      {/* Data name to be passed to About Screen  */}
      <Button 
        title="Go To About"
        onPress={()=>navigation.navigate("About",{
            name:"Raghunath Singh"
        })}
      />
      <Text style={styles.text}>{ route.params?.result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
});