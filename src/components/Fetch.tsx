// in here I'm planning to fetch the books from Strivazon!
// and display a card for each one of them

import { useState, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Book from './Book'
import IBook from '../typings/Book'

const Fetch = () => {
  const [books, setBooks] = useState<IBook[]>([])
  // TS detects automatically a type of never[]
  // ...which is NEVER a good thing :)

  // now we provided our own type to books, overriding the default TS inference

  useEffect(() => {
    fetchBooks()
  }, [])

  const fetchBooks = async () => {
    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/food-books'
      )
      if (response.ok) {
        // 200 from the server :)
        let data = await response.json()
        // data now should be my array of books!
        console.log(data)
        setBooks(data)
      } else {
        alert('error from the server :(')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <h2>BOOKS FROM STRIVAZON</h2>
      <Container>
        {books.map((book, i) => (
          <Row key={book.id} className="justify-content-center">
            <Col md={6}>
              <Book book={book} />
            </Col>
          </Row>
        ))}
      </Container>
    </div>
  )
}

export default Fetch
