// import axios from "axios"
// import { useEffect, useState } from "react"
import AddTutorial from "../components/AddTutorial"
import TutorialList from "../components/TutorialList"
import axios from "axios"

// const [tutorials, setTutorials] = useState([])

// const BASE_URL = "https://tutorial-api.fullstack.clarusway.com/tutorials/"

  // const getTutorials = async () => {
  //   try {
  //     const { data } = await axios(BASE_URL)
  //     setTutorials(data)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  // console.log(tutorials)
  //? componentDidMount
  // useEffect(() => {
  //   getTutorials()
  // }, [])
  const Home = () => {

 const BASE_URL = "https://tutorial-api.fullstack.clarusway.com/tutorials/"

  const getTutorials = async () => {
    
    const { data } = await axios(BASE_URL)
    console.log(data);
  }
  getTutorials()

  return (
    <>
      <AddTutorial/>
      {/* <AddTutorial getTutorials={getTutorials} /> */}
      <TutorialList data={data}/>
      {/* <TutorialList tutorials={tutorials} getTutorials={getTutorials} /> */}
    </>
  )
}

export default Home
