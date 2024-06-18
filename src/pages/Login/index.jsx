import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import { auth } from "../../config/firebase";



export default function LoginScreen({navigation}) {
    
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    async function lolo() {
        console.log("Login realizado com successfully!!!");
        try {
            const userRef = signInWithEmailAndPassword(auth, email, senha);
            if(userRef) {
                console.log("Usuario logado com successfully!!!")
                navigation.navigate("Home")
            }
        } catch (e) {}
    }
    return(
        <View>
            <Text>Login</Text>
            <TextInput 
            placeholder="Digite seu email"
            value={email}
            onChangeText={setEmail}
            />
            <TextInput 
            placeholder="Digite sua senha"
            value={senha}
            onChangeText={setSenha}
            />
             <Button onPress={lolo} title="Logar"></Button>
        </View>
    )
}