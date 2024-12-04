import React,{useLayoutEffect} from "react";
import { View, Text, Button, StyleSheet } from "react-native";



// route is being destructured so that it can be used to get data which is being passed as the params.
export default function AboutScreen({ navigation, route }) {
  const {name}=route.params;

  // Dynamically sets the 
  useLayoutEffect(()=>{
    navigation.setOptions({
      title:name,
    })
  },[navigation,name])
    
  return (
    <View style={styles.container}>
      <Text style={styles.text}>About Screen</Text>
      <Text style={styles.text}>{name}</Text>


    {/* We can use navigation to change props too.*/}
      <Button title="Change" onPress={()=>{
        navigation.setParams({
            name:"Mannu",
        })
      }}/>


      <Button
        title="Go back with data"
        onPress={()=>{
            // 2nd Parameter which is object is for passing data to different screen, while the first one is string which is to be same name as written in Stack.Screen name attribute.
            navigation.navigate("Home",{result:"Data from About"});
        }}
      />
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