import * as React from 'react'
import { Network } from '@beland/schemas'
import { Header, HeaderProps } from '../Header/Header'
import './Bean.css'

export type BeanProps = {
  size?: 'tiny' | 'small' | 'medium' | 'large' | 'huge'
  inline?: boolean
  network?: Network
  className?: string
  children?: React.ReactChild
}

export class Bean extends React.Component<BeanProps & HeaderProps> {
  static defaultProps = {
    className: '',
    network: Network.ETHEREUM
  }

  render(): JSX.Element {
    const { size, className, inline, children, network, ...rest } = this.props
    const classes = `beland bean ${inline ? 'inline ' : ''}${className}`.trim()
    return (
      <Header size={size} className={classes} {...rest}>
        <i className="symbol">
          <i className={network.toLowerCase()} />
        </i>
        {children}
      </Header>
    )
  }
}
