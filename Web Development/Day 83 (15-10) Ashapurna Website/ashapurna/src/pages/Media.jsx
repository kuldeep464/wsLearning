import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import { Container } from 'react-bootstrap'

export default function Media() {
    return (
        <div>
            <Header />
            <Container fluid>
                <Container>
                    <h1>Hey i am Media Page</h1>
                </Container>
            </Container>
            <Footer />
        </div>
    )
}
