import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, TouchableOpacity, ImageBackground} from 'react-native';
import { Audio } from 'expo-av';

export default function App() {
  const [presente, setPresente] = useState(true);
  const onPress = () => teste();
  const onPause = () => testePause()
  const [sound, setSound] = React.useState();
  const [play, setPlay] = useState(false)
  const onPlay = () => playSound()

  async function playSound(){
    console.log('loading Sound')
    const { sound } = await Audio.Sound.createAsync(
      require('./assets/Ed.mp3')
   );
    setSound(sound);
    console.log('Playing Sound');
    setPlay(true)
    await sound.playAsync(); }

    useEffect(() => {
      return sound
        ? () => {
            console.log('Unloading Sound');
            sound.unloadAsync(); }
        : undefined;
    }, [sound]);

  function teste(){
    setPresente(false)
    playSound()
    setPlay(false)
  }

  function testePause(){
    setPlay(false)
    console.log("unloading")
    sound.unloadAsync()
  }

  return (
    <View style={styles.container}>
    { presente ? (
      <>
      <Text style={styles.title}>Clique no presente para abrir.</Text>
      <TouchableHighlight onPress={onPress}>
        <Image style={ styles.button } source={require('../BDayGift/assets/presente.png')} />
      </TouchableHighlight>
      </>
    ) : (
      <>
      <Text style={ styles.texto }>Oi Little Lo!{"\n"}Talvez esse não seja o melhor presente, mas espero que não seja o pior deles, pelo menos.{"\n"}Bom, apesar de eu não ser muito fã dessa coisa de aniversário, já deixou bem claro que você ama isso, então tentei me esforçar pra fazer algo que ficasse bom e te deixasse contente. {"\n"}Você sabe bem que é IMPORTANTÍSSIMA pra mim, é uma grande amiga, uma das poucas pessoas com quem eu sou 100% sincero e ainda tenho vontade de conversar no mundo inteiro. {"\n"}Apesar da pandemia eu espero que você aproveite muito seu dia, sei como você gosta dele, te desejo muita saúde, muitas felicidades, muitos outros aniversários, muitos livros, muito dinheiro, mas acima de qualquer outra coisa, quero que você continue pra sempre SEMPRE sendo a lorrane que eu conheço, gentil, simpática, sorridente, feliz, que fala mal do meu filme favorito de HP também, faz o que, é parte do pacote né ?! Mas como ta acabando o espaço, é isso, seja muito feliz Lorrane, você merece demais, eu te amo muito!! {"\n"}                   FELIZ ANIVERSÁRIOOOOOOOO!!!!!!!!! s2</Text>
      <Image style={ styles.balao } source={require('../BDayGift/assets/balao-de-fala.png')}/>
      <Image style={ styles.stitch } source={require('../BDayGift/assets/stitch-desenha-heart.png')}/>
      </>
    )

    }
    </View>
  );
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    justifyContent: "center",
  },
  title:{
    position: 'absolute',
    width: 312,
    height: 28,
    left: 32,
    top:269,
    fontSize: 24
  },
  button: {
    alignItems: "center",
    padding: 10,
    width: 295,
    height: 221,
  },
  stitch:{
    position: 'absolute',
    width:310,
    height: 294,
    left: 78,
    top: 532
  },
  balao:{
    position: 'absolute',
    width:550,
    height: 559,
    left: -130,
    top: 10,
    transform: [{ rotate: '25deg' }]
  },
  texto:{
    color: 'black',
    position:'absolute',
    width: 374,
    height: 294,
    left: 5,
    top: 125,
    fontSize: 15
  },
  pause:{
    position: 'absolute',
    width: 61,
    height: 61,
    top: 210,
    left: 50
  }
});

