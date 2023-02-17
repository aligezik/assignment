import Buton from "../buton/Buton";
import "./Card.css";

const Card = ({ lang, img, btn }) => {
  return (
    <div>
      <h2>ALL ABOUT SKILLS</h2>
      <ol className="cards">
        <h4 className="title">{lang}</h4>
        <img className="images" src={img} alt="" />
        <Buton btn={btn} />
      </ol>
    </div>
  );
};

export default Card;
