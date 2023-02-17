import Card from "./components/card/Card";
import Header from "./components/header/Header";
import data from "./utils/data";
import "./index.css";

function App() {
  console.log(data);
  return (
    <>
      <Header />
      {data.map(({ language, id, img, btnName }) => (
        <Card key={id} lang={language} img={img} btn={btnName} />
      ))}
      <Skills />
      {/* importlanacak */}
    </>
  );
}

export default App;