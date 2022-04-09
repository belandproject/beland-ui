import * as React from 'react'
import { storiesOf } from '@storybook/react'
import centered from '@storybook/addon-centered/react'
import { Network } from '@beland/schemas'
import { Header } from '../Header/Header'
import { Bean } from './Bean'

storiesOf('Mana', module)
  .addDecorator(centered)
  .add('Symbol', () => <Bean />)
  .add('Symbol + MANA', () => <Bean>Bean</Bean>)
  .add('Total voted', () => (
    <>
      <Header sub>Total voted</Header>
      <Bean>1,235,345</Bean>
    </>
  ))
  .add('Sizes', () => (
    <>
      <Bean size="huge">1,000</Bean>
      <Bean size="large">1,000</Bean>
      <Bean size="medium">1,000</Bean>
      <Bean size="small">1,000</Bean>
      <Bean size="tiny">1,000</Bean>
    </>
  ))
  .add('In a paragraph', () => (
    <p>
      You've voted with <Bean inline>1,000</Bean>.
    </p>
  ))
  .add('Matic', () => (
    <p>
      You deposited{' '}
      <Bean inline network={Network.MATIC}>
        1,000
      </Bean>{' '}
      into Matic Network.
    </p>
  ))
  .add('Matic Sizes', () => (
    <>
      <Bean network={Network.MATIC} size="huge">
        1,000
      </Bean>
      <Bean network={Network.MATIC} size="large">
        1,000
      </Bean>
      <Bean network={Network.MATIC} size="medium">
        1,000
      </Bean>
      <Bean network={Network.MATIC} size="small">
        1,000
      </Bean>
      <Bean network={Network.MATIC} size="tiny">
        1,000
      </Bean>
    </>
  ))
