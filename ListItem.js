import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableHighlight, Image } from 'react-native';

export default class ListItem extends Component {

    constructor(props){
        super(props)

        this.click = this.click.bind(this)
        
    }

    click(){
        alert('Você clicou na mensagem: '+ this.props.data.key)

    }
  

  render(){
    return(
    <TouchableHighlight onPress={this.click}>
        <View style={styles.areaUser}>
        <Image source={this.props.data.img}  style={styles.icon}/>
            <View style={styles.areaNome}>
              <Text style={styles.nome}>{this.props.data.nome}</Text>
              <Text style={styles.msgm}>{this.props.data.msgm}</Text>
            </View>
        </View>
    </TouchableHighlight>
    )
  }
}

const styles =  StyleSheet.create({

    areaUser:{
        flex:1,
        flexDirection:"row",
        height:60,
        margin:10,
        marginBottom:10,
        marginTop:20,
        marginLeft:10,
        marginRight:10,
        borderBottomWidth:1
    },
    icon:{
        height:40,
        width:40,
        marginTop:10,
        
 
    },
    areaNome:{
        flex:1,
        flexDirection:"column",
        justifyContent:'center',
        marginLeft:30,
        padding:10,
        marginBottom:10   
    },
    nome:{
        fontSize:20,
        fontWeight:"bold"
    },
    msgm:{
        fontSize:15
    }



})