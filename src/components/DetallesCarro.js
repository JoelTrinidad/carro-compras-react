import { Component } from "react";

const styles = {
  detallesCarro: {
    backgroundColor: "#fff",
    position: "absolute",
    right: 50,
    marginTop: 30,
    boxShadow: "1px 5px 5px rgba(0, 0, 0, 0.3)",
    borderRadius: "5px",
    width: "300px",
  },
  ul: {
    margin: 0,
    padding: 0,
  },
  producto: {
    listStyletype: 'none',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '25px 20px',
    borderBottom: 'solid 1px #aaa'
  },
  img: {
    width: 50,
    height: 30,
  },
};
export default class DetallesCarro extends Component {
  render() {
    const { carro } = this.props;
    return (
      <div style={styles.detallesCarro}>
        <ul style={styles.ul}>
          {carro.map((x) => (
            <li style={styles.producto} key={x.name}>
              <img src={x.img} alt={x.name} style={styles.img} />
              {x.name}
              <span>{x.cantidad}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
