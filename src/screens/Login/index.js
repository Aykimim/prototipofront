import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Container,
  Textbotao,
  SendButton,
  CampoNome,
  Textentrada,
  SendButtontext
} from "./styles";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  View,
  TextInput,
  Button
} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  const [nomeUser, setNomeUser] = useState("");
  const [senha, setSenha] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [Esquecisenha] = useState("");
  const handleLogin = () => {
    // autenticação (nome e senha)
    if (nomeUser === "Coxinha" && senha === "Coxinha") {
      setLoggedIn(true);
    } else {
      alert("Credenciais incorretas. Tente novamente.");
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setNomeUser("");
    setSenha("");
  };
  return (
    <Container>
      {loggedIn ? (
        <>
          <Textbotao>Bem-vindo, {nomeUser}!</Textbotao>
          <SendButton onPress={handleLogout}>
            <SendButtontext>Logout</SendButtontext>
          </SendButton>
        </>
      ) : (
        <>
          <Textbotao>Tela de Login</Textbotao>

          <Image
            source={{
              uri: "https://developerplus.com.br/wp-content/uploads/2021/10/user.png"
            }}
          />

          <Textentrada
            placeholder="Nome de Usuário"
            value={nomeUser}
            onChangeText={(text) => setNomeUser(text)}
          />

          <Textentrada
            placeholder="Senha"
            secureTextEntry={true}
            value={senha}
            onChangeText={(text) => setSenha(text)}
          />

          <SendButton onPress={handleLogin}>
            <SendButtontext>Entrar</SendButtontext>
          </SendButton>

          <SendButton onPress={Esquecisenha}>
            <SendButtontext>Esqueci a senha.</SendButtontext>
          </SendButton>

          <Text style={{ flex: 0 }}>
            Ao se inscrever, você concorda com nossos Termos e Política de
            Privacidade Você pode excluir sua conta em suas configurações{" "}
          </Text>
        </>
      )}
      <StatusBar style="auto" />

      {/* <Textbotao>Toma asagua</Textbotao>
      <StatusBar />
      <CampoNome onChangeText={(text) => setNomeUser(text)} />
      <SendButton
        onPress={() => {
          "enviar";
        }}
      >
        <SendButtontext>ENVIAR</SendButtontext>
      </SendButton> */}
    </Container>

    // <View style={styles.container}>
    //   <Text>Tomano cu</Text>
    //   <StatusBar style="auto" />
    // </View>
  );
}
