import {Stack} from "expo-router" 





const AuthLayout = ()=> {
   return(
    <Stack>
      <Stack.Screen name="index"/>

      <Stack.Screen name="sign-up"/>
    
    </Stack>
   ) 
}



export default AuthLayout;