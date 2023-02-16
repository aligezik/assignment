import Person from "./components/Person";
import data from "./data";

function App() {
  return (
    <div>
      {data.map(({name, img, tel}) => (
        <Person name={name} img={img} tel={tel} />
      ))}
    </div>
  );
}

export default App;

{
  /* <Person 
      name="Iron Punch"
      img="https://cdn.pixabay.com/photo/2012/11/28/11/11/football-67701__340.jpg"
      tel="+41 167 929 29 29"
      />
      <Person 
      name="Speedy Gonzales"
      img="https://cdn.pixabay.com/photo/2016/03/26/22/47/motion-blur-1281675__340.jpg"
      tel="+42 345634563"
      />
      <Person 
      name="Ambiton Girl"
      img="https://cdn.pixabay.com/photo/2022/06/24/22/57/racket-7282577__340.jpg"
      tel="+43 654373422"
      /> */
}
