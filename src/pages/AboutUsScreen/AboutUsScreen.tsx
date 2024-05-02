import React, { useState, useEffect, FC } from "react";
import "./AboutUsScreen.Styles.css";
import founderImage from "../../assets/images/aboutus.jpg";
import additionalImage from "../../assets/images/appdownload.jpg";
import QRImage from "../../assets/images/QRCode.png";

const AboutUs: FC = () => {
  const [visitorCount, setVisitorCount] = useState<number>(3457852452);
  useEffect(() => {
    const interval = setInterval(() => {
      setVisitorCount((prevCount) => prevCount + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="aboutUs">
      <header className="aboutHeader">
        <img src={founderImage} alt="Founder" className="founderImage" />
      </header>
      <section className="aboutContent">
        <h1 className="aboutHeaderText" style={{ fontWeight: "bold" }}>
          LebNow
        </h1>
        <div>
          <div>
            LebNow, founded in 2024, stands as a beacon of integrity and
            reliability in the ever-evolving landscape of digital news media.
            With a steadfast commitment to delivering the latest developments
            from around the world, LebNow serves as a trusted source for those
            seeking timely, accurate, and comprehensive coverage.
          </div>
          <div>
            At the heart of LebNow's operations lies a diverse and dedicated
            team of journalists and contributors. Spanning across continents,
            this global network ensures that LebNow provides a multifaceted
            perspective on international events. By leveraging the expertise and
            insights of professionals hailing from various cultural, social, and
            political backgrounds, LebNow offers a nuanced understanding of
            global affairs.
          </div>
          <div>
            LebNow is more than just a news app, it's a daily window to the
            world. Through immersive storytelling, insightful analysis, and
            engaging multimedia content, LebNow fosters a sense of connection
            and understanding among its audience. Whether it's breaking news,
            in-depth features, or thought-provoking opinion pieces, LebNow
            empowers individuals to stay informed, inspired, and engaged with
            the world around them.
          </div>
          <div>
            Join LebNow on its journey to enlighten and inform. Together, let's
            navigate the complexities of our interconnected world and uncover
            the stories that shape our shared human experience.
          </div>
        </div>
      </section>
      <div className="additionalText" style={{ fontWeight: "bold" }}>
        GET APP
      </div>
      <div className="additionalContent">
        <img src={QRImage} alt="QRImage" className="QRImage" />
      </div>
      <div className="additionalContent">
        <img
          src={additionalImage}
          alt="Additional"
          className="additionalImage"
        />
      </div>

      <footer className="aboutFooter">
        <div>Our Website Visitors : {visitorCount.toLocaleString()}</div>
      </footer>
    </div>
  );
};

export default AboutUs;
