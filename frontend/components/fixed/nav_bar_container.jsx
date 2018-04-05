import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import NavBar from "./nav_bar";
import { logout, signIn } from "../../actions/session_actions";
import { openModal } from "../../actions/modal_actions";

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => {
  const demo = { username: "Demo User", password: "password" };
  return {
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal)),
    loginDemo: () => dispatch(signIn(demo))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
