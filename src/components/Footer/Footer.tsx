import * as React from 'react'
import { Container } from '../Container/Container'
import {
  LanguageDropdownProps
} from '../LanguageDropdown/LanguageDropdown'
import { Locale } from '../Language/Language'
import './Footer.css'
import { Logo } from '../Logo/Logo'


export type FooterI18N = {
  title: any;
  links: any;
  content: any;
}

export type FooterProps = {
  locale?: Locale
  locales?: Locale[]
  i18n?: FooterI18N
  onChange?: LanguageDropdownProps['onChange']
  isFullscreen?: boolean
  className?: string
}

export class Footer extends React.PureComponent<FooterProps> {
  static defaultProps: Partial<FooterProps> = {
    i18n: {
      content: {
        description: 'Beland is a legal entity representing an association of people, whether natural legal.',
        copyright: '©Copyright 2022. Beland. All Rights Reserved'
      },
      title: {
        about: 'About',
        developers: 'Developers',
        media: 'Media'
      },
      links: {
        home: {
          text: 'Home',
          link: 'https://beland.io'
        },
        market: {
          text: 'Market',
          link: 'https://beland.io'
        },
        builder: {
          text: 'Builder',
          link: 'https://beland.io'
        },
        roadmap: {
          text: 'Roadmap',
          link: 'https://beland.io'
        },
        testnet: {
          text: 'Testnet',
          link: 'https://beland.io'
        },
        github: {
          text: 'Github',
          link: 'https://beland.io'
        },
        docs: {
          text: 'Documentation',
          link: 'https://beland.io'
        },
        dao: {
          text: 'Dao',
          link: 'https://beland.io'
        },
        blog: {
          text: 'Blog',
          link: 'https://beland.io'
        },
        event: {
          text: 'Event',
          link: 'https://beland.io'
        }
      }
    }
  }

  render(): JSX.Element {
    const { i18n, isFullscreen, className } =
      this.props

    let classes = 'dcl footer'
    if (isFullscreen) {
      classes += ' fullscreen'
    }
    if (className) {
      classes += ' ' + className
    }

    return (
      <Container className={classes}>
        <div className="main-footer">
            <div>
              <a className="dcl navbar-logo" href="https://beland.io">
                <Logo />
              </a>
              <div className='des'>{i18n.content.description}</div>
            </div>
          <div className="links">
            <div className='items'>
              <div className='title'>{i18n.title.about}</div>
              <a href={i18n.links.home.link}>{i18n.links.home.text}</a>
              <a href={i18n.links.market.link}>{i18n.links.market.text}</a>
              <a href={i18n.links.builder.link}>{i18n.links.builder.text}</a>
              <a href={i18n.links.roadmap.link}>{i18n.links.roadmap.text}</a>
            </div>
            <div className='items'>
              <div className='title'>{i18n.title.developers}</div>
              <a href={i18n.links.testnet.link}>{i18n.links.testnet.text}</a>
              <a href={i18n.links.github.link}>{i18n.links.github.text}</a>
              <a href={i18n.links.docs.link}>{i18n.links.docs.text}</a>
              <a href={i18n.links.dao.link}>{i18n.links.dao.text}</a>
            </div>
            <div className='items'>
              <div className='title'>{i18n.title.media}</div>
              <a href={i18n.links.blog.link}>{i18n.links.blog.text}</a>
              <a href={i18n.links.event.link}>{i18n.links.event.text}</a>
            </div>
          </div>
        </div>
        <div className='divider'></div>
        <div className='copyright'>{i18n.content.copyright}</div>
      </Container>
    )
  }
}
