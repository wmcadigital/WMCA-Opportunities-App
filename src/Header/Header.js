import React, { Component } from "react";

class Header extends Component {


    render() {
        return (
            <div>
                <div
                    className="wdgt-page-hero text-center"
                    style={{
                        backgroundImage:
                            "url(http://static.centro.org.uk/wmcaRedev/build/img/Peoples-stories-hero.jpg)"
                    }}
                >
                    <div className="splash">
                        <h1>Find an opportunity</h1>
                    </div>
                    <div className="wdgt-page-hero-overlay" />
                </div>
            </div>
            
        );
    }
}

export default Header;
