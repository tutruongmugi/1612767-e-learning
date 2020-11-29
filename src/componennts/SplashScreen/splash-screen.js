import React, { useState, useEffect } from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import * as RootNavigation from "../../routes/navigations/root-navigation";
import Ionicons from "react-native-vector-icons/Ionicons";

// class SplashScreen extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { loading: 0 };
//   }

//   componentDidMount() {
//     this.timer = setInterval(() => {
//       const newLoadingValue = this.state.loading + 1;
//       this.setState({ loading: newLoadingValue });
//     }, 100);
//   }
//   //   shouldComponentUpdate() {}
//   componentDidUpdate() {
//     if (this.state.loading >= 100) {
//       clearInterval(this.timer);
//       RootNavigation.navigate("Login");
//     }
//   }

//   componentWillUnmount() {
//     clearInterval(this.timer);
//   }

//   render() {
//     return (
//       <view>
//         <Text>loading....{`${this.state.loading}`}</Text>
//       </view>
//     );
//   }
// }

function SplashScreen() {
  const [loading, setLoading] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setLoading(loading + 5);
    }, 100);
    if (loading >= 100) {
      clearInterval(timer);
      RootNavigation.navigate("Login", { item: "" });
    }
    return () => {
      clearInterval(timer);
    };
  }, [loading]);

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 48, fontWeight: "bold" }}>Learning Market</Text>
      <Ionicons name={"md-globe"} size={128.0} />
      <Text style={{ marginTop: 30 }}>loading....{`${loading} %`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFBD2F",
  },
});

export default SplashScreen;
