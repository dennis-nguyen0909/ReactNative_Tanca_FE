import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { LoginScreen } from "./src/view/LoginScreen";
import { SignUpScreen } from "./src/view/SignUpScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { IntroduceScreen } from "./src/view/IntroduceScreen";
import { BusinessScreen } from "./src/view/BusinessScreen";
import { ViewBusinessComponent } from "./src/component/ViewBusinessComponent";
import { SignUpWithScreen } from "./src/view/SignUpWithScreen";
import { SignInTancaScreen } from "./src/view/SignInTancaScreen";
import { OTPScreen } from "./src/view/OTPScreen";
import { HomeScreen } from "./src/view/HomeScreen";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Business">
        <Stack.Screen
          name="OTPScreen"
          component={OTPScreen}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="SignInTanca"
          component={SignInTancaScreen}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="SignUpWith"
          component={SignUpWithScreen}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="Business"
          component={ViewBusinessComponent}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="Introduce"
          component={IntroduceScreen}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="LoginWithPhone"
          component={SignUpScreen}
          options={{ headerShown: false }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
