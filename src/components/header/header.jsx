import React, { Component } from "react";

class Header extends Component {
  pageTitle() {
    const { match } = this.props;

    if (match.params.category !== undefined) {
      // pull title name from category param and hold as a const variable
      const title = match.params.category.toString();

      // take all non-whitespace characters at the beginning of a string
      // or after any whitespace and uppercase them
      return <h1>{title.replace(/(?:^|\s)\S/g, t => t.toUpperCase())}</h1>;
    }
    return <h1>Find an opportunity</h1>;
  }

  render() {
    return (
      <>
        <div
          className="wdgt-page-hero text-center"
          style={{
            backgroundImage:
              "url(http://static.centro.org.uk/wmcaRedev/build/img/Peoples-stories-hero.jpg)"
          }}
        >
          <div className="splash">{this.pageTitle()}</div>
          <div className="wdgt-page-hero-overlay" />
        </div>
      </>
    );
  }
}

export default Header;
