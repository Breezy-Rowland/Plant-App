import {Stack} from "expo-router";
import {useFonts} from "expo-font"
   


export default function RootLayout () {



  const [loaded, error] = useFonts({
     regular: require('../assets/fonts/Manrope/static/Manrope-Regular.ttf'),

     medium: require('../assets/fonts/Manrope/static/Manrope-Medium.ttf'),

     bold: require('../assets/fonts/Manrope/static/Manrope-Bold.ttf'),

    semibold: require('../assets/fonts/Manrope/static/Manrope-SemiBold.ttf')

  })
      
return (
   
        <Stack screenOptions={{headerShown:false}}>
          <Stack.Screen name="index"/>
          <Stack.Screen name="(auth)"/>
  

        </Stack>
)
}
 
