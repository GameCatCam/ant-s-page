// <!--Start of the Portfolio Page-->
export default function Portfolio() {
    return (
      <>
        <section className="work" id="work">
          <h2>PROJECTS</h2>
          <div className="projects">
            {/* First Row */}
            <div className="project-row">
              <figure>
                <a href="https://anthony-gg.github.io/portfolio-webpage/">
                  <img src="src\assets\images\portfolio\portfolio-project.png" alt="a screenshot of the website you are currently on taken via site-shot on 11/21/2023" />
                </a>
                <figcaption>PORTFOLIO</figcaption>
                <a href="https://github.com/Anthony-GG/react-portfolio-webpage"><img style={{ width: '5%' }} class = "social-media-icons" src = "../src/assets/images/github-social.png" alt="an icon representing GitHub"/></a>
              </figure>
  
              <figure>
                <a href="https://www.youtube.com/watch?v=SHf8bZjRpYc">
                  <img src="src\assets\images\portfolio\mongo-social-media-api-GET-final.png" alt="A screenshot of the Social Media API webpage" />
                </a>
                <figcaption>MONGO DB SOCIAL MEDIA API</figcaption>
                <a href="https://github.com/Anthony-GG/mongo-social-media-api"><img style={{ width: '5%' }} class = "social-media-icons" src = "../src/assets/images/github-social.png" alt="an icon representing GitHub"/></a>
              </figure>
  
              <figure>
                <a href="https://anthony-gg.github.io/event-forecaster/">
                  <img src="src\assets\images\portfolio\event-forecaster-main-final.png" alt="A screenshot of the Event Forecaster webpage" />
                </a>
                <figcaption>EVENT FORECASTER</figcaption>
                <a href="https://github.com/Anthony-GG/event-forecaster"><img style={{ width: '5%' }} class = "social-media-icons" src = "../src/assets/images/github-social.png" alt="an icon representing GitHub"/></a>
              </figure>
            </div>
  
            {/* Second Row */}
            <div className="project-row">
              <figure>
                <a href="https://heroku.vayneglory.com/">
                  <img src="src\assets\images\portfolio\full-note-registry-final.png" alt="A screenshot of the Note Registry webpage" />
                </a>
                <figcaption>NOTE REGISTRY</figcaption>
                <a href="https://github.com/Anthony-GG/note-registry"><img style={{ width: '5%' }} class = "social-media-icons" src = "../src/assets/images/github-social.png" alt="an icon representing GitHub"/></a>
              </figure>
  
              <figure>
                <a href="https://anthony-gg.github.io/programming-quiz/">
                  <img src="src\assets\images\portfolio\programming-quiz-final.png" alt="A screenshot of the Programming Quiz webpage" />
                </a>
                <figcaption>PROGRAMMING QUIZ</figcaption>
                <a href="https://github.com/Anthony-GG/programming-quiz"><img style={{ width: '5%' }} class = "social-media-icons" src = "../src/assets/images/github-social.png" alt="an icon representing GitHub"/></a>
              </figure>
  
              <figure>
                <a href="https://github.com/Anthony-GG/dice-detection-application">
                  <img src="src\assets\images\portfolio\heeho-project-final.png" alt="A picture labeled 'Coming Soon' with a teaser for an upcoming project! Hee-Ho!" />
                </a>
                <figcaption>COMING SOON</figcaption>
                <a href="https://github.com/Anthony-GG/dice-detection-application"><img style={{ width: '5%' }} class = "social-media-icons" src = "../src/assets/images/github-social.png" alt="an icon representing GitHub"/></a>
              </figure>
            </div>
          </div>
        </section>
      </>
    );
  }
  
