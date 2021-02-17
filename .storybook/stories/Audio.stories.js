import React from 'react';
import PropTypes from 'prop-types'
import { centered } from "./Decorators"

const Audio = (props) => {
  return (
    <audio {...props}>
      Your browser does not support the audio tag.
    </audio>
  )
}

export default {
  title: 'HTML Elements/Audio',
  component: Audio,
  decorators: centered
};

// Safety first.
const Template = (args) => <Audio {...args} />

export const Controls = Template.bind({})
Controls.args = {
  className: '',
  controls: true,
  autoplay: false,
  loop: false,
  muted: false,
  preload: 'none',
}

export const NoControls = Template.bind({})
NoControls.args = {
  className: '',
  controls: false,
  autoplay: true,
  loop: false,
  muted: false,
  preload: 'none',
}

Audio.propTypes = {
  className: PropTypes.string,
  autoplay: PropTypes.bool,
  loop: PropTypes.bool,
  muted: PropTypes.bool,
  preload: PropTypes.oneOf(['auto', 'metadata', 'none']),
  src: PropTypes.string,
  controls: PropTypes.bool,
}

Audio.defaultProps = {
  autoplay: false,
  loop: false,
  muted: false,
  preload: 'none',
  controls: true,
  src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3',
}
