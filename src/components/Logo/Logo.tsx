import * as React from 'react'
import './Logo.css'
const  beland_logo = require('../../assets/logo.svg');
export class Logo extends React.PureComponent {
  render(): JSX.Element {
    return <img className='be logo' src={beland_logo} alt="" />
  }
}
