import * as React from 'react'
import Menu from 'semantic-ui-react/dist/commonjs/collections/Menu'
import { Bean } from '../Bean/Bean'
import { Blockie } from '../Blockie/Blockie'
import { Container } from '../Container/Container'
import { Header } from '../Header/Header'
import { Logo } from '../Logo/Logo'
import { Mobile, NotMobile } from '../Media'
import './Navbar.css'

export type NavbarI18N = {
  menu: {
    marketplace: React.ReactNode
    docs: React.ReactNode
    events: React.ReactNode
    agora: React.ReactNode
    dao: React.ReactNode
    blog: React.ReactNode
    builder: React.ReactNode
  }
  account: {
    signIn: React.ReactNode
    connecting: React.ReactNode
  }
}

export type NavbarProps = {
  bean?: number
  address?: string
  activePage?:
    | 'marketplace'
    | 'docs'
    | 'events'
    | 'agora'
    | 'dao'
    | 'blog'
    | 'builder'
    | string
  leftMenu?: React.ReactNode
  middleMenu?: React.ReactNode
  rightMenu?: React.ReactNode
  i18n?: NavbarI18N
  isConnected?: boolean
  isConnecting?: boolean
  isSignIn?: boolean
  isFullscreen?: boolean
  isOverlay?: boolean
  className?: string
  onSignIn?: () => void
  onClickAccount?: () => void
}

export type NavbarState = {
  toggle: boolean
}

export class Navbar extends React.PureComponent<NavbarProps, NavbarState> {
  static defaultProps: Partial<NavbarProps> = {
    bean: null,
    address: null,
    activePage: null,
    leftMenu: null,
    middleMenu: null,
    i18n: {
      menu: {
        marketplace: 'Marketplace',
        docs: 'Docs',
        events: 'Events',
        agora: 'Agora',
        dao: 'DAO',
        blog: 'Blog',
        builder: 'Builder'
      },
      account: {
        signIn: 'Sign In',
        connecting: 'Connecting...'
      }
    },
    isConnected: false,
    isConnecting: false,
    isFullscreen: false,
    isOverlay: false,
    isSignIn: false,
    onSignIn: null,
    onClickAccount: null
  }
  public state = {
    toggle: false
  }
  componentDidMount(): void {
    document.addEventListener('click', this.handleDocumentClick)
  }

  componentWillUnmount(): void {
    document.removeEventListener('click', this.handleDocumentClick)
  }
  handleToggle = (event: React.MouseEvent): void => {
    this.setState({ toggle: !this.state.toggle })
    event.stopPropagation()
    event.nativeEvent.stopImmediatePropagation()
  }
  handleDocumentClick = (): void => {
    this.setState({ toggle: false })
  }

  renderLeftMenu(): React.ReactNode {
    const { leftMenu, activePage, i18n } = this.props
    if (leftMenu) {
      return leftMenu
    }
    return (
      <>
        <Menu.Item
          active={activePage === 'marketplace'}
          href="https://market.beland.io"
        >
          {i18n.menu.marketplace}
        </Menu.Item>
        <Menu.Item
          active={activePage === 'builder'}
          href="https://builder.beland.io"
        >
          {i18n.menu.builder}
        </Menu.Item>
        <Menu.Item
          active={activePage === 'docs'}
          href="https://docs.beland.io"
        >
          {i18n.menu.docs}
        </Menu.Item>
        <Menu.Item
          active={activePage === 'events'}
          href="https://events.beland.io"
        >
          {i18n.menu.events}
        </Menu.Item>
        <Menu.Item
          active={activePage === 'dao'}
          href="https://dao.beland.io"
        >
          {i18n.menu.dao}
        </Menu.Item>
        <Menu.Item
          active={activePage === 'blog'}
          href="https://blog.beland.io"
        >
          {i18n.menu.blog}
        </Menu.Item>
        </>
    )
  }

  renderRightMenu(): React.ReactNode {
    const {
      rightMenu,
      middleMenu,
      isConnected,
      onClickAccount,
      bean,
      address,
      isConnecting,
      isSignIn,
      i18n,
      onSignIn
    } = this.props
    if (rightMenu) {
      return rightMenu
    } else if (isConnected) {
      return (
        <>
          {middleMenu ? (
            <NotMobile>
              <Menu secondary className="bld navbar-account-menu">
                {middleMenu}
              </Menu>
            </NotMobile>
          ) : null}
          <span
            className={`bld account-wrapper ${
              onClickAccount ? 'clickable' : ''
            }`}
            onClick={onClickAccount}
          >
            {bean != null ? (
              <Bean size="small" title={`${bean.toLocaleString()} BEAN`}>
                {Math.floor(bean).toLocaleString()}
              </Bean>
            ) : null}
            {address != null ? <Blockie seed={address} /> : null}
          </span>
        </>
      )
    } else if (isConnecting && !isSignIn) {
      return (
        <Menu secondary>
          <Menu.Item disabled>{i18n.account.connecting}</Menu.Item>
        </Menu>
      )
    } else if (onSignIn || isSignIn) {
      return (
        <Menu secondary>
          <Menu.Item className="sign-in-button" onClick={onSignIn}>
            {i18n.account.signIn}
          </Menu.Item>
        </Menu>
      )
    } else {
      return null
    }
  }

  render(): JSX.Element {
    const { activePage, className, isSignIn, isFullscreen, isOverlay } =
      this.props

    let classes = `bld navbar`

    if (this.state.toggle) {
      classes += ' open'
    }

    if (isSignIn) {
      classes += ' sign-in'
    }

    if (isFullscreen) {
      classes += ' fullscreen'
    }

    if (isOverlay) {
      classes += ' overlay'
    }

    if (className) {
      classes += ` ${className}`
    }

    return (
      <div className={classes} role="navigation">
        <Container>
          <div className="bld navbar-menu">
            <NotMobile>
              <Menu secondary stackable>
                <a className="bld navbar-logo" href="https://beland.io">
                  <Logo />
                </a>
              </Menu>
            </NotMobile>
            <Mobile>
              <div className="bld navbar-mobile-menu">
                <a className="bld navbar-logo" href="https://beland.io">
                  <Logo />
                </a>
                <Header
                  size="small"
                  className={`bld active-page ${
                    this.state.toggle ? 'caret-up' : 'caret-down'
                  }`}
                  onClick={this.handleToggle}
                >
                  {activePage}
                </Header>
              </div>
            </Mobile>
          </div>
          <div className="bld navbar-account">
            <NotMobile>
              <Menu secondary stackable>
                <div className="desktop-menu">{this.renderLeftMenu()}</div>
              </Menu>
            </NotMobile>
            {this.renderRightMenu()}
          </div>
        </Container>
        <div className="mobile-menu">{this.renderLeftMenu()}</div>
      </div>
    )
  }
}
