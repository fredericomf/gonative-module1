import React, { Component } from 'react';

import {
  View, Text, StyleSheet, Platform,
} from 'react-native';

import PropTypes from 'prop-types';

const Todo = props => (
  <View>
    <Text style={styles.text}>{props.title}</Text>
  </View>
);

Todo.defaultProps = {
  title: 'Todo padrão',
};

Todo.propTypes = {
  title: PropTypes.string,
};

// STUDY_NOTES: Statefull component example:
// export default class Todo extends Component {
//   static defaultProps = {
//     title: "Todo padrão"
//   };

//   static propTypes = {
//     title: PropTypes.string
//   };

//   render() {
//     return (
//       <View>
//         <Text>{this.props.title}</Text>
//       </View>
//     );
//   }
// }

const styles = StyleSheet.create({
  text: {
    ...Platform.select({
      ios: {
        fontWeight: 'bold',
      },
      android: {
        fontSize: 24,
      },
    }),
  },
});

export default Todo;
