import React from 'react';
import PropTypes from 'prop-types'

const defaultText = "Lorem Ipsum Dolor Sit Amit"

const Heading = ({children, level, ...props}) => {

  switch (level) {
    case 1:
      return (<h1 {...props}>{children}</h1>)
    case 2:
      return (<h2 {...props}>{children}</h2>)
    case 3:
      return (<h3 {...props}>{children}</h3>)
    case 4:
      return (<h4 {...props}>{children}</h4>)
    case 5:
      return (<h5 {...props}>{children}</h5>)
    case 6:
      return (<h6 {...props}>{children}</h6>)
    default:
      return (<h2 {...props}>{children}</h2>)
  }
}

Heading.propTypes = {
  className: PropTypes.string,
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
  children: PropTypes.string.isRequired
}

export default {
  title: 'Elements/Headings',
  component: Heading
}

// Safety first.
const Template = (args) => <Heading {...args} />
export const Default = Template.bind({})
Default.args = {
  className: '',
  level: 1,
  children: defaultText
}

export const H2 = Template.bind({});
H2.args = {
  ...Default.args,
  level: 2
}

export const H3 = Template.bind({});
H3.args = {
  ...Default.args,
  level: 3
}

export const H4 = Template.bind({});
H4.args = {
  ...Default.args,
  level: 4
}

export const H5 = Template.bind({});
H5.args = {
  ...Default.args,
  level: 5
}

export const H6 = Template.bind({});
H6.args = {
  ...Default.args,
  level: 6
}

Default.argTypes = {
  level: {
    control: {
      type: 'select',
      options: [1, 2, 3, 4, 5, 6]
    }
  }
}
