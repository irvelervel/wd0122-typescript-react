import { ButtonGroup, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Navigation = () => {
  const navigate = useNavigate()

  return (
    <ButtonGroup aria-label="Basic example" className="mt-5">
      <Button
        variant="secondary"
        onClick={() => {
          navigate('/')
        }}
      >
        /
      </Button>
      <Button
        variant="secondary"
        onClick={() => {
          navigate('/class')
        }}
      >
        /class
      </Button>
      <Button
        variant="secondary"
        onClick={() => {
          navigate('/function')
        }}
      >
        /function
      </Button>
      <Button
        variant="secondary"
        onClick={() => {
          navigate('/fetch')
        }}
      >
        /fetch
      </Button>
    </ButtonGroup>
  )
}

export default Navigation
