import '../styles/aboutMe.css';

export default function AboutMe() {
  return (
    <>
      <div className="text">
        <h2><img src="/images/about-me.svg" loading="lazy" alt="general person icon to represent the person" className="title_img"/>A little about me</h2>

        <div className="parragraphs">
          <p className="about_description">Hi! I'm Mauricio Pimienta, a Computer Engineering student and passionate about technology and constant learning. I enjoy exploring new ideas and expanding my knowledge in different fields.
          </p>
          <p className="about_description">Beyond computing, I'm interested in music, history, and anything that sparks my curiosity. In my free time, I love reading, playing video games, and discovering new ways to keep growing personally and professionally.
          </p>
        </div>
            
      </div>

      <div className="self_container"><img src="images/other_self.webp" loading="lazy" alt="second image of Mauricio" id="other_self"/></div>
  
    </>
            
  );

}