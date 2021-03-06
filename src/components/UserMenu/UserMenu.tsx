import { Avatar, Network } from '@beland/schemas'
import * as React from 'react'
import Menu from 'semantic-ui-react/dist/commonjs/collections/Menu'
import Icon from 'semantic-ui-react/dist/commonjs/elements/Icon'
import { AvatarFace } from '../AvatarFace/AvatarFace'
import { Bean } from '../Bean/Bean'
import { Button } from '../Button/Button'
import { Row } from '../Row/Row'
import './UserMenu.css'

export type UserMenuI18N = {
  signIn: React.ReactNode
  signOut: React.ReactNode
  guest: React.ReactNode
  settings: React.ReactNode
  account: React.ReactNode
}

export type UserMenuProps = {
  isSignedIn: boolean
  isSigningIn: boolean
  isActivity: boolean
  hasActivity: boolean
  address?: string
  beanBalances?: Partial<Record<Network, number>>
  avatar?: Avatar
  menuItems?: React.ReactNode
  i18n: UserMenuI18N
  onSignOut: () => void
  onSignIn: () => void
  onClickProfile: () => void
  onClickActivity: () => void
  onClickSettings: () => void
  onClickBalance: (network: Network) => void
}

export type UserMenuState = {
  isOpen: boolean
  isClickable: boolean
}

export class UserMenu extends React.Component<UserMenuProps, UserMenuState> {
  static defaultProps: Partial<UserMenuProps> = {
    beanBalances: {},
    i18n: {
      signIn: 'Sign In',
      signOut: 'Sign Out',
      guest: 'Guest',
      settings: 'Settings',
      account: 'Account'
    }
  }

  state: UserMenuState = {
    isOpen: false,
    isClickable: false
  }

  mounted = false

  ref: HTMLElement | null = null

  handleClose = (): void => {
    this.toggle(false)
  }

  handleToggle = (): void => {
    this.toggle(!this.state.isOpen)
  }

  toggle(value: boolean): void {
    this.setState({ isOpen: value })
    setTimeout(() => {
      if (this.mounted) {
        this.setState({ isClickable: value })
      }
    }, 250)
  }

  componentDidMount(): void {
    this.mounted = true
  }

  componentWillUnmount(): void {
    this.mounted = false
  }

  render(): JSX.Element {
    const {
      avatar,
      beanBalances,
      isSignedIn,
      isSigningIn,
      isActivity,
      hasActivity,
      onSignOut,
      onSignIn,
      onClickProfile,
      onClickActivity,
      onClickSettings,
      onClickBalance,
      i18n,
      menuItems
    } = this.props

    const { isOpen, isClickable } = this.state

    const name = avatar ? avatar.name : null

    return (
      <Row className="bld user-menu-wrapper">
        <Menu.Item
          className={isActivity ? 'activity-bell active' : 'activity-bell'}
        >
          {onClickActivity ? (
            <Icon
              className={hasActivity ? 'pending' : ''}
              name="bell"
              onClick={onClickActivity}
            />
          ) : null}
        </Menu.Item>
        <div className="bld user-menu" onBlur={this.handleClose} tabIndex={0}>
          {isSignedIn && (
            <>
              <span className="bld account-wrapper">
                {Object.keys(beanBalances).map((network) => (
                  <Bean
                    key={network}
                    network={network as Network}
                    size="small"
                    className={onClickBalance ? 'clickable' : undefined}
                    title={`${beanBalances[network].toLocaleString()} BEAN`}
                    href="https://beland.io"
                  >
                    {Math.floor(beanBalances[network]).toLocaleString()}
                  </Bean>
                ))}
              </span>
              <div className="toggle" onClick={this.handleToggle}>
                <AvatarFace size="medium" avatar={avatar} />
              </div>
              <div
                className={`menu ${isOpen ? 'open' : ''} ${
                  isClickable ? 'clickable' : ''
                }`}
              >
                <div
                  className={`info ${onClickProfile ? 'clickable' : ''}`}
                  onClick={onClickProfile}
                >
                  <div className="image">
                    <AvatarFace size="small" avatar={avatar} />
                  </div>
                  <div>
                    <div className="name">{name || i18n.guest}</div>
                  </div>
                </div>
                <ul className="actions">
                  <a href="https://beland.io">
                    <li>
                      <Icon name="user"></Icon>
                      {i18n.account}
                    </li>
                  </a>
                  {menuItems}
                  {onClickSettings ? (
                    <li onClick={onClickSettings}>
                      <Icon name="cog"></Icon>
                      {i18n.settings}
                    </li>
                  ) : null}
                  {onSignOut ? (
                    <li onClick={onSignOut}>
                      <i className="sign-out-icon" />
                      {i18n.signOut}
                    </li>
                  ) : null}
                </ul>
              </div>
            </>
          )}
          {!isSignedIn && (
            <Button primary disabled={isSigningIn} onClick={onSignIn}>
              {i18n.signIn}
            </Button>
          )}
        </div>
      </Row>
    )
  }
}
