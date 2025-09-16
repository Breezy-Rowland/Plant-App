import { Text, View , Image , TextInput ,Dimensions, Pressable } from "react-native";
import { SafeAreaView} from "react-native-safe-area-context"

export default function Index() {

  const{ width ,height} = Dimensions.get ('screen')


  return (
    <SafeAreaView style={{backgroundColor: 'white', flex:1, paddingHorizontal:width*.05}}>
      <View style={{marginTop:30}}>
      <Image style ={{width:103, height:81, alignSelf:'center'}} source={require('../assets/images/plant-shop-logo.png')}/>
       </View>
       <View>
        <Text style={{fontFamily:'SemiBold', fontSize:20,Weight:600, textAlign:'center',Width:290, height:27, marginTop:171,color:'#004643' }}>Sign in to your account</Text>
      <Text style={{fontFamily:'SemiBold',height:19, width:94, paddingLeft:7, fontSize:14, marginBottom:10, marginTop:20}}>Email Address</Text>
      <TextInput style ={{borderColor:'#c4c4c4', borderWidth:1, height:50, borderRadius:10,paddingLeft:20}}/>
      <Text style={{fontFamily:'SemiBold',fontWeight:600, width:65, height:19, fontSize:14, marginBottom:10, marginTop:10}}>Password</Text>
      <TextInput style ={{borderColor:'#c4c4c4', borderWidth:1, height:50, borderRadius:10,paddingLeft:20}}/>
      <Text style={{fontFamily:'medium',fontWeight:'semi-bold', paddingLeft:7, fontSize:16, marginBottom:10, marginTop:10, marginLeft:217, color:'#757575', paddingLeft:60}}>Forgot password?</Text>
      <Text style={{fontFamily:'medium',fontWeight:'semi-bold', paddingLeft:7, fontSize:16, marginBottom:10, marginTop:10, marginLeft:40}}>I’ve read and agreed to User Agreement
       and Privacy Policy</Text>
      <Pressable style= {{backgroundColor:'#004643', width:370, height:60,borderRadius:30, marginTop:20, padding:20}}>
      <Text style={{color:'white',paddingLeft:150,}}>Sign In</Text>
      </Pressable>
       

      </View>

    </SafeAreaView> 
  );
} 


