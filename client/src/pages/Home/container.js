import { connect } from 'react-redux'
import Component from './component'

const mapStateToProps = ({ todos }) => ({
  todos,
})

export default connect(mapStateToProps)(Component)
