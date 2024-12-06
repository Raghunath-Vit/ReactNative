import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ProfileScreen } from "../screens/ProfileScreen";
import {CourseListScreen} from "../screens/CourseListScreen";
import { SettingScreen } from "../screens/SettingScreen";
import { Ionicons } from "@expo/vector-icons";

const Tab=createBottomTabNavigator();


export default function Index()
{
    return (
        <Tab.Navigator 
            screenOptions={{
                tabBarLabelPosition:"beside-icon",
                tabBarShowLabel:true,
                tabBarActiveTintColor:"purple",
            }}
        >
            <Tab.Screen name="Profile" component={ProfileScreen}
                options={{
                    tabBarLabel:"My Profile",
                    tabBarIcon:({color})=>{
                        <Ionicons name="person" size={28} color={color}/>
                    },
                    tabBarBadge:3,
                }}
            />
            <Tab.Screen name="CourseList" component={CourseListScreen}/>
            <Tab.Screen  name="Setting" component={SettingScreen}/>
        </Tab.Navigator>
    )
}