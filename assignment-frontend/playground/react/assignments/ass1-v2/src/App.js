import React from "react";
import {data} from "./helper/data";
import Lesson from "./pages/Lesson";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <div className="container">
          <Lesson lessonData={data} />
        </div>
      </main>
    </div>
  );
}

export default App;
