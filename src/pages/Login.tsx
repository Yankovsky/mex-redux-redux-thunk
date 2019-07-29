import * as React from 'react'
import { RootState } from '../store'
import { connect } from 'react-redux'
import { login } from '../store/session/actions'

const mapStateToProps = () => {
  return (states: RootState) => {
    return {
      accessToken: states.session.accessToken
    }
  }
}

const mapDispatchToProps = {
  login
}

type Props = ReturnType<ReturnType<typeof mapStateToProps>> & typeof mapDispatchToProps

class Login extends React.Component<Props, {}> {
  constructor(prop:Props) {
    super(prop)
    this.state = {
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center mb-3">
          <div className="col-6">
          {
            this.props.accessToken.accessToken && 'You are logged In!'
            ||
            this.props.accessToken.isFetching && 'Faking Login in'
            ||
            <button className="btn btn-primary" onClick={() => this.props.login('someusername', 'somepassword')}>
              Login
            </button>
          }
          </div>
        </div>
      </div>
    )
  }
}

export default connect<ReturnType<typeof mapStateToProps>, typeof mapDispatchToProps, {}, RootState>(mapStateToProps, mapDispatchToProps)(Login)
