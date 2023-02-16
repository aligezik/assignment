import Msg from "./Msg"

const Person = ({name, tel, img}) => {
    // console.log(props);
    // const {name, tel, img} = props;
  return(
  <div style={{textAlign: "center"}}>
    {/* <h2 style={{}}>Hi, My Name is {name}</h2> */}
    <Msg name={name}/>
    <img style={{minWidth:"30vw"}} src={img} alt="" />
    <p>Tel: {tel}</p>
  </div>
)}

export default Person