const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Onboarding4 from "./screens/Onboarding4";
import Onboarding3 from "./screens/Onboarding3";
import SplashScreen from "./screens/SplashScreen";
import LogInScreen from "./screens/LogInScreen";
import Onboarding2 from "./screens/Onboarding2";
import IOSIconStatusBar from "./components/IOSIconStatusBar";
import IOSStatusBarWithNotch from "./components/IOSStatusBarWithNotch";
import RegisterScreen from "./screens/RegisterScreen";
import Frame from "./components/Frame";
import SettingsPageLight from "./screens/SettingsPageLight";
import Location1 from "./screens/Location1";
import DonorDetails from "./screens/DonorDetails";
import DonationRequest from "./screens/DonationRequest";
import CreateARequest from "./screens/CreateARequest";
import DonationRequest1 from "./screens/DonationRequest1";
import Report from "./screens/Report";
import Profile from "./screens/Profile";
import Search from "./screens/Search";
import FindDonors from "./screens/FindDonors";
import HomePage from "./screens/HomePage";
import Vector from "./screens/Vector";
import VerifyScreen from "./screens/VerifyScreen";
import VerifyScreen1 from "./screens/VerifyScreen1";
import ResetPassword from "./components/ResetPassword";
import RegisterScreen1 from "./screens/RegisterScreen1";
import MIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { IconRegistry, ApplicationProvider } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);

  const [fontsLoaded, error] = useFonts({
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Quando-Regular": require("./assets/fonts/Quando-Regular.ttf"),
    "Play-Regular": require("./assets/fonts/Play-Regular.ttf"),
    "Rubik-Regular": require("./assets/fonts/Rubik-Regular.ttf"),
    "Rubik-Medium": require("./assets/fonts/Rubik-Medium.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });

  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 3000);
  }, []);

  function MaterialIcon({ name, style }) {
    const { height, tintColor, ...iconStyle } = StyleSheet.flatten(style);
    return (
      <MIcon name={name} size={height} color={tintColor} style={iconStyle} />
    );
  }

  const IconProvider = (name) => ({
    toReactElement: (props) => MaterialIcon({ name, ...props }),
  });

  function createIconsMap() {
    return new Proxy(
      {},
      {
        get(target, name) {
          return IconProvider(name);
        },
      }
    );
  }
  const MaterialIconsPack = {
    name: "material",
    icons: createIconsMap(),
  };

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <IconRegistry icons={[MaterialIconsPack]} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
          {hideSplashScreen ? (
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen
                name="Onboarding4"
                component={Onboarding4}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Onboarding3"
                component={Onboarding3}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="SplashScreen"
                component={SplashScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="LogInScreen"
                component={LogInScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Onboarding2"
                component={Onboarding2}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="RegisterScreen"
                component={RegisterScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="SettingsPageLight"
                component={SettingsPageLight}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Location1"
                component={Location1}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="DonorDetails"
                component={DonorDetails}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="DonationRequest"
                component={DonationRequest}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="CreateARequest"
                component={CreateARequest}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="DonationRequest1"
                component={DonationRequest1}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Report"
                component={Report}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Profile"
                component={Profile}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Search"
                component={Search}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="FindDonors"
                component={FindDonors}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="HomePage"
                component={HomePage}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Vector"
                component={Vector}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="VerifyScreen"
                component={VerifyScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="VerifyScreen1"
                component={VerifyScreen1}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="RegisterScreen1"
                component={RegisterScreen1}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          ) : (
            <SplashScreen />
          )}
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
};
export default App;
