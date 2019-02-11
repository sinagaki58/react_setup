import React, { FunctionComponent } from 'react'

interface Props {
  title: string
}

const Home: FunctionComponent<Props> = ({ title }) => (
  <>
    <div>{title}</div>
  </>
)

export default Home
