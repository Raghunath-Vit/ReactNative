import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native";
import {DashboardScreen} from "../screens/DashboardScreen";
import {SettingScreen} from "../screens/SettingScreen";



const Drawer=createDrawerNavigator();

export default function Index(){
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Dashboard" component={DashboardScreen}
            options={{
                title:"My dashboard",
                drawerLabel:"Dashboard label",
                drawerActiveTintColor:"#333",
                drawerActiveBackgroundColor:"lightblue",
                drawerContentStyle:{
                    backgroundColor:"#c6cbef",
                },
               
            }}
            />
            <Drawer.Screen name="Setting" component={SettingScreen}/>
        </Drawer.Navigator>
    )
}