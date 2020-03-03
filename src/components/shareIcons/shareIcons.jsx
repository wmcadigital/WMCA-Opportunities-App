/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const ShareIcons = props => {
  const { shareTitle } = props;
  return (
    <div className="pure-menu pure-menu-horizontal wdgt-share-this wdgt">
      <h3>{shareTitle}</h3>

      <ul className="pure-menu-list icons">
        <li className="pure-menu-item">
          <a
            data-network="facebook"
            className="st-custom-button"
            title="Share of Facebook"
          >
            <span className="fa-stack fa-lg">
              <i className="fab fa-facebook-f fa-stack-1x" title="Share of Facebook" />
              <i>
                <svg
                  version="1.1"
                  id="fb"
                  xmlns="http://www.w3.org/2000/svg"
                  width="59px"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 53.1 48.4"
                  enableBackground="new 0 0 53.1 48.4"
                  xmlSpace="preserve"
                >
                  <path
                    id="fb_path"
                    fill="none"
                    stroke="#FE811B"
                    strokeWidth="2"
                    d="M51.7,22.4L44.5,3.1C44,1.9,42.8,1,41.5,1H11.6
	c-1.3,0-2.5,0.9-3,2.1L1.4,22.4C1,23.6,1,24.8,1.4,26l7.2,19.3c0.5,1.2,1.7,2,3,2.1h29.9c1.3,0,2.5-0.9,3-2.1L51.8,26
	C52.1,24.8,52.1,23.6,51.7,22.4"
                  />
                </svg>
              </i>
            </span>
          </a>
        </li>
        <li className="pure-menu-item">
          <a data-network="twitter" className="st-custom-button" title="Share of Twitter">
            <span className="fa-stack fa-lg">
              <i className="fab fa-twitter fa-stack-1x" title="Share of Twitter" />
              <i>
                <svg
                  version="1.1"
                  id="fb"
                  xmlns="http://www.w3.org/2000/svg"
                  width="59px"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 53.1 48.4"
                  enableBackground="new 0 0 53.1 48.4"
                  xmlSpace="preserve"
                >
                  <path
                    id="fb_path"
                    fill="none"
                    stroke="#FE811B"
                    strokeWidth="2"
                    d="M51.7,22.4L44.5,3.1C44,1.9,42.8,1,41.5,1H11.6
	c-1.3,0-2.5,0.9-3,2.1L1.4,22.4C1,23.6,1,24.8,1.4,26l7.2,19.3c0.5,1.2,1.7,2,3,2.1h29.9c1.3,0,2.5-0.9,3-2.1L51.8,26
	C52.1,24.8,52.1,23.6,51.7,22.4"
                  />
                </svg>
              </i>
            </span>
          </a>
        </li>
        <li className="pure-menu-item">
          <a
            data-network="linkedin"
            className="st-custom-button"
            title="Share of linkedin"
          >
            <span className="fa-stack fa-lg">
              <i className="fab fa-linkedin-in fa-stack-1x" title="Share of linkedin" />
              <i>
                <svg
                  version="1.1"
                  id="fb"
                  xmlns="http://www.w3.org/2000/svg"
                  width="59px"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 53.1 48.4"
                  enableBackground="new 0 0 53.1 48.4"
                  xmlSpace="preserve"
                >
                  <path
                    id="fb_path"
                    fill="none"
                    stroke="#FE811B"
                    strokeWidth="2"
                    d="M51.7,22.4L44.5,3.1C44,1.9,42.8,1,41.5,1H11.6
	c-1.3,0-2.5,0.9-3,2.1L1.4,22.4C1,23.6,1,24.8,1.4,26l7.2,19.3c0.5,1.2,1.7,2,3,2.1h29.9c1.3,0,2.5-0.9,3-2.1L51.8,26
	C52.1,24.8,52.1,23.6,51.7,22.4"
                  />
                </svg>
              </i>
            </span>
          </a>
        </li>
        <li className="pure-menu-item">
          <a data-network="email" className="st-custom-button" title="Email page">
            <span className="fa-stack fa-lg">
              <i className="fal fa-envelope-open-text fa-stack-1x" title="Email page" />
              <i>
                <svg
                  version="1.1"
                  id="fb"
                  xmlns="http://www.w3.org/2000/svg"
                  width="59px"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 53.1 48.4"
                  enableBackground="new 0 0 53.1 48.4"
                  xmlSpace="preserve"
                >
                  <path
                    id="fb_path"
                    fill="none"
                    stroke="#FE811B"
                    strokeWidth="2"
                    d="M51.7,22.4L44.5,3.1C44,1.9,42.8,1,41.5,1H11.6
	c-1.3,0-2.5,0.9-3,2.1L1.4,22.4C1,23.6,1,24.8,1.4,26l7.2,19.3c0.5,1.2,1.7,2,3,2.1h29.9c1.3,0,2.5-0.9,3-2.1L51.8,26
	C52.1,24.8,52.1,23.6,51.7,22.4"
                  />
                </svg>
              </i>
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ShareIcons;
