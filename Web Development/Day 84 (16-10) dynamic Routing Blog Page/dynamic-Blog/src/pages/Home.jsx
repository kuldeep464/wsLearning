import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import { Container } from 'react-bootstrap'

export default function Home() {
    return (
        <div>
            
            <Container fluid>
                <Container>
                    <h1 className='text-center'>Hey i am Home Page</h1>
                </Container>
            </Container>
            
        </div>
    )
}
