import "../styles/About.css";

// About component to display profile picture and introduction
function About() {
  return (
    <div class="background">
      <div className="image-container">
        <img
          // change this to change image
          src="/portfolio/headshot.jpeg"
          alt="Avani Vaishnav"
          className="profile-pic"
        />
      </div>
      <div class="cont">
        <h1 class="name">
          Hey! I'm Avani
          {/* <img
            src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif"
            alt="gif of waving hand emoji"
            width="45px"
            frameBorder="0"
            class="giphy-embed"
          /> */}
        </h1>
        <p>
          An engineer focused on cloud, data and building pipelines that don't
          break at 2 AM. Currently helping <strong>Philips</strong> design
          scalable cloud systems for real-world healthcare solutions.
        </p>
        {/* <h1 class="name">CLOUD ENGINEER</h1> */}
        {/* <blockquote class="quote-intro">
          <p>
            A passionate Data Scientist with a Master's degree in Computer
            Engineering from New York University. With a proven track record in
            developing data-driven solutions, I thrive in environments that
            challenge my analytical and technical skills.
          </p>
          <p></p>
        </blockquote> */}
      </div>
    </div>
  );
}

export default About;
