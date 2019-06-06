import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Button } from "react-native-elements";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>Here is a gradient button:</Text>
        <Button
          linearGradientProps={{
            colors: ["red", "green"]
          }}
          title="Ugly button"
          raised
          buttonStyle={{
            height: 60
          }}
          icon={{ name: "done", color: "white" }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 8
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center"
  }
});
