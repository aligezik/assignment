import Buton from "../buton/Buton";
import "./Card.css";

const Card = ({lang, img, btn}) => {

  return (
    <div>
      <h1 className="title">{lang}</h1>
      <img className="images" src={img} alt="" />
      <Buton btn={btn} />
    </div>
  );
};

export default Card;
