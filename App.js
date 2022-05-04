import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { Component } from "react";

/* export default class APP extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vlrVenta: "",
      salario: "",
      comision: "",
      total: "",
    };
  }

  calcular = () => {
     this.setState({
      comision: (this.state.vlrVenta * 2) / 100,
    });
    let myComision = this.state.vlrVenta *2/100;
    this.setState({
      total: myComision + parseFloat(this.state.salario)
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Sistema de ventas</Text>
        <br/>
        <Text>Valor de la venta</Text>
        <TextInput
          style={styles.textinput}
          placeholder="Ingrese valor de la venta"
          onChangeText={(vlrVenta) => this.setState({ vlrVenta })}
          value={this.state.vlrVenta}
        />
        <Text>Salario</Text>
        <TextInput
          style={styles.textinput}
          placeholder="Ingrese el salario"
          onChangeText={(salario) => this.setState({ salario })}
          value={this.state.salario}
        />
        <Text>Valor comisiòn</Text>
        <TextInput
          style={styles.textinput} 
          value={new Intl.NumberFormat('es-CO').format(this.state.comision)}
        />
        <Text>Total a pagar</Text>
        <TextInput 
        style={styles.textinput} 
        value={new Intl.NumberFormat('es-CO').format(this.state.total)} 
        />
        <TouchableOpacity
          style={{
            backgroundColor: "lightblue",
            padding: "7px",
            borderRadius: "8px",
          }}
          onPress={()=>this.calcular()}
        >
          <Text>Calcular</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  textinput: {
    backgroundColor: '#d6d6d6',
    color: '#010101',
    height: 40,
    padding: 5,
    marginBottom: 15,
    width: 400,
    borderRadius: 4,
    textAlign: "center"
  }
}); */

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nota1: "",
      nota2: "",
      nota3: "",
      definitiva: "",
    };
  }

  calcular(){
    this.setState({definitiva: (this.state.nota1 + this.state.nota2 + this.state.nota3) / 3})
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Sistema de notas</Text>
        <br/>
        <Text>Nota 1</Text>
        <TextInput
          style={styles.textinput}
          placeholder="Ingrese la primer nota"
          onChangeText={(nota1) => this.setState({ nota1 })}
          value={this.state.nota1}
        />
        <Text>Nota 2</Text>
        <TextInput
          style={styles.textinput}
          placeholder="Ingrese la segunda nota"
          onChangeText={(nota2) => this.setState({ nota2 })}
          value={this.state.nota2}
        />
        <Text>Nota 3</Text>
        <TextInput
          style={styles.textinput}
          placeholder="Ingrese la tercera nota"
          onChangeText={(nota3) => this.setState({ nota3 })}
          value={this.state.nota3}
        />
        <Text>Definitiva</Text>
        <TextInput 
        style={styles.textinput} 
        value={this.state.definitiva} 
        />
        <TouchableOpacity
          style={{
            backgroundColor: "lightblue",
            padding: "7px",
            borderRadius: "8px",
          }}
          onPress={()=>this.calcular()}
        >
          <Text>Calcular Definitiva</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  textinput: {
    backgroundColor: '#d6d6d6',
    color: '#010101',
    height: 40,
    padding: 5,
    marginBottom: 15,
    width: 400,
    borderRadius: 4,
    textAlign: "center"
  }
});
