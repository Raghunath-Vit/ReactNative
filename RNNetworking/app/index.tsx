import { Alert, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import AboutScreen from "../screens/AboutScreen";
import { Pressable } from "react-native-gesture-handler";

const Stack=createNativeStackNavigator();  

export default function Index() {
  return (
    
      <Stack.Navigator 
      // Name of the route to focus by on initial render. If not specified, usually the first route is used for root route.
      initialRouteName="Home"
      // to apply to all the screens to have same style
      screenOptions={{
        headerStyle:{
          backgroundColor:"#6a51ae",
        },
        headerTintColor:"#fff",
        headerTitleStyle:{
          fontWeight:"bold",
        },
        // to add something on the right sode of header screen, use below
        headerRight:()=>(
          <Pressable onPress={()=>Alert.alert("Menu Pressed")}>
            <Text style={{color:"#fff", fontSize:16}}>Menu</Text>
          </Pressable>
        ),
        contentStyle:{
          backgroundColor:"#e8e4f3"
        }
      }}
      >


        {/* To design an particular screen top area we write for designing it in third attribute named options* and to apply to all the screens write in Stack.Navigator screenOptions attribute */}
        <Stack.Screen name="Home" component={HomeScreen} 
        options={
          {
            title:"Welcome Home",
            headerStyle:{
              backgroundColor:"#6a51ae",
            },
            headerTintColor:"#fff",
            headerTitleStyle:{
              fontWeight:"bold",
            },
            // to add something on the right sode of header screen, use below
            headerRight:()=>(
              <Pressable onPress={()=>Alert.alert("Menu Pressed")}>
                <Text style={{color:"#fff", fontSize:16}}>Menu</Text>
              </Pressable>
            ),
            contentStyle:{
              backgroundColor:"#e8e4f3"
            }
          }
        }
        />

        {/* To Dynamically update we have two choice 1) using options and route in Stack.screen 2) using useLayoutEffect with navigation.setOptions and pass object to it */}
        <Stack.Screen name="About" component={AboutScreen} 
            // options={({route})=>({
            //   title:route.params?.name,
            // })}
        />
      </Stack.Navigator>
   
  );
}



// Navigation is of three types 
// 1) Stack navigation : Like new screen comes on top of last screen and when the new screen removed the previous screen will WebGL2RenderingContext. Like LIFO property of Stack. Used when we have linear flow of execution. Stack Navigation is of two types:- a) Stack Navigator 2) Native stack Navigator