import './config/ReactotronConfig';
import './config/DevToolsConfig';

import React, { Component } from 'react';
import {
  StyleSheet, Text, View, Button,
} from 'react-native';

import Todo from '~/components/Todo';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
export default class App extends Component {
  lastId = 0;

  state = {
    userName: 'Fred',
    todos: [
      { id: (this.lastId += 1), text: 'Make coffee' },
      { id: (this.lastId += 1), text: 'Study GoNative' },
    ],
  };

  addTodo = () => {
    const { todos } = this.state;

    this.setState({
      todos: [...todos, { id: (this.lastId += 1), text: 'Study JavaScript' }],
    });
  };

  // STUDY_NOTES: The "render" method is the only one mandatory in a React component
  render() {
    const { userName, todos } = this.state;

    return (
      <View style={styles.container}>
        <Text>{userName}</Text>
        {todos.map(todo => (
          <Todo key={todo.id} title={todo.text} />
        ))}
        <Button title="Add todo" onPress={this.addTodo} />
      </View>
    );
  }
}
