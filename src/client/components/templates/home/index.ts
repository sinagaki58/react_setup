import { decrement, increment } from '@src/client/state/actions'
import { StateInterface } from '@src/client/state/initialState'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import Home from './component'

const mapStateToProps = ({ main: { title } }: StateInterface) => ({
  title
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  increment: (payload: number) => dispatch(increment(payload)),
  decrement: (payload: number) => dispatch(decrement(payload))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
