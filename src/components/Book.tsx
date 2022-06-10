import { Card } from 'react-bootstrap'
import IBook from '../typings/Book'

interface BookProps {
  book: IBook
}

const Book = ({ book }: BookProps) => (
  <Card>
    <Card.Img variant="top" src={book.imageUrl} />
    <Card.Body className="text-dark">
      <Card.Title>{book.title}</Card.Title>
      <Card.Text>{book.description}</Card.Text>
    </Card.Body>
  </Card>
)

export default Book
