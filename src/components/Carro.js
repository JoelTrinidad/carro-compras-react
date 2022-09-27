import { Component } from "react";
import BubbleAlert from "./BubbleAlert";

const styles = {
  carro: {
    backgroundColor: "#359A2C",
    color: "#fff",
    padding: "15px",
    border: "none",
    borderRadius: "15px",
    cursor: "pointer",
  },
  bubble: {
    position: 'relative',
    left: 12,
    top: 20,
  },
};

export default class Carro extends Component {
  render() {
    return (
      <div>
        <span style={styles.bubble}>
            <BubbleAlert value={10}/>
        </span>
        <button style={styles.carro}>Carro</button>
      </div>
    );
  }
}
