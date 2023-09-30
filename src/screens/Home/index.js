import { StatusBar } from 'expo-status-bar';

import {Container,Textbotao,SendButton,CampoNome,SendButtontext} from './styles';




export default function App() {
  return (
    <Container>
        <Textbotao>Toma agua</Textbotao>
    <StatusBar/>
    <CampoNome onChangeText={text => setNomeUser(text)}/>
    <SendButton onPress={()=>{'enviar'}}>
        
        <SendButtontext>ENVIAR</SendButtontext>
    </SendButton>
</Container>


    // <View style={styles.container}>
    //   <Text>Tomano cu</Text>
    //   <StatusBar style="auto" />
    // </View>
  )
};

