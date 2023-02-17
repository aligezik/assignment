import Card from "./components/card/Card";
import data from "./utils/data";

function App() {
  console.log(data);
  return (
    <>
      {data.map(({ language, id, img, btnName }) => (
        <Card key={id} lang={language} img={img} btn={btnName} />
      ))}
    </>
  );
}

export default App;