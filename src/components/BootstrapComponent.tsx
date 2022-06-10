import { FormEvent, useState } from 'react'
import { Alert, Button, Form } from 'react-bootstrap'

const BootstrapComponent = () => {
  const [name, setName] = useState('')
  const [age, setAge] = useState(0)

  const handleSubmit = (e: FormEvent) => {
    // e is there! but TS is not capable of automatically pass
    // to my function the right type!
    e.preventDefault()
    console.log(name, age)
  }

  return (
    <div>
      <Alert variant="danger">DANGER!!</Alert>
      <Button disabled={true}>CLICK ME</Button>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Your name</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Your age</Form.Label>
          <Form.Control
            type="number"
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
            // using Number to convert the value of the input field to a number
            // before assigning it to the age state variable
          />
        </Form.Group>
        <Button type="submit">SUBMIT</Button>
      </Form>
    </div>
  )
}

export default BootstrapComponent
