import { decrementAmount, incrementAmount } from '@src/client/state/actions'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import Home from './component'

const mapStateToProps = ({ main }: any) => ({
  ...main
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  increment: (payload: number) => dispatch(incrementAmount(payload)),
  decrement: (payload: number) => dispatch(decrementAmount(payload))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
