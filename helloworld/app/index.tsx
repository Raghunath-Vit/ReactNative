import {
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  Button,
  Pressable,
  Modal
} from "react-native";

import { useState } from "react";

import logoImg from "../assets/images/adaptive-icon.png";
import backImage from "../assets/images/icon.png";

export default function Index() {
  const [showModal,setShowModal]=useState(false);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fafafa",
      }}
    >
      <ScrollView
        contentContainerStyle={{ alignItems: "center", paddingVertical: 20 }}
      >
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
            marginBottom: 20,
            color: "#6a1b9a",
          }}
        >
          Welcome to React Native
        </Text>
        <Image
          source={logoImg}
          style={{
            height: 200,
            width: 300,
            marginBottom: 20,
            borderRadius: 10,
          }}
        ></Image>
        {/* Note for network images it is always compulsory to add the height and width  */}
        <Image
          source={{ uri: "https://picsum.photos/300" }}
          style={{
            height: 200,
            width: 200,
            marginBottom: 20,
            borderRadius: 100,
          }}
        ></Image>

        <ImageBackground
          source={backImage}
          style={{
            height: 300,
            width: 300,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
            overflow: "hidden",
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 18,
              fontWeight: "bold",
              backgroundColor: "rgba(0,0,0,0.5)",
              padding: 10,
              borderRadius: 5,
            }}
          >
            The text over the Image.
          </Text>
        </ImageBackground>

        <Button
          title="press"
          onPress={() => {
            console.log("Button Pressed");
          }}
        />
      







      {/* Pressable */}
      {/* <View style={{flex:1,padding:60}}> */}
      <Pressable onPress={()=>{console.log("Image Pressed")}}>
        <Image source={logoImg} style={{height:200,width:200}}></Image>
      </Pressable>
      <Pressable onPress={()=>{console.log("Text Pressed")}}>
        <Text style={{textAlign:"center",fontWeight:"900",padding:20}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde provident quos deleniti cum repellendus. Accusantium in temporibus ducimus obcaecati placeat, nobis laudantium maiores sequi reiciendis facere. Distinctio esse praesentium nihil voluptate totam odit inventore ipsam dignissimos dicta quidem magnam, iusto laborum illo! Accusamus, aperiam error! Vitae illum et voluptatum e.</Text>
      </Pressable>
      {/* </View> */}






        {/* Modal in React-Native*/}

          <Button title="Show Modal Screen" color="midnightblue" onPress={()=>setShowModal(true)} />
          <Modal visible={showModal} onRequestClose={()=>{setShowModal(false)}} animationType="slide" presentationStyle="overFullScreen">
            <View style={{flex:1,backgroundColor:"lightblue",padding:60}}>
                <Text>Modal Screen</Text>
                <Text>Raghunath Developer</Text>
                <Button title="close" onPress={()=>{setShowModal(false)}} />
            </View>
          </Modal>







      </ScrollView>
    </View>
  );
}
