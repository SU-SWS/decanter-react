import React from 'react'
import { Alert, BrandBar } from 'decanter-react'

const App = () => {
  const alertText = (
    <React.Fragment>
      This is the details of the alert message. This is a&nbsp;
      <a href='https://news.stanford.edu'>link within an alert.</a>
    </React.Fragment>
  )

  const actionLink = (
    <a href='#' className='su-link su-link--action'>
      Action Link
    </a>
  )

  return (
    <React.Fragment>
      <h2>Brand Bars:</h2>
      <hr />
      <h5>Default</h5>
      <BrandBar />
      <h5>Bright</h5>
      <BrandBar variant='bright' />
      <h5>Dark</h5>
      <BrandBar variant='dark' />
      <h5>White</h5>
      <BrandBar variant='white' />
      <h2>Alerts:</h2>
      <hr />
      <h5>Default</h5>
      <Alert
        dismiss='true'
        heading='Alert Heading'
        body={alertText}
        footer={actionLink}
      />
      <h5>Success</h5>
      <Alert
        variant='success'
        dismiss='true'
        label='Success'
        heading='Alert Heading'
        body={alertText}
        footer={actionLink}
      />
      <h5>Warning</h5>
      <Alert
        variant='warning'
        dismiss='true'
        label='Warning'
        heading='Alert Heading'
        body={alertText}
        footer={actionLink}
      />
      <h5>Info</h5>
      <Alert
        variant='info'
        dismiss='true'
        label='Information'
        heading='Alert Heading'
        body={alertText}
        footer={actionLink}
      />
      <h5>Error</h5>
      <Alert
        variant='error'
        dismiss='true'
        label='Error'
        heading='Alert Heading'
        body={alertText}
        footer={actionLink}
      />
    </React.Fragment>
  )
}

export default App
