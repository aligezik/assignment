import { useState } from "react"
import LifeCycleMethods from "./components/LifeCycleMethods"
import UseEffectHook from "./components/UseEffectHook"
import User from "./components/User"

function App() {
  // const [toggle, setToggle] = useState(false)
  const [toggle, setToggle] = useState(false)

  return (
    <div className="container text-center mt-4">
      {/* <button className="btn btn-danger" onClick={() => setToggle(!toggle)}>
        {toggle ? "Hide" : "Show"}
      </button> */}

      {/* {toggle ? <LifeCycleMethods /> : null} */}
      {/* {toggle && <LifeCycleMethods />} */}

      {/* {toggle && <UseEffectHook />} */}
      <button className="btn btn-warning"  onClick={ () => setToggle(!toggle)}>{toggle ? 'Hide' : 'Show'}</button>
      {toggle ? <LifeCycleMethods/> : null}
      {/* <LifeCycleMethods/> */}
      {/* <User /> */}
    </div>
  )
}

export default App
