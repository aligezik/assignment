import Button from "./styled/Button"
import Flex from "./styled/Flex"
import Image from "./styled/Image"

const Header = () => {
  return (
    <Flex>
      <div>
        <h1>The IT Career of Your Dreams Starts Here!</h1>
        <p>
          Clarusway is a leading international software Bootcamp. Join a micro
          class online with other trainees and learn coding skills with a
          highly-skilled instructor.
        </p>
        <Button bg="#AF3A53">Start your New Carier</Button>
      </div>

      <Image src="./images/hero.jpg" />
    </Flex>
  )
}

export default Header
