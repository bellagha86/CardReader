import React, { Component } from "react";
import "./CardReader.css";

class CardReader extends Component {
  state = {
    cardNumber: "0000 0000 0000 0000",
    validity: "00/00",
    name: "Enter Name",
    check: false
  };
  handleChange = n => {
    this.setState({
      name: n.target.value.toUpperCase().trim()
    });
  };

  handleChange1 = c => {
    const ValidNumber = /\^(\d{4}-){3}\d{4}$|^(\d{4} ){3}\d{4}$|^\d{16}$/g;
    if (ValidNumber.test(c.target.value)) {
      this.setState({
        cardNumber: c.target.value
          .replace(/[^\dA-Z]/g, "")
          .replace(/(.{4})/g, "$1 ")
          .trim()
      });
    } else {
      this.setState({
        cardNumber: "0000 0000 0000 0000"
      });
    }
  };

  handleChange2 = v => {
    const validValidity =/^((0[1-9])|(1[0-2]))\/(\d{2})$/g;
    if (validValidity.test(v.target.value)) {
      this.setState({
        validity: v.target.value
      });
    } else {
      this.setState({
        validity: "00/00"
      });
    }
  };

  render() {
    return (
      <div>
        <div className="container">
          <img
            src="https://5.imimg.com/data5/NV/SG/MY-1098796/inkjet-printer-cards-sle4442-small-chip-500x500.jpg "
            className="cardcredit"
          />
          <div className="cardInfo">
            <h1>{this.state.cardNumber}</h1>
            <p>{this.state.validity}</p><span>{this.state.name}</span>
          </div>
        </div>
        <input
          // value={this.state.cardNumber}
          maxlength="19"
          onChange={this.handleChange1}
          placeholder={this.state.cardNumber}
        />
        <input
          maxlength="5"
          onChange={this.handleChange2}
          placeholder={this.state.validity}
        />
        <input
          maxlength="20"
          onChange={this.handleChange}
          placeholder={this.state.name}
        />
      </div>
    );
  }
}
export default CardReader;
