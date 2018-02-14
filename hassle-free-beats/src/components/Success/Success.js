import React, { Component } from "react";
import ReactPixel from "react-facebook-pixel";

// IMPORT MODULES
import axios from "axios";

// IMPORT COMPONENTS

// IMPORT CSS
import "./Success.css";

import { pixelId } from "../../config";
ReactPixel.init(pixelId);
class Success extends Component {
  constructor(props) {
    super(props);
    this.state = {
      purchases: []
    };
  }
  // LIFESTYLE FUNCTIONS
  componentDidMount() {
    axios
      .get("/api/purchases")
      .then(response => {
        console.log(response);
        this.setState({ purchases: response.data }, () =>
          ReactPixel.trackCustom("beats-purchased", {
            purchasedBeats: response.data
          })
        );
      })
      .catch(console.log);
  }

  // CUSTOM FUNCS

  // RENDER
  render() {
    const purchaseLinks = this.state.purchases.map(track => (
      <div key={track.title}>
        <a className="download-link" href={track.url} download>
          {track.title}
        </a>
      </div>
    ));
    return (
      <div className="success-container">
        <h1 className="thank-you">THANK YOU!</h1>
        <h2>
          Please click the links below (or check your email) to download your
          beats!
        </h2>
        <div>{purchaseLinks}</div>
        <br />
        <br />
        <p style={{ textDecoration: "underline" }}>
          {" "}
          ** Unless you logged in before purchase you will not have access to
          these links again, please download them NOW or wait for them to show
          up in your inbox (check your spam folder) **
        </p>
      </div>
    );
  }
}

export default Success;
