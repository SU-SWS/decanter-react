import React from 'react';
import PropTypes from 'prop-types'

const List = ({type, ...props}) => {
  switch (type) {
    case 'dl':
      return (
        <dl {...props}>
          <dt>Definition List Title 1</dt>
          <dd>This is a definition list division.</dd>
          <dt>Definition List Title 2</dt>
          <dd>This is a definition list division.</dd>
        </dl>
      )
    case 'ol':
      return (
        <ol {...props}>
          <li>List Item 1</li>
          <li>List Item 2</li>
          <li>List Item 3</li>
        </ol>
      )
    case 'ul':
      return (
        <ul {...props}>
          <li>List Item 1</li>
          <li>List Item 2</li>
          <li>List Item 3</li>
        </ul>
      )
  }
}

List.PropTypes = {
  className: PropTypes.string
}

export default {
  title: 'HTML Elements/List',
  component: List,
};

// Safety first.
const Template = (args) => <List {...args} />

export const DefinitionList = Template.bind({})
DefinitionList.args = {
  className: '',
  type: 'dl'
}

export const OrderedList = Template.bind({})
OrderedList.args = {
  className: '',
  type: 'ol'
}

export const UnorderedList = Template.bind({})
UnorderedList.args = {
  className: '',
  type: 'ul'
}
