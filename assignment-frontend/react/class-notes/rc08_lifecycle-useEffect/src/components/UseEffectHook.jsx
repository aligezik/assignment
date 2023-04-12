import React, { useEffect, useState } from "react";

// //?===============================================
// //?                USEEFFECT HOOK
// //?===============================================
// //! UseEffect Hook'u fonksiyonel componenler'te yan etkileri
// //! (side effect) gerceklestirmek icin kullanilir.
// //! componentDidMount,componentDidUpdate,ve componentWillUnmount
// //! metotlarinin bir birlesimi gibi dusunulebilir.

// //TODO useEffect(() => {
// //*   /* ComponentDidMount code */
// //*      Kodlar
// //! }, []);

// //TODO useEffect(() => {
// //*   */ ComponentDidMount + componentDidUpdate code */
// //! }, [state1, state2]);

// //TODO useEffect(() => {
// //?   /* ComponentDidMount code */
// //!   return () => {
// //*     //* componentWillUnmount code */
// //!   };
// //! }, []);

// //TODO useEffect(() => {
// //*   //* componentDidMount code + componentDidUpdate code */

// //!   return () => {
// //*     //* componentWillUnmount code */
// //!   };
// //! }, [state1, state2]); //? Dependency Array


// const UseEffectHook = () => {
//     const [count, setCount] = useState(0)

//     useEffect(() => {
//        console.log('component did mount');
//        setTimeout(() => 
//         alert("veriler cekilmistir"),1000
//        )}, [])
    
const UseEffectHook = () => {
    const [count, setCount] = useState(0)

    const fetchData = () =>{
        console.log("2-data fetching");
    }

    useEffect(() => {
        console.log("3-Mounting");
        const timer = setInterval(fetchData,1000)

        return()=>{
            clearInterval(timer)
            console.log("Unmounting");
        }
    }, [])
    



    console.log("1-render");
    return(
    <div>
        <h1 className="text-danger">LIFECYCLE METHODS</h1>
        <h3>COUNT={count}</h3>
        <button className="btn btn-info" onClick={()=> setCount(count+1)}>
          INC
        </button>
    </div>
    )

    




  //   const [count, setCount] = useState(0)

  //   //   useEffect(() => {
  //   //     //! fetch, async-await ,localStorage, setTimeout, setInterval();
  //   //     console.log("componentDidMount")
  //   //     setTimeout(() => alert("Data Fetched"), 1000)
  //   //   }, []) //? Dependecy array bos

  //   //   useEffect(() => {
  //   //     console.log("componentDidMount + componenentDidUpdate")
  //   //     setTimeout(() => alert("Data Fetched"), 1000)
  //   //   }, [count]) //? Dependecy array = count state

  //   const fetchData = () => {
  //     console.log("Data Fetching")
  //   }

  //   useEffect(() => {
  //     console.log("Mounting")
  //     const timer = setInterval(fetchData, 1000)
  //     return () => {
  //       clearInterval(timer)
  //       console.log("Unmounting")
  //     }
  //   }, [])

  //   console.log("Rendering")

//   return (
//     <div className="container text-center">
//       <h1 className="text-danger">LIFECYCLE METHODS</h1>
//       <h3>COUNT={count}</h3>
//       <button className="btn btn-info" onClick={() => setCount(count + 1)}>
//         INC
//       </button>
//     </div>
//   );
};

export default UseEffectHook;
