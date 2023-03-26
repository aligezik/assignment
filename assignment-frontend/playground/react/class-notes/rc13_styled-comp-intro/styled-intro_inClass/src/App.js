import { Button, FS13Button } from "./components/Buton.styled"
import HeaderText from "./components/HeaderText"
import Links from "./components/Links"
import Sarmal from "./components/Sarmal"

const App = () => {
  return (
    <>
      <Sarmal bg="#bebe">
        <HeaderText renk="hotpink">Styled Components </HeaderText>
        <HeaderText renk="#734586" bgRenk="#eee">
          Styled Components
        </HeaderText>
        <Button>Send</Button>
        <Button primary>Send</Button>
        <FS13Button react>CALIS</FS13Button>
        <FS13Button>DINLEN</FS13Button>
      </Sarmal>
      <Sarmal>
        <Links href="https://www.clarusway.com" target="_blank">
          Clarusway Web Site
        </Links>

        <Links small href="https://www.reactjs.org" target="_blank">
          ReactJS
        </Links>

        <Links small href="https://www.npmjs.org" target="_blank">
          NPM
        </Links>
      </Sarmal>
    </>
  )
}

export default App
