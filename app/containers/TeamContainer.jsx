import Team from '../components/Team'
import {connect} from 'react-redux'

const mapStateToProps = (state) => {
  const user = state.auth
  return {
    user
  }
}

const mapDisptachToProps = (dispatch, ownProps) => {}

export default connect(mapStateToProps, mapDisptachToProps)(Team)