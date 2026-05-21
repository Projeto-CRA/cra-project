import { Stack } from 'expo-router';
import { Text, View, StyleSheet, TextInput, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import { useState } from 'react';

export default function Index() {

  const [isPasswordVisible, setIsPasswordVisible] = useState(true); // função para senha iniciar escondida

    return (
    <SafeAreaView style={styles.container}>
        <Stack.Screen options={{ headerShown: false }} />

    <View style={styles.logoContainer}>
        <Image
        source={require('../assets/images/cra-logo.jpeg')}
        style={styles.logo}
        resizeMode="contain"
        />
    </View>

    <View style={styles.headerTextContainer}>
        <Text style={styles.title}>Bem-vindo(a)!</Text>
        <Text style={styles.subtitle}>
        Acesse sua conta para continuar acompanhando nossas soluções ambientais.
        </Text>
    </View>

    <View style={styles.form}>

        <View style={styles.inputWrapper}>
        <MaterialCommunityIcons name="account-outline" size={20} color="#666"/>
        <TextInput
            style={styles.input}
            placeholder="Matrícula"
            placeholderTextColor="#999"
            keyboardType="numeric"
        />
        </View>

        <View style={styles.inputWrapper}>
            <MaterialCommunityIcons name="lock-outline" size={20} color="#666" />
            <TextInput
            style={styles.input}
            placeholder="Senha"
            placeholderTextColor="#999"
            secureTextEntry={isPasswordVisible}
            />
            <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
            <MaterialCommunityIcons
                name={isPasswordVisible ? "eye-outline" : "eye-off-outline"} size={22} 
            />
            </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
        </View>

        <View style={styles.dividerContainer}>
        <View style={styles.line} />
        <Text style={styles.dividerText}>ou</Text>
        <View style={styles.line} />
        </View>

        <TouchableOpacity>
        <Text style={styles.forgotPassword}>Esqueceu sua senha?</Text>
        </TouchableOpacity>

    </SafeAreaView>
    );
}
    const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#f8f8f8",
        paddingHorizontal: 25,
        justifyContent: "center",
    },
    logoContainer:{
        alignItems:'center',
        marginBottom: 40,
    },
    logo: {
        width: 200,
        height: 120,
    },
    headerTextContainer:{
        alignItems: 'center',
        marginBottom: 30,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#0D2C16',
        marginBottom: 10,
    },
    subtitle:{
        fontSize: 15,
        color: '#666',
        textAlign: 'center',
        lineHeight: 20,
    },
    form: {
        width: '100%',
    },
    inputWrapper:{
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#E1E1E1',
        borderRadius: 12,
        paddingHorizontal: 15,
        height: 60,
        marginBottom: 15,
    },
    input: {
        flex: 1,
        paddingLeft: 10,
        fontSize: 16,
        color: '#333333',
    },
    button: {
        backgroundColor: '#4c7b4e',
        height: 60,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText:{
        color:'#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
    dividerContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 30,
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: '#E1E1E1',
    },
    dividerText: {
        marginHorizontal: 15,
        color: '#999',
        fontSize: 14,
        minWidth: 20,
        textAlign:'center',
    },
    forgotPassword: {
        textAlign: 'center',
        color: '#4B734A',
        fontWeight: '600',
        fontSize: 15,
    },
});