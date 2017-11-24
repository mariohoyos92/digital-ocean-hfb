import React, { Component } from "react";

// IMPORT MODULES
import Divider from "material-ui/Divider";
import Paper from "material-ui/Paper";
import axios from "axios";

// IMPORT COMPONENTS
import Header from "../Header/Header";
import MusicStore from "../MusicStore/MusicStore";

// IMPORT CSS
import "./Home.css";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playlist: []
    };
  }

  componentDidMount() {
    axios.get("/api/beats").then(response => {
      let playlist = [];
      response.data.forEach(element => {
        playlist.push({
          url: element.url,
          artist: [element.artist],
          cover: element.cover,
          title: element.title
        });
      });
      this.setState({ playlist: playlist }, () => console.log(this.state));
    });
    axios.get("api/cart").then(response => {
      this.setState({ cart: response.data.tracks });
    });
  }

  // RENDER
  render() {
    return (
      <div>
        <Header />
        <div className="splash">
          <div className="splash-logo">
            <img
              className="logo"
              src="https://s3.us-east-2.amazonaws.com/hassle-free-beats-untagged-audio/HassleFreeBeats.png"
              alt="logo"
            />
          </div>
        </div>
        {
          //  <MusicPlayer
          //   playlist={
          //     this.state.playlist.length > 0
          //       ? this.state.playlist
          //       : [
          //           {
          //             id: 1,
          //             url: `https://s3.us-east-2.amazonaws.com/hassle-free-beats-untagged-audio/LANDR-Say+You+Want+Me+take+3.mp3`,
          //             cover: `https://s3.us-east-2.amazonaws.com/hassle-free-beats-untagged-audio/header-logo.png`,
          //             title: "Say You Want Me",
          //             artist: ["Mario, an Organism", "Liz Ancel"]
          //           }
          //         ]
          //   }
          //   progressColor={"#96031a"}
          // />
          // <RaisedButton
          //   primary={true}
          //   labelColor={"#fbfffe"}
          //   label={"Add To Cart"}
          //   onClick={() => this.handleAddToCart()}
          // />{" "}
          // <Link to="/checkout">
          //   <RaisedButton
          //     primary={true}
          //     labelColor={"#fbfffe"}
          //     label={"CHECKOUT"}
          //   />
          // </Link>
          // <Cart cart={this.state.cart} />
        }
        <div className="music-store">
          <MusicStore
            playlist={
              this.state.playlist.length > 0
                ? this.state.playlist
                : [
                    {
                      id: 1,
                      url: `https://s3.us-east-2.amazonaws.com/hassle-free-beats-untagged-audio/LANDR-Say+You+Want+Me+take+3.mp3`,
                      cover: `https://s3.us-east-2.amazonaws.com/hassle-free-beats-untagged-audio/header-logo.png`,
                      title: "Say You Want Me",
                      artist: ["Mario, an Organism", "Liz Ancel"]
                    }
                  ]
            }
          />
          <p className="vocal-tag-disclaimer">
            **Vocal Tags Are Removed Automatically Upon Purchase**
          </p>
        </div>
        <div className="licensing-card-container">
          <Paper
            style={{
              height: "auto",
              width: "60%",
              margin: "20",
              textAlign: "center",
              zIndex: "5",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center"
            }}
            zDepth={5}
          >
            <h1 className="license-header">Hassle-Free-License</h1>
            <Divider className="license-divide" />
            <p>Mp3 (320 kbps)</p>
            <Divider className="license-divide" />
            <p>100% Royalty-Free</p>
            <Divider className="license-divide" />
            <p>No Restrictions on Youtube use</p>
            <Divider className="license-divide" />
            <p>No Expiration Date</p>
            <Divider className="license-divide" />
            <p>No Exclusive Rights</p>
            <Divider className="license-divide" />
            <p>UNLIMITED Radio Spins</p>
            <Divider className="license-divide" />
            <p>UNLIMITED Total Earnings Allowed</p>
            <Divider className="license-divide" />
            <p>INSTANT Download</p>
            <Divider className="license-divide" />
            <p />
          </Paper>
        </div>
        <div className="bottom-portion info">
          <p className="brief-information">
            Here at Hassle-Free-Beats we are focused on one thing: Maximizing
            YOUR earning potential. Other beat-stores try to trick you with
            multiple licenses, which are all designed for their profit and not
            yours. Here, we only have one license and it is as flexible for you
            as it is for us. We removed all of the limitations associated with
            profitable use and exposure so that YOU can differentiate yourself
            from the competition and earn as much money as possible. We also
            only have one price-level, which is a VERY reasonable $10. Our
            competitors will have you paying upwards of $50 dollars for a much
            more restrictive license. We leave the power in YOUR hands by
            offering low-cost, high-quality instrumentals where all you ever pay
            is for the upfront download.{" "}
          </p>
        </div>
        <div className="faq-contact bottom-portion">
          <span>
            If you have ANY questions at all check out our FAQ or EMAIL US
          </span>
        </div>
      </div>
    );
  }
}
// MAPSTATE TO PROPS FOR REDUX
// function mapStateToProps(state){
//     return state
// }

// EXPORT COMPONENT
export default Home;
// REDUX
// export default connect(mapStateToProps, outputActions)();
