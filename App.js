import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Button, Text, Body, Title, Toast, Root, StyleProvider } from 'native-base';
import { createStackNavigator,createAppContainer } from 'react-navigation';
import getTheme from './native-base-theme/components';
import platform from './native-base-theme/variables/platform';

class ContadorLetras extends Component {

  constructor(props){
    super(props);
    this.state = {
      conteo: "",
      palabra: "",
      limpiar: false
    }
  }

count(word)
{
    if (typeof word !== 'string') return -1;
    // Una palabra no tiene espacios
    word = word.split(" ")[0];
    this.setState({palabra: word})
    var count = 0 , characters =  word.split("");
    console.log(characters);
    for (var i = 0; i < characters.length; i++) count++;

    return this.convertNumberToWord(count);
}

 //Se Convierte número en palabra
convertNumberToWord(number){
  if (number > 0)
  {
    var o = ["diez", "once", "doce", "trece", "catorce", "quince", "dieciséis", "diecisiete", "dieciocho", "diecinueve", "veinte", "veintiuno", "veintidós", "veintitrés", "veinticuatro", "veinticinco", "veintiséis", "veintisiete", "veintiocho", "veintinueve"];
    var u = ["cero", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve"];
    var d = ["", "", "", "treinta", "cuarenta", "cincuenta", "sesenta", "setenta", "ochenta", "noventa"];
    var c = ["", "ciento", "doscientos", "trescientos", "cuatrocientos", "quinientos", "seiscientos", "setecientos", "ochocientos", "novecientos"];

    var n = parseFloat(number).toFixed(2); //dos decimales
    var p = n.toString().substring(n.toString().indexOf(".")+1); //decimales/
    var m = n.toString().substring(0,n.toString().indexOf(".")); //número sin decimales/
    var m = parseFloat(m).toString().split("").reverse();
    var t="";

    //Se analiza cada 3 dígitos/
  for (var i=0; i<m.length; i+=3){

    var x=t;
    //Se forma un numero de tres/
    var b= (m[i+1]!=undefined) ? parseFloat(m[i+1].toString()+m[i].toString()) : parseFloat(m[i].toString());
    t= (m[i+2]!=undefined) ? (c[m[i+2]]+" ") : "";
    t+= (b<10) ? u[b] :( (b<30) ? o[b-10] : (d[m[i+1]]+(m[i]=='0'?"":(" y "+u[m[i]]))) );
    t= (t=="ciento cero")? "cien": t;
    if (2<i&&i<6)
      t=  (t=="uno") ? "mil" : (t.replace("uno","un")+" mil");
    if (5<i&&i<9)
      t= (t=="uno") ? "un millón":(t.replace("uno","un")+" millones ");
  }
  t+=x;
  return t.replace("  "," ").replace(" cero","");
  }
    return "No es una palabra"
}

  render() {
    return (

      <Container>

         <Content style={{padding: 10}}>
         <Item regular>
            <Input placeholder="Escriba una palabra" keyboardType='numeric'
 maxLength={20}
 onChangeText={(text)=> this.setState({palabra:text})} value={this.state.palabra}></Input>
         </Item>

          <Button block green style={{margin: 10}} onPress={()=>{

            let result = this.count(this.state.palabra);
            this.setState({conteo: "Conteo de letras: "+result});
            this.setState({limpiar: true});

          }}>
            <Text>Calcular</Text>
          </Button>

          <Button disabled={!this.state.limpiar} block style={{margin: 10}} onPress={()=>{
            this.setState({conteo: "", palabra: ""});
            this.setState({limpiar: false});
          }}>
            <Text>Limpiar</Text>
          </Button>
          <Text style={{textAlignVertical: "center",textAlign: "center", fontSize: 20, marginTop: 20}}>
            {this.state.conteo}
          </Text>

        </Content>
      </Container>


    );
  }
}

class FormularioInicio extends Component {

  static navigationOptions = {
    title: 'Login',
  };

  constructor(props){
    super(props);
    this.state = {
      usuario: "",
      password: ""
    }
  }


  validarPassword(usuario,password){
    if(usuario != "pablo" && password != "coronado"){

    }

  }

  render() {
    return (

      <Container>
      <Content>
         <Form>
            <Item>
              <Input placeholder="Usuario" onChangeText={(text) => this.setState({usuario:text})} value={this.state.usuario}/>
            </Item>
            <Item last>
              <Input secureTextEntry={true} placeholder="Contraseña" onChangeText={(text) => this.setState({password: text})} value={this.state.password}/>
            </Item>
          </Form>
          <Button onPress={()=>{
            if(this.state.usuario != "pablo" || this.state.password != "coronado"){
              Toast.show({
                 text: 'Datos incorrectos',
                 buttonText: 'OK',
                 duration: 2000
               })
            }
            else{

              this.props.navigation.navigate('Contador');
            }
            this.setState({password:"",usuario: ""})
          }
        } block>
              <Text>Ingresar</Text>
          </Button>
          </Content>
      </Container>

    );
  }

}

const Navigator = createStackNavigator(
  {
    Home: FormularioInicio,
    Contador: ContadorLetras
  },
  {initialRouteName: 'Contador'}
);

const AppContainer = createAppContainer(Navigator);

export default class App extends Component {
  render() {
    return (
      <StyleProvider style={getTheme(platform)}>
        <Root>
         <AppContainer/>
        </Root>
      </StyleProvider>
    );
  }
}
