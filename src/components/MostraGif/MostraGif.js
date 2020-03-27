import React, { Component } from "react";

export default class MostraGif extends Component {
  state = {
    exibeGif: Boolean
  };

  mostraGif = () => {
    this.setState({ exibeGif: true });
  };

  escondeGif = () => {
    this.setState({ exibeGif: false });
  };

  render() {
    return (
      <div>
        <button onClick={this.mostraGif}>Mostrar Gif</button>
        {this.state.exibeGif == true && (
          <img
            src="https://img.buzzfeed.com/buzzfeed-static/static/2015-11/2/11/enhanced/webdr09/anigif_enhanced-21208-1446481436-2.gif"
            alt="Gif"
            onClick={this.escondeGif}
          />
        )}
      </div>
    );
  }
}
