import { decrement, increment } from '@src/client/state/actions'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import Home from './component'

const mapStateToProps = ({ main }: any) => ({
  ...main
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  increment: (payload: number) => dispatch(increment(payload)),
  decrement: (payload: number) => dispatch(decrement(payload))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
