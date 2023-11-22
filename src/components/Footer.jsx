//Start of Footer component
export default function Nav({ links }) {
    return (
        <>
            {/* <!--Start of the CONTACT:SOCIAL MEDIA Sub-Section--> */}
            <ui class="social-media-group">
                <li><a href="https://www.instagram.com/"><img class = "social-media-icons" src = "../src/assets/images/instagram-social.png" alt="an icon representing Instagram"/></a></li>
                <li><a href="https://www.twitter.com/"><img class = "social-media-icons" src = "../src/assets/images/twitter-social.png" alt="an icon representing Twitter"/></a></li>
                <li><a href="https://www.youtube.com/channel/UCIAmyQl-oYA_gvgSA4AQtOA"><img class = "social-media-icons" src = "../src/assets/images/youtube-social.png" alt="an icon representing YouTube"/></a></li>
                <li><a href="https://www.linkedin.com/in/anthony-iacano/"><img class = "social-media-icons" src = "../src/assets/images/linkedin-social.png" alt="an icon representing Linkedin"/></a></li>
                <li><a href="https://github.com/Anthony-GG/"><img class = "social-media-icons" src = "../src/assets/images/github-social.png" alt="an icon representing GitHub"/></a></li>
            </ui>

            <footer>
                <p> Anthony Iacano 2023</p>
            </footer>
        </>
    );
  }