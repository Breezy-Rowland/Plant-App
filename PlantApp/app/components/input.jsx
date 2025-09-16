import { View, TextInput } from "react-native" 


const InputComponent = ({icon , renderIcon}) {
    return(
        <View style={{borderColor:'grey',borderWidth:1}}>
           <TextInput/>

           {
            renderIcon && icon
           }
        </View>
    )
}

 export default InputComponent;