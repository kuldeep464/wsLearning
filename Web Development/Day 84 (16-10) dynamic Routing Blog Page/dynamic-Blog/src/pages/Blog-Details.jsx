import React from 'react'
import { useParams } from 'react-router'
import { Data } from '../BlogData'
import { Container } from 'react-bootstrap'

export default function BlogDetails() {
    let {blogId} = useParams()
    let getdata = Data.filter((items)=>items.id==blogId)
    let {id,title, body} = getdata[0]

  return (
    <div>
        <h1 className='text-center bg-primary py-5'> {id} {title} </h1>
        <Container>
            <p>{body}</p>
        </Container>
    </div>
  )
}
