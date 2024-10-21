import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { Data } from '../BlogData'
import { Link } from 'react-router-dom'

export default function Blog() {
    return (
        <div>
            <h1 className='text-center bg-primary py-5'> Our Blogs</h1>
            <Container>
                <Row className='gy-4'>
                    {Data.map((items, index) => {
                        return (<Blogitems Blogsdata={items} />)
                    })}

                </Row>
            </Container>
        </div>
    )
}

function Blogitems({ Blogsdata }) {
    let { id, title, body } = Blogsdata
    return (
        <Col lg={3} md={6}>
            <Link to={`/Blog-details/${id}`}>
                <Card>
                    <Card.Body>
                        <h3>{id} {title}</h3>
                        <p>{body}</p>
                    </Card.Body>
                </Card>
            </Link>
        </Col>
    )
}
