import * as React from 'react'
import { storiesOf } from '@storybook/react'
import centered from '@storybook/addon-centered/react'
import { Profile } from './Profile'
import { Bean } from '../Bean/Bean'
import { avatar } from '../../data/avatar'

storiesOf('Profile', module)
  .addDecorator(centered)
  .add('No avatar', () => (
    <>
      <Profile address="0xdeadbeef" />
    </>
  ))
  .add('Avatar', () => (
    <>
      <Profile address="0xdeadbeef" avatar={avatar} />
    </>
  ))
  .add('Image only', () => (
    <>
      <Profile address="0xdeadbeef" avatar={avatar} imageOnly />
    </>
  ))
  .add('Text only', () => (
    <>
      <Profile address="0xdeadbeef" avatar={avatar} textOnly />
    </>
  ))
  .add('Inline', () => (
    <>
      You sent <Bean inline>1,000</Bean> to{' '}
      <Profile address="0xdeadbeef" avatar={avatar} inline />
    </>
  ))
  .add('Beland', () => (
    <>
      You sent <Bean inline>1,000</Bean> to{' '}
      <Profile address="0xdeadbeef" avatar={avatar} inline isBeland />
    </>
  ))
  .add('Sizes', () => (
    <>
      <Profile
        address="0xdeadbeef"
        avatar={avatar}
        inline={false}
        size="normal"
        imageOnly
      />
      <Profile
        address="0xdeadbeef"
        avatar={avatar}
        inline={false}
        size="large"
        imageOnly
      />
      <Profile
        address="0xdeadbeef"
        avatar={avatar}
        inline={false}
        size="huge"
        imageOnly
      />
      <Profile
        address="0xdeadbeef"
        avatar={avatar}
        inline={false}
        size="massive"
        imageOnly
      />
      <Profile
        address="0xdeadbeef"
        avatar={avatar}
        inline={false}
        size="normal"
        imageOnly
        isBeland
      />
      <Profile
        address="0xdeadbeef"
        avatar={avatar}
        inline={false}
        size="large"
        imageOnly
        isBeland
      />
      <Profile
        address="0xdeadbeef"
        avatar={avatar}
        inline={false}
        size="huge"
        imageOnly
        isBeland
      />
      <Profile
        address="0xdeadbeef"
        avatar={avatar}
        inline={false}
        size="massive"
        imageOnly
        isBeland
      />
      <Profile address="0xdeadbeef" inline={false} size="normal" imageOnly />
      <Profile address="0xdeadbeef" inline={false} size="large" imageOnly />
      <Profile address="0xdeadbeef" inline={false} size="huge" imageOnly />
      <Profile address="0xdeadbeef" inline={false} size="massive" imageOnly />
    </>
  ))
