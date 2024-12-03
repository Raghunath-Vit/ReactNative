import {
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  Button,
  Pressable,
  Modal,
  ActivityIndicator,
  Alert,
  useWindowDimensions,
  SafeAreaView,
  Platform,
  StyleSheet,
  FlatList,
  SectionList,
} from "react-native";

import pokemonData from "../data.json";
import groupedPokemonList from "../grouped-data.json";

import { useState } from "react";

import logoImg from "../assets/images/adaptive-icon.png";
import backImage from "../assets/images/icon.png";
import { StatusBar } from "expo-status-bar";

export default function Index() {
  const [showModal, setShowModal] = useState(false);
  const [showBar, setShowBar] = useState(true);
  const [showBarText, setShowBarText] = useState("Show");
  const windowWidth=useWindowDimensions().width;

  function changeStatus() {
    setShowBar((prev) => !prev); // Toggles the StatusBar visibility
    setShowBarText((prevText) => (prevText === "Show" ? "Hide" : "Show")); // Toggles the button text
  }

  

  return (
    // <SafeAreaView style={{flex:1}}>

    // <View
    //   style={{
    //     flex: 1,
    //     backgroundColor: "#fafafa",
    //     paddingTop:Platform.OS=="android"?25:0,
    //   }}
    // >
    //   <ScrollView
    //     contentContainerStyle={{ alignItems: "center", paddingVertical: 20 }}
    //   >
    //     <Text
    //       style={{
    //         fontSize: 24,
    //         fontWeight: "bold",
    //         marginBottom: 20,
    //         color: "#6a1b9a",
    //       }}
    //     >
    //       Welcome to React Native
    //     </Text>
    //     {/* Activity Indicator is used for showing loading effects */}
    //     <ActivityIndicator size="large"></ActivityIndicator>
    //     <Image
    //       source={logoImg}
    //       style={{
    //         height: 200,
    //         width: 300,
    //         marginBottom: 20,
    //         borderRadius: 10,
    //       }}
    //     ></Image>
    //     {/* Note for network images it is always compulsory to add the height and width  */}
    //     <Image
    //       source={{ uri: "https://picsum.photos/300" }}
    //       style={{
    //         height: 200,
    //         width: 200,
    //         marginBottom: 20,
    //         borderRadius: 100,
    //       }}
    //     ></Image>

    //     <ImageBackground
    //       source={backImage}
    //       style={{
    //         height: 300,
    //         width: 300,
    //         justifyContent: "center",
    //         alignItems: "center",
    //         borderRadius: 10,
    //         overflow: "hidden",
    //       }}
    //     >
    //       <Text
    //         style={{
    //           color: "#fff",
    //           fontSize: 18,
    //           fontWeight: "bold",
    //           backgroundColor: "rgba(0,0,0,0.5)",
    //           padding: 10,
    //           borderRadius: 5,
    //         }}
    //       >
    //         The text over the Image.
    //       </Text>
    //     </ImageBackground>

    //     <Button
    //       title="press"
    //       onPress={() => {
    //         console.log("Button Pressed");
    //       }}
    //     />

    //     {/* Pressable */}
    //     {/* <View style={{flex:1,padding:60}}> */}
    //     <Pressable
    //       onPress={() => {
    //         console.log("Image Pressed");
    //       }}
    //     >
    //       <Image source={logoImg} style={{ height: 200, width: 200 }}></Image>
    //     </Pressable>
    //     <Pressable
    //       onPress={() => {
    //         console.log("Text Pressed");
    //       }}
    //     >
    //       <Text style={{ textAlign: "center", fontWeight: "900", padding: 20 }}>
    //         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde
    //         provident quos deleniti cum repellendus. Accusantium in temporibus
    //         ducimus obcaecati placeat, nobis laudantium maiores sequi reiciendis
    //         facere. Distinctio esse praesentium nihil voluptate totam odit
    //         inventore ipsam dignissimos dicta quidem magnam, iusto laborum illo!
    //         Accusamus, aperiam error! Vitae illum et voluptatum e.
    //       </Text>
    //     </Pressable>
    //     {/* </View> */}

    //     {/* Modal in React-Native*/}

    //     <Button
    //       title="Show Modal Screen"
    //       color="midnightblue"
    //       onPress={() => setShowModal(true)}
    //     />
    //     <Modal
    //       visible={showModal}
    //       onRequestClose={() => {
    //         setShowModal(false);
    //       }}
    //       animationType="slide"
    //       presentationStyle="overFullScreen"
    //     >
    //       <View style={{ flex: 1, backgroundColor: "lightblue", padding: 60 }}>
    //         <Text>Modal Screen</Text>
    //         <Text>Raghunath Developer</Text>
    //         <Button
    //           title="close"
    //           onPress={() => {
    //             setShowModal(false);
    //           }}
    //         />
    //       </View>
    //     </Modal>


    //     <Button title="Alert" onPress={()=>{
    //       Alert.alert("Alert Title","Alert message",[
    //         {
    //           text:"Cancel",
    //           onPress:()=>{
    //             console.log("Cancel Pressed");
    //           }
    //         },
    //         {
    //           text:"Don't ask again Button",
    //           onPress:()=>{
    //             console.log("Don't mind pressed0");
    //           }
    //         }
    //       ])
    //     }} ></Button>




    //     <View style={{ marginTop: 50, marginBottom: 50 }}>
    //       <Button title={showBarText} onPress={changeStatus} />
    //       <StatusBar backgroundColor="midnightblue" hidden={showBar} />
    //     </View>

    //     <View style={{flex:1,backgroundColor:"red"}}>
    //         <Text style={{height:"30%",width:"100%", fontSize:windowWidth>10?24:70}}>Box</Text>
    //     </View>





    //   </ScrollView>
    // </View>
    // </SafeAreaView>



    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
      {/* Using Map in React native is the same as using in react */}
      {/* <ScrollView style={styles.scrollView}>
        {
          pokemonData.map((pokemon)=>{
            return (
              <View style={styles.card} key={pokemon.id}>
              <Text style={styles.cardText}>{pokemon.type}</Text>
              <Text style={styles.cardText}>{pokemon.name}</Text>
            </View>
            )
          })
        }
      </ScrollView> */}

      {/* Better alternative for high performance is to use flatlist instead of map. as flatmap loads partial only and has lazy loading */}
      <View style={styles.scrollView}>


        {/* Note FlatList needs data is to pass arrays of items is next is renderItem how the UI looks next is keyExtractor which is like id for map for uniquely identifies each component and the item word is compulsory*/}
        {/* <FlatList 
        data={pokemonData}
        renderItem={({ item }) => {
          console.log(item.id);
          return (
            <View style={styles.card}>
              <Text style={styles.cardText}>{item.type}</Text>
              <Text style={styles.cardText}>{item.name}</Text>
            </View>
          );
        }}
        // Below code for uniquely identifying the items of arrays
        keyExtractor={(item,index)=>item.id.toString()}

        // Below code for giving space between the react components excluding the first top side and last botton side space.
        ItemSeparatorComponent={<View style={{height:16}}/>}


        // When the api calls return empty data or simple the data is empty or no array element that below code ui runs
        ListEmptyComponent={<Text>No Data Found</Text>}


        // When want to add header and footer for the List
        ListHeaderComponent={<Text style={styles.headerText}>Pokemon List</Text>}
        ListFooterComponent={<Text style={styles.footerText}>End of List</Text>}




        
        /> */}

         {/* Note SectionList expects that there should be data named props which it received. */}

{/* SectionList has two important props which he needs section (the source of data) and the renderItem (how UI look like) it excepts many same props as FlatList*/}
        <SectionList 
            sections={groupedPokemonList}
            renderItem={({ item }) => {
              return (
                <View style={styles.card}>
                  <Text style={styles.cardText}>{item}</Text>
                </View>
              );
            }} 
              // On what the data is being grouped 
            renderSectionHeader={({section})=>{
              return (
                <Text style={styles.sectionHeaderText}>{section.type}</Text>
              )
            }}
            ItemSeparatorComponent={()=>(<View style={{height:16}}/>)}
            SectionSeparatorComponent={()=>(<View style={{height:16}}/>)}
        />

        
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  scrollView: {
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 8,
    // marginBottom: 16,
    borderWidth: 1,
  },
  cardText: {
    fontSize: 30,
  },
  headerText: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 12,
  },
  footerText: {
    fontSize: 24,
    textAlign: "center",
    marginTop: 12,
  },
  sectionHeaderText: {
    backgroundColor: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
  },
});






// Note for the different styling in android and ios we have three aproaches 1) using Platform.OS 2) using Platform.Select({
// android:
// {
//    color:"purple",
// },
// ios:{
//   color:"red"
// }
// })  and the third and the best approach is to used the paltform file extension. Means by Saving filename with fileName.android.js or FileName.ios.js extension and importing only the FileName not alongwith extensions and later managed by react native either to apply .android.js file component or .ios.js file component.