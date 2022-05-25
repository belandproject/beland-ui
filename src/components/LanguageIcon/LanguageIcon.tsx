import * as React from 'react'
import { Locale } from '../Language/Language'
import './LanguageIcon.css'

export { Locale }

export type LanguageIconProps = {
  locale: Locale
  label?: React.ReactNode
}

export class LanguageIcon extends React.PureComponent<LanguageIconProps> {
  renderIcon(): JSX.Element {
    return <i className={`bld language-icon ${this.props.locale}`} />
  }

  render(): JSX.Element {
    return this.props.label ? (
      <div className="bld language-icon-wrapper">
        {this.renderIcon()}
        <div className="language-icon-label">{this.props.label}</div>
      </div>
    ) : (
      this.renderIcon()
    )
  }
}
