import React, { Component } from "react";

import { View, Text, StyleSheet } from "react-native";

import PropTypes from "prop-types";

const Todo = props => (
  <View>
    <Text>{props.title}</Text>
  </View>
);

Todo.defaultProps = {
  title: "Todo padrão"
};

Todo.propTypes = {
  title: PropTypes.string
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

const styles = StyleSheet.create({});

export default Todo;
