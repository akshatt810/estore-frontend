import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class HomePage extends Component {
  render() {
    return (
      <>
          <div className="container">
          <div className="gallery main-gallery">
              <Link to={process.env.PUBLIC_URL + "/laptops"} className="tile img1">
                  <div className="tile-content">
                      laptops
                  </div>
              </Link>
              <Link to={process.env.PUBLIC_URL + "/screens"} className="tile img2">
                  <div className="tile-content">
                      displays
                  </div>
              </Link>
              <Link to={process.env.PUBLIC_URL + "/smartphones"} className="tile img3">
                  <div className="tile-content">
                      smartphones
                  </div>
              </Link>
              <Link to={process.env.PUBLIC_URL + "/tablets"} className="tile img4">
                  <div className="tile-content">
                      tablets
                  </div>
              </Link>
          </div>
          </div>
      </>
    );
  }
}
