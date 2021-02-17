import React from 'react';
import PropTypes from 'prop-types'
import { centered } from "./Decorators"

const Video = (props) => {
  return (
    <video {...props}>
      <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
      <source src="https://www.w3schools.com/html/mov_bbb.ogg" type="video/ogg" />
      Your browser does not support HTML5 video.
    </video>
  )
}

export default {
  title: 'HTML Elements/Video',
  component: Video,
  decorators: centered
};

// Safety first.
const Template = (args) => <Video {...args} />

export const Controls = Template.bind({})
Controls.args = {
  className: '',
  controls: 'true',
  autoplay: false,
  loop: false,
  muted: false,
  preload: 'none',
  poster: ''
}

export const NoControls = Template.bind({})
NoControls.args = {
  className: '',
  controls: false,
  autoplay: 'true',
  loop: false,
  muted: false,
  preload: 'none',
}

export const WithPoster = Template.bind({})
WithPoster.args = {
  className: '',
  controls: 'true',
  autoplay: false,
  loop: false,
  muted: false,
  preload: 'auto',
  poster: 'https://www.w3schools.com/images/w3schools_green.jpg'
}

Video.propTypes = {
  className: PropTypes.string,
  autoplay: PropTypes.oneOf(['true', 'false']),
  loop: PropTypes.oneOf(['true', 'false']),
  muted: PropTypes.oneOf(['true', 'false']),
  preload: PropTypes.oneOf(['auto', 'metadata', 'none']),
  controls: PropTypes.oneOf(['true', 'false']),
  poster: PropTypes.string
}

Video.defaultProps = {
  autoplay: false,
  loop: false,
  muted: false,
  preload: 'none',
  controls: 'true',
  poster: false
}
