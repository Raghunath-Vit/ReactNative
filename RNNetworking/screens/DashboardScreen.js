import {View,Text,StyleSheet, Button} from "react-native";

export const DashboardScreen=({navigation})=>{
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Dashboard Screen</Text>
            {/* tusing below we can open sidebar navigation display */}
            <Button title="Toggle Drawer" onPress={()=>navigation.toggleDrawer()} />

            {/* using navigation.jumpTi we can navigate to different screen without opening the sidebar display. */}
            <Button title="Settings" onPress={()=>navigation.jumpTo("Setting")}/>
        </View>
    )
}


const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
    },
    text:{
        fontSize:24,
        fontWeight:"bold",
        marginBottom:16,
    }
})