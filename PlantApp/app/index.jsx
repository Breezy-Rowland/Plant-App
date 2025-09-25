import { Text, View , Image , TextInput ,Dimensions, TouchableOpacity } from "react-native";
import { SafeAreaView} from "react-native-safe-area-context"
export default function Index() {

  const{ width , height} = Dimensions.get ('screen')

  // const [firstName, setFirstName] = useState('')

  return (
    <SafeAreaView style={{backgroundColor: 'white', flex:1, paddingHorizontal:width*.05}}>
      <View style={{marginTop:30}}>
      <Image style ={{width:103, height:81, alignSelf:'center', marginTop:54}} source={require('../assets/images/plant-shop-logo.png')}/>
       </View>
       <View> 
        <Text style={{fontFamily:'SemiBold', fontSize:20,Weight:600, textAlign:'center',Width:290, height:27, marginTop:20 ,color:'#004643' }}>Sign in to your account</Text>
      <Text style={{fontFamily:'SemiBold',height:19, width:94, paddingLeft:7, fontSize:14, marginBottom:10, marginTop:20}}>Email Address</Text>
      <TextInput style ={{borderColor:'#c4c4c4', borderWidth:1, height:50, borderRadius:10,paddingLeft:20}}/>
      <Text style={{fontFamily:'SemiBold',fontWeight:600, width:65, height:19, fontSize:14, marginBottom:10, marginTop:10}}>Password</Text>
      <TextInput style ={{borderColor:'#c4c4c4', borderWidth:1, height:50, borderRadius:10,paddingLeft:20}}/>
      <Text style={{fontFamily:'medium',fontWeight:260, paddingLeft:56 , fontHeight:38, marginBottom:10, marginTop:10, marginLeft:217, color:'#757575', paddingLeft:70}}>Forgot password?</Text>
      <View style= {{
        flexDirection:'row',
      }} 
      
      >
      <Text style={{fontFamily:'medium', fontSize:16, marginBottom:10, marginTop:10,paddingLeft:70, color:'#757575'}}>I’ve read and agreed to </Text>
      <Text style={{fontFamily:'medium', fontSize:16, marginBottom:10, marginTop:10, fontHeight:38, fontWeight:260, color:'#004643'}}>User Agreement</Text>
      </View>

      <View style={{
       flexDirection:'row',
      }}
      >
      <Text style={{fontFamily:'medium', fontSize:16, marginBottom:10, marginTop:1, color:'#757575', paddingLeft:70}}>and</Text>
      <Text style={{fontFamily:'medium', fontSize:16, marginBottom:10, marginTop:1, fontHeight:38, fontWeight:260, color:'#004643', paddingLeft:2}}>Privacy Policy</Text>
      </View>
      <View>
      <TouchableOpacity style= {{backgroundColor:'#004643', width:380, height:60,borderRadius:30, marginTop:60, padding:20}}>
      <Text style={{color:'white',paddingLeft:160,}}>Sign In</Text>
      </TouchableOpacity>
      </View>
      <Text style= {{fontFamily: 'regular', fontWeight:400, fontHeight:16, fontSize:12, color:'#757575', textAlign: 'center', marginTop: 20}}>other way to sign in</Text>
      </View>
     <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop:20
      }}
    >
      <Image
        style={{ width: 48, height: 48, marginRight: 12 }} 
        source={require("../assets/images/google-icon.png")}
      />
      <Image
        style={{ width: 48, height: 48 }}
        source={require("../assets/images/facebook-icon.png")}
      />
    </View>

      
     

     <View
     style={{
        flexDirection:'row',
        marginTop:40,
        alignItems:'center',
        justifyContent:'center'
        }}
     >
      <Text style= {{fontFamily: 'regular', fontWeight:400, fontHeight:16, fontSize:12, color:'#757575',}}>Don't have an account?</Text>, 
      <Text style= {{fontFamily: 'semibold', fontWeight:600, fontHeight:16,fontWidth:90, fontSize:12, color:'#004643',paddingLeft:5}}>Create Account</Text>
     </View>
    </SafeAreaView> 
  );
} 


