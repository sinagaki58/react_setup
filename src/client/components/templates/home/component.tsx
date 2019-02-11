import React, { FunctionComponent } from 'react'

interface Props {
  title: string
  increment?: any
  decrement?: any
}

const Home: FunctionComponent<Props> = ({ title }) => (
  <>
    <div>{title}</div>
  </>
)

export default Home
