import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

import "./components/Todo";
import Todo from './components/Todo';

export default class App extends Component {

  lastId = 0;

  state = {
    userName: 'Fred',
    todos:[
      {id: ++this.lastId, text: 'Make coffee'},
      {id: ++this.lastId, text: 'Study GoNative'}
    ]
  }

  addTodo = () => {
    this.setState( { todos: [...this.state.todos, {id: ++this.lastId, text: 'Study JavaScript'}] } )
  }
  
  // STUDY_NOTES: The "render" method is the only one mandatory in a React component
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.userName}</Text>
        { this.state.todos.map(todo=><Todo key={todo.id} title={todo.text}></Todo>) }
        <Button title="Add todo" onPress={this.addTodo} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
