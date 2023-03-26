import StyledCard from "./styled/CardStyles"
import Image from "./styled/Image"

const Card = ({ id, title, body, image }) => {

  return (
    <StyledCard odd={id % 2 && "row-reverse"}>
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
      <div>
        <Image src={`./images/${image}`} />
      </div>
    </StyledCard>
  )
}

export default Card
