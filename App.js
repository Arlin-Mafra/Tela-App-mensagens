import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import ListItem from './ListItem'

export default class App extends Component {

  constructor(props){
    super(props)
    this.state ={
    list: [
      {key:'1', img:require('./avatars/user.png'), nome:'Arlin Mafra' , msgm:'Olá como vai?'},
      {key:'2', img:require('./avatars/girl.png'), nome:'Rejane Dantas' , msgm:'Tudo bem com vc?'},
      {key:'3', img:require('./avatars/man.png'), nome:'João Pedro' , msgm:'Tudo tranquilo'},
      {key:'4', img:require('./avatars/boy.png'), nome:'Paulo Silva' , msgm:'Ok!'},
    ]
  }
}

  render(){
    return(
      <View style={styles.container}>
        <FlatList data={this.state.list} renderItem={({item}) => <ListItem data={item}/>}  />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
     margin:10
  }

}) 