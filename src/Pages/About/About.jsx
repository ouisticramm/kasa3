import ABanner from "../../components/Banner/Banner";
import CollapseA from "../../components/CollapseA/CollapseA";
import aproposData from "../../Data/AboutCollapse.json";
import "../../assets/sass/Pages/About.scss";
import { aboutBanner } from "../../Data/BannerData";

function About() {
  return (
    <>
      <ABanner {...aboutBanner} />
      <div className="about_container">
        {aproposData.map((item) => (
          <CollapseA
            key={item.id}
            title={item.titre}
            content={item.description}
          />
        ))}
      </div>
    </>
  );
}

export default About;
