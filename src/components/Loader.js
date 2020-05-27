import React from 'react'
import Spinner from 'react-bootstrap/Spinner'

export default function Loader() {
    return (
          <div className="container">
              <Spinner animation="border" variant="primary"  />
          </div>
    )
}
