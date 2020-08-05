import React, { FC } from 'react';

const AboutPage: FC = () => {
    return (
        <div className="container">
            <h3>Thanks for visiting this website</h3>
            <p>
                I'm a beginner in web and this website is the best project, I've ever made.
                <br/>
                Also I'm especially fond of front-end and back-end (but right now I'm deeply learn front)
            </p>
            <p>You can find me in these social media:</p>

            <a className="waves-effect waves-light btn blue"
               href="https://vk.com/gloomy.yarki"
               target="_blank"
               rel="noopener noreferrer"
               style={ { marginRight: '20px', width: '60px' } }
            >VK</a>

            <a className="waves-effect waves-light btn blue darken-3"
               target="_blank"
               rel="noopener noreferrer"
               href="https://t.me/young_notherner"
               style={ { marginRight: '20px' } }
            >telegram</a>

            <a className="waves-effect waves-light btn deep-orange lighten-3"
               target="_blank"
               rel="noopener noreferrer"
               href="https://www.instagram.com/overrided/?hl=ru"
               style={ { marginRight: '20px' } }
            >instagram</a>

            <a className="waves-effect waves-light btn black"
               target="_blank"
               href="https://github.com/burevestnik-png"
               rel="noopener noreferrer"
            >Github</a>

        </div>
    );
};

export default AboutPage;
