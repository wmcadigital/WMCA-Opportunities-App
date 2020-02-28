import React, { Component } from 'react';
import CategoryTag from '../categoryTag/categoryTag';

class BlogItem extends Component {
    videoIframe() {
        // destructure props
        const { article } = this.props;

        // create const variable to make a new url from the video url string
        const videoUrl = new URL(article.VideoUrl);
        // retrieve pathname from url object
        const videoPath = videoUrl.pathname;
        // retrieve search term if youtube link is taken from the address bar
        // replace the start so we're left with a forward slash
        const videoSearchPath = videoUrl.search.replace('?v=', '/');

        // if the host name of the url is youtube then we want to render our iframe
        // with our youtube attritubes
        if (
            videoUrl.host === 'youtu.be' ||
            videoUrl.host === 'www.youtube.com'
        ) {
            // check if the link is youtu.be, this determines which const variable
            // (set above) we'll use as our src url
            const videoSrc =
                videoUrl.host !== 'youtu.be'
                    ? `https://www.youtube.com/embed${videoSearchPath}`
                    : `https://www.youtube.com/embed${videoPath}`;

            return (
                <div className="iframe-container wdgt">
                    <iframe
                        src={videoSrc}
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title={article.Name}
                        className="pure-u-1"
                    />
                </div>
            );
        }
        // if vimeo, then we want to render with our vimeo settings
        if (videoUrl.host === 'vimeo.com') {
            return (
                <div className="iframe-container wdgt">
                    <iframe
                        src={`https://player.vimeo.com/video${videoPath}`}
                        frameBorder="0"
                        allow="autoplay; fullscreen"
                        allowFullScreen
                        title={article.Name}
                        className="pure-u-1"
                    />
                </div>
            );
        }

        // don't return anything if any of these conditions aren't met
        return null;
    }

    render() {
        // destructure props
        const { article } = this.props;

        // get published date parse the string and set variables for day,
        // month and year to customise date layout
        const parsedDate = Date.parse(article.PubDate);
        const pubDateday = new Intl.DateTimeFormat('en-GB', {
            day: '2-digit'
        }).format(parsedDate);
        const pubDateMonth = new Intl.DateTimeFormat('en-GB', {
            month: 'long'
        }).format(parsedDate);
        const pubDateYear = new Intl.DateTimeFormat('en-GB', {
            year: 'numeric'
        }).format(parsedDate);

        return (
            <>
                <article className="wdgt">
                    <h1>{article.Name}</h1>
                    <p className="text-color-primary">
                        {`${pubDateMonth} ${pubDateday}, ${pubDateYear}`}
                    </p>
                    <div className="wdgt">
                        <CategoryTag blog={article} />
                    </div>
                </article>
            </>
        );
    }
}

export default BlogItem;
