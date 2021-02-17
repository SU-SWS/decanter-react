import React from 'react';
import PropTypes from 'prop-types'
import { centered } from "./Decorators"

const Table = (props) => {
  return (
    <table {...props}>
      <caption>Table Caption</caption>
      <thead>
      <tr>
        <th>Table Heading 1</th>
        <th>Table Heading 2</th>
        <th>Table Heading 3</th>
        <th>Table Heading 4</th>
        <th>Table Heading 5</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <th>Table Heading</th>
        <td>Table Cell 2</td>
        <td>Table Cell 3</td>
        <td>Table Cell 4</td>
        <td>Table Cell 5</td>
      </tr>
      <tr>
        <th>Table Heading</th>
        <td>Table Cell 2</td>
        <td>Table Cell 3</td>
        <td>Table Cell 4</td>
        <td>Table Cell 5</td>
      </tr>
      <tr>
        <th>Table Heading</th>
        <td>Table Cell 2</td>
        <td>Table Cell 3</td>
        <td>Table Cell 4</td>
        <td>Table Cell 5</td>
      </tr>
      <tr>
        <th>Table Heading</th>
        <td>Table Cell 2</td>
        <td>Table Cell 3</td>
        <td>Table Cell 4</td>
        <td>Table Cell 5</td>
      </tr>
      </tbody>
      <tfoot>
      <tr>
        <td>Table Footer 1</td>
        <td>Table Footer 2</td>
        <td>Table Footer 3</td>
        <td>Table Footer 4</td>
        <td>Table Footer 5</td>
      </tr>
      </tfoot>
    </table>
  )
}

Table.propTypes = {
  className: PropTypes.string
}

export default {
  title: 'HTML Elements/Table',
  component: Table,
  decorators: centered
};

// Safety first.
const Template = (args) => <Table {...args} />

export const Plain = Template.bind({})
Plain.args = {
  className: '',
}

export const Borderless = Template.bind({})
Borderless.args = {
  className: 'su-table-borderless',
}
