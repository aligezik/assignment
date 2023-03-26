import Button from "./styled/Button"
import NavStyled from "./styled/NavStyled"

const Nav = () => {
  return (
    <NavStyled>
      <div>
        <img src="./images/logo.png" width={"300px"} alt="logo" />
      </div>

      <div>
        <Button color="#AF3A53">Apply Courses</Button>
        <Button bg="#AF3A53">Talk To Adviser</Button>
      </div>
    </NavStyled>
  )
}

export default Nav
