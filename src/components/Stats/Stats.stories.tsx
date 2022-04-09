import * as React from 'react'
import { storiesOf } from '@storybook/react'
import centered from '@storybook/addon-centered/react'
import { Bean } from '../Bean/Bean'
import { Stats } from './Stats'

storiesOf('Stats', module)
  .addDecorator(centered)
  .add('Single Result', () => (
    <>
      <Stats title="Total Voted">
        <Bean>1,235,345</Bean>
      </Stats>
    </>
  ))
  .add('Poll Results', () => (
    <>
      <Stats title="Token">
        <Bean>BEAN</Bean>
      </Stats>
      <Stats title="Total Voted">
        <Bean>1,235,345</Bean>
      </Stats>
      <Stats title="Total Votes">20</Stats>
      <Stats title="Parcial Result">Yes</Stats>
      <Stats title="Time Left">1 week</Stats>
    </>
  ))
