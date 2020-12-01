import React from 'react'
import { Alert, BrandBar, StyledLink } from 'decanter-react'

const App = () => {
  const alertText = (
    <React.Fragment>
      This is the details of the alert message. This is a&nbsp;
      <a href='https://news.stanford.edu'>link within an alert.</a>
    </React.Fragment>
  )

  const actionLink = (
    <StyledLink href='https://stanford.edu' variant='action'>
      Action Link Example
    </StyledLink>
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
      <h2>Links:</h2>
      <hr />
      <h5>Default</h5>
      <StyledLink href='https://stanford.edu'>Link Text Example</StyledLink>
      <h5>Action</h5>
      <StyledLink href='https://stanford.edu' variant='action' animate>
        Action Link Example
      </StyledLink>
      <h5>Download</h5>
      <StyledLink href='https://stanford.edu' variant='download' animate='down'>
        Download Link Example
      </StyledLink>
      <h5>External</h5>
      <StyledLink
        href='https://stanford.edu'
        variant='external'
        animate='topRight'
      >
        External Link Example
      </StyledLink>
      <h5>Jump</h5>
      <StyledLink href='https://stanford.edu' variant='jump' animate='down'>
        Jump Link Example
      </StyledLink>
      <h5>More</h5>
      <StyledLink href='https://stanford.edu' variant='more' animate>
        More Link Example
      </StyledLink>
      <h5>Video</h5>
      <StyledLink href='https://stanford.edu' variant='video' animate>
        Video Link Example
      </StyledLink>
      <h5>Button</h5>
      <StyledLink href='https://stanford.edu' variant='button'>
        Button Link Example
      </StyledLink>
      <h5>Button Secondary</h5>
      <StyledLink href='https://stanford.edu' variant='buttonSecondary'>
        Button Secondary Link Example
      </StyledLink>
      <h5>Button Big</h5>
      <StyledLink href='https://stanford.edu' variant='buttonBig'>
        Button Big Link Example
      </StyledLink>
    </React.Fragment>
  )
}

export default App
