import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={estilos.container}>
       <StatusBar style="auto" />

      <View style={estilos.container2}>
          <View style={estilos.cxConteudo1}></View>
          <View style={estilos.cxConteudo2}></View>
          <View style={estilos.cxConteudo3}>
              <View style={estilos.cxConteudo31}></View>
              <View style={estilos.cxConteudo32}></View>
          </View>
      </View>

      <View style={estilos.container3}>
          <View style={estilos.container31}>
               <View style={estilos.cxConteudo5}></View>
               <View style={estilos.container311}>
                    <View style={estilos.cxConteudo7}></View>
                    <View style={estilos.cxConteudo8}></View>
               </View>
          </View>
          <View style={estilos.cxConteudo6}></View>
      </View>

      <View style={estilos.cxConteudo9}></View>

      <View style={estilos.cxConteudo10}></View>
       
      <View style={estilos.container4}>
        <View style={estilos.cxConteudo11}></View>
        <View style={estilos.cxConteudo12}></View>
      </View>

    </View> // Fechamento do container principal
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2:{
    backgroundColor: "yellow",
    height: "10%",
    width: "100%",
    flexDirection: "row"
  },
  cxConteudo1:{
    backgroundColor: "blue",
    width: "33%",
    height: "100%"
  },
  cxConteudo2:{
    backgroundColor: "purple",
    width: "34%",
    height: "100%"
  },
  cxConteudo3:{
    backgroundColor: "red",
    width: "33%",
    height: "100%"
  },
  cxConteudo31:{
    backgroundColor: "orange",
    height: "50%"
  },
  container3:{
    backgroundColor: "lightblue",
    height: "20%",
    width: "100%",
    flexDirection: "row"
  },
  container31:{
    width: "50%",
    height: "100%"
  },
  cxConteudo6:{
    width: "50%",
    height: "100%",
    backgroundColor: "green"
  },
  cxConteudo5:{
    height: "50%",
    width: "100%",
    backgroundColor: "yellow"
  },
  cxConteudo7:{
    backgroundColor: "red",
    width: "50%",
    height: "100%"
  },
  cxConteudo8:{
    backgroundColor: "blue",
    width: "50%",
    height: "100%"
  },
  container311:{
    flexDirection: "row",
    width: "100%",
    height: "50%"
  },
  cxConteudo9:{
    backgroundColor: "yellow",
    height: "25%",
    width: "100%",
  },
  cxConteudo10:{
    backgroundColor: "purple",
    height: "30%",
    width: "100%",
  },

  container4:{
    height: "15%",
    width: "100%",
    backgroundColor: "pink",
    flexDirection: "row"
  },
  cxConteudo11:{
    width: "70%",
    height: "100%",
    backgroundColor: "green"
  },
  cxConteudo12:{
    width: "30%",
    height: "100%",
    backgroundColor: "blue"
  }

});
