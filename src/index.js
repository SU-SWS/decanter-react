// import { Alert } from './Alert/Alert';
// import { Button } from './Button/Button';
// import { IdentityBar } from './IdentityBar/IdentityBar';
// import { GlobalFooter } from './GlobalFooter/GlobalFooter';
// import { Logo } from './Logo/Logo';
// import { SrOnlyText } from './SrOnlyText/SrOnlyText';

// module.exports = {
//   'Alert' : Alert,
//   'Button' : Button,
//   'IdentityBar' : IdentityBar,
//   'GlobalFooter' : GlobalFooter,
//   'Logo' : Logo,
//   'SrOnlyText' : SrOnlyText
// }

import React from 'react'

const GlobalFooter = (props) => {
  return (
    <h1 {...props}>I am groot</h1>
  )
}

module.exports = {
  'GlobalFooter': GlobalFooter
}
