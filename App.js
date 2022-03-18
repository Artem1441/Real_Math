import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AppLoading from "expo-app-loading";
import { useState } from 'react';
import MainScreen from './screens/MainScreen';
import * as Font from "expo-font";
import Article1Screen from './screens/Article1Screen';
import Article2Screen from './screens/Article2Screen1';
import Article3Screen from './screens/Article3Screen';
import Article4Screen from './screens/Article4Screen';
import Article5Screen from './screens/Article5Screen';
import Article6Screen from './screens/Article6Screen';
import Article7Screen from './screens/Article7Screen';
import Article8Screen from './screens/Article8Screen';

const Tab = createBottomTabNavigator();

const componentOptions = {
  headerShown: false,
  tabBarStyle: { display: "none" },
};

const loadApplication = async () => {
  await Font.loadAsync({
    "sanspro-bold": require("./assets/fonts/SourceSansPro-Bold.ttf"),
    "sanspro-regular": require("./assets/fonts/SourceSansPro-Regular.ttf"),
  });
};

export default function App() {
  return (
    <SafeAreaProvider>
      <Start />
    </SafeAreaProvider>
  );
}

const Start = () => {
  const [isReady, setIsReady] = useState(false);

  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadApplication}
        onError={(err) => console.log(err)}
        onFinish={() => setIsReady(true)}
      />
    );
  }

  return (
    <NavigationContainer>
      <StatusBar
        animated={true}
        backgroundColor="black"
      />
      <Tab.Navigator initialRouteName={"MainScreen"} screenOptions={{ animationEnabled: false }} backBehavior="history"
      >
        <Tab.Screen
          name="MainScreen"
          component={MainScreen}
          options={componentOptions}
        />
        <Tab.Screen
          name="Article1Screen"
          component={Article1Screen}
          options={componentOptions}
        />
        <Tab.Screen
          name="Article2Screen"
          component={Article2Screen}
          options={componentOptions}
        />
        <Tab.Screen
          name="Article3Screen"
          component={Article3Screen}
          options={componentOptions}
        />
        <Tab.Screen
          name="Article4Screen"
          component={Article4Screen}
          options={componentOptions}
        />
        <Tab.Screen
          name="Article5Screen"
          component={Article5Screen}
          options={componentOptions}
        />
        <Tab.Screen
          name="Article6Screen"
          component={Article6Screen}
          options={componentOptions}
        />
        <Tab.Screen
          name="Article7Screen"
          component={Article7Screen}
          options={componentOptions}
        />
        <Tab.Screen
          name="Article8Screen"
          component={Article8Screen}
          options={componentOptions}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
