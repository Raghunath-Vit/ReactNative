// import React, { useState } from "react";
// import {
//   Text,
//   View,
//   SafeAreaView,
//   StatusBar,
//   StyleSheet,
//   TextInput,
//   Alert,

// } from "react-native";

// export default function Index() {
//   const [name, setName] = useState("");
//   const [text, setText] = useState("");
//   const [submittedText, setSubmittedText] = useState("");


//    // Function triggered by onSubmitEditing
//    const handleSubmit = () => {
//     if (text.trim() === "") {
//       Alert.alert("Invalid Input", "Input cannot be empty!");
//     } else {
//       setSubmittedText(text); // Set submitted text
//       Alert.alert("Submission Successful", `You entered: ${text}`);
//     }
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       {/* TextInput for entering an email address */}
//       <TextInput
//         style={styles.input}
//         value={text}
//         // Using onChangeText for real-time state updates
//         onChangeText={(value) => setText(value)} // Updates state on every keystroke

//         onSubmitEditing={handleSubmit} // Triggered when pressing 'Enter'

//         placeholder="email@example.com"

//         // By default React Native TextInput supports AutoCorrection and AutoCapitalize.
//         // But we don't want to interfere with the user typing for email or any input.
//         // So it's best to use the settings below.
//         autoCorrect={false}
//         autoCapitalize="none"



//         // SecureTextEntry hides the typing into asterisks
//         // Removed here as it's not relevant for an email input.
//         // Added keyboardType="email-address" for better UX.
//         keyboardType="email-address"
//       />

//       {/* Displaying the entered name */}
//       <Text style={styles.text}>My name is {name}</Text>

//       {/* Multi-line TextInput for messages */}
//       <TextInput
//         style={[styles.text, styles.multilineText]}
//         placeholder="Enter your message"
//         multiline
//         numberOfLines={4} // Specify number of visible rows for better UX
//       />
//     </SafeAreaView>
//   );
// }




// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//     paddingTop: StatusBar.currentHeight,
//   },
//   input: {
//     height: 40,
//     width: "80%", // Set width for better alignment
//     margin: 12,
//     padding: 10,
//     borderWidth: 1,
//     borderColor: "#ccc",
//     borderRadius: 5, // Added rounded corners for modern design
//   },
//   text: {
//     fontSize: 20, // Adjusted font size for better readability
//     padding: 10,
//   },
//   multilineText: {
//     width: "80%", // Match width with single-line TextInput
//     minHeight: 100,
//     borderWidth: 1,
//     borderColor: "#ccc",
//     padding: 10,
//     borderRadius: 5,
//   },
// });





import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Platform,
  Text,
  Image,
  KeyboardAvoidingView,
  
} from "react-native";







export default function Index() {


  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let errors = {};

    if (!username) errors.username = "Username is required";
    if (!password) errors.password = "Password is required";

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log("Submitted", username, password);
      setUsername("");
      setPassword("");
      setErrors({});
    }
  };
  return (
    // KeyboardAvoidingView is used when the keypad covers the form input fields and we use behaviour="padding" so the form comes upward of keyboard but if image is bigger then again some problem happens so we use keyboardVerticalOffset =100 but this creates extra space for android user so use combine it with Platform.OS so only for ios device 100 otherwise 0.
    <KeyboardAvoidingView
      behavior="padding"
      keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
      style={styles.container}
    >
      <View style={styles.form}>
        <Image
          source={require("../assets/images/adaptive-icon.png")}
          style={{
            width: 200,
            height: 400,
            alignSelf: "center",
            marginBottom: 50,
          }}
        />
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your username"
          value={username}
          onChangeText={setUsername}
        />
        {errors.username ? (
          <Text style={styles.errorText}>{errors.username}</Text>
        ) : null}

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        {errors.password ? (
          <Text style={styles.errorText}>{errors.password}</Text>
        ) : null}

        <Button title="Login" onPress={handleSubmit} />
      </View>
    </KeyboardAvoidingView>
  )
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: "#f5f5f5",
  },
  form: {
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: "bold",
  },
  input: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  },
});
