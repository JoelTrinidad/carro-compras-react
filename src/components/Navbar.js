import { Component } from "react";
import Logo from "./Logo";

const styles = {
  navbar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: "100px",
    justifyContent: "space-between",
    position: "relative",
    padding: "0 50px",
    boxShadow: "0 2px 3px rgba(0, 0, 0, 0.1",
  },
};

export default class Navbar extends Component {
  render() {
    return (
      <nav style={styles.navbar}>
        <Logo />
        <p>Carro</p>
      </nav>
    );
  }
}
