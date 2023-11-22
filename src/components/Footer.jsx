import instagram from '../assets/images/instagram-social.png';
import twitter from '../assets/images/twitter-social.png';
import youtube from '../assets/images/youtube-social.png';
import linkedin from '../assets/images/linkedin-social.png';
import github from '../assets/images/github-social.png';

//Start of Footer component
export default function Nav({ links }) {
    return (
        <>
            {/* <!--Start of the CONTACT:SOCIAL MEDIA Sub-Section--> */}
            <div className="social-media-group">
                <li><a href="https://www.instagram.com/"><img className = "social-media-icons" src = {instagram} alt="an icon representing Instagram"/></a></li>
                <li><a href="https://www.twitter.com/"><img className = "social-media-icons" src = {twitter} alt="an icon representing Twitter"/></a></li>
                <li><a href="https://www.youtube.com/channel/UCIAmyQl-oYA_gvgSA4AQtOA"><img className = "social-media-icons" src = {youtube} alt="an icon representing YouTube"/></a></li>
                <li><a href="https://www.linkedin.com/in/anthony-iacano/"><img className = "social-media-icons" src = {linkedin} alt="an icon representing Linkedin"/></a></li>
                <li><a href="https://github.com/Anthony-GG/"><img className = "social-media-icons" src = {github} alt="an icon representing GitHub"/></a></li>
            </div>

            <footer>
                <p> Anthony Iacano 2023</p>
            </footer>
        </>
    );
  }