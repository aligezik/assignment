// import { useState } from "react"

// const MouseEvent = () => {
//   //? let visible = false
//   const [visible, setVisible] = useState(false)
//   const [toggle, setToggle] = useState(false)

//   const [coordX, setCoordX] = useState()
//   const [coordY, setCoordY] = useState()

//   console.log(toggle)

//   const handleDoubleClick = (e) => {
//     setToggle(!toggle)
//     // console.log(toggle) //? State'in guncellenmis degeri burada gorulemeyebilir.Cunku react'da state'ler toplu bir sekilde ve async olarak guncellenir.

//     toggle
//       ? (e.target.className = "bg-success text-light w-50 p-4 my-4")
//       : (e.target.className = "bg-danger text-light w-50 p-4 my-4")
//   }

//   //? mouseMove event
//   const handleMouseMove = (e) => {
//     // setCoordX(e.nativeEvent.offsetX) //! Göreceli
//     // setCoordY(e.nativeEvent.offsetY)
//     setCoordX(e.pageX)
//     setCoordY(e.pageY)
//   }

//   return (
//     <div className="container text-center d-flex flex-column align-items-center mt-4">
//       <h2 className="text-danger">MOUSE EVENTS</h2>

//       <div
//         id="todo-1"
//         className="bg-success text-light w-50 p-4"
//         onMouseOver={() => setVisible(true)}
//         onMouseOut={() => setVisible(false)}
//       >
//         todo item 1
//       </div>

//       {/* Conditional Rendering */}
//       {visible && <div>Mouse Events</div>}

//       <div
//         id="todo-2"
//         className="bg-success text-light w-50 p-4 mt-4"
//         onDoubleClick={handleDoubleClick}
//       >
//         todo item 2
//       </div>

//       <div
//         id="todo-3"
//         className="bg-success text-light w-50 p-4 my-4"
//         onMouseMove={handleMouseMove}
//       >
//         todo item 3
//       </div>

//       <p>X and Y</p>
//       <p className="text-danger fw-bold">
//         {coordX} {coordY}
//       </p>
//     </div>
//   )
// }

// export default MouseEvent

import { useState } from 'react'

const MouseEvent = () => {

    // let visible = false;
    const [visible, setVisible] = useState(false)
    const [visiblee, setVisiblee] = useState(false)
    const [toggle, setToggle] = useState(false)


    const [coordX, setCoordX] = useState()
    const [coordY, setCoordY] = useState()
    
    
    // console.log(toggle);
    const handleDoubleClick = (e) => {
        // alert("Double clicked");
        setToggle(!toggle);
        // console.log(toggle);
        toggle 
            ? (e.target.className ="w-50 bg-danger text-light rounded-5 m-4 p-4")
            : (e.target.className ="w-50 bg-warning rounded-5 m-4 p-4 ")
    }
    const handleMouseMove = (e) => {
        setCoordX(e.nativeEvent.offsetX)
        setCoordY(e.nativeEvent.offsetY)
        // setCoordX(e.pageX)
        // setCoordY(e.pageY)

    }


    return (
        <div className='container text-center d-flex flex-column align-items-center mt-4'>
            <h2 className='text-danger'>MOUSE EVENTS</h2>
            <div id='todo-1' className="bg-success text-light w-50 p-4" onMouseOver={() => { setVisible(true) }} onMouseOut={() => { setVisible(false) }}>Over & Out</div>
            {visible && <div>Mouse Events</div>}

            <div id='todo-2' className="bg-success text-light w-50 p-4 mt-4" onDoubleClick={() => { setVisiblee(false) }} onClick={() => { setVisiblee(true) }}>One & Double Clicks</div>
            {visiblee && <div>Mouse event2</div>}


            <div id='todo-3' className="bg-success text-light w-50 p-4 my-4" onClick={handleDoubleClick}>One click</div>
            {/* {visiblee && <div>Mouse event 3</div>} */}
            
            <div id='todo-4' className="bg-success text-light w-50 p-4 my-4" onMouseMove={handleMouseMove}>On Mouse Move</div>
            
            <p>X and Y</p>
            <p className="text-danger fw-bold">{coordX} {coordY}</p>

            <h6 className='w-40 bg-warning text-black p-3 rounded-3'>Bilge Panter</h6>
        </div>
    )
}

export default MouseEvent