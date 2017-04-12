import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'cerebral/react'
import {
  state,
  signal,
} from 'cerebral/tags'
import {
  injectIntl,
  intlShape,
  FormattedMessage,
} from 'react-intl'

function Login (props) {
  return (
    <div>
      <div>
        <FormattedMessage id={'i18n.Main.Login.header'} />
      </div>
      <div>
        <div>
          <div />
          <div>
            <div>
              <input
                // autoFocus // (TODO) removed due to some wonkyness with dropdown causing focus/blur on this element
                type="text"
                placeholder={props.intl.formatMessage({ id: 'i18n.Login.usernameField.placeholderText' })}
                value={props.username}
                onChange={e => props.usernameChanged({ username: e.target.value })}
              />
            </div>
          </div>
          <div>
            <div>
              <input
                type="password"
                placeholder={props.intl.formatMessage({ id: 'i18n.Login.passwordField.placeholderText' })}
                value={props.password}
                onChange={e => props.passwordChanged({ password: e.target.value })}
              />
            </div>
          </div>
          <button
            type="button"
            onClick={() => props.viewChanged({ view: 'main' })} // until auth is in
          >
            <FormattedMessage id={'i18n.Login.submitButton'} />
          </button>
        </div>
      </div>
    </div>
  )
}

Login.propTypes = {
  intl: intlShape.isRequired,
  password: PropTypes.string,
  username: PropTypes.string,
  passwordChanged: PropTypes.func,
  authenticationRequested: PropTypes.func,
  usernameChanged: PropTypes.func,
  viewChanged: PropTypes.func,
}

export default connect(
  {
    username: state`authorization.username`,
    password: state`authorization.password`,
    usernameChanged: signal`authorization.usernameChanged`,
    passwordChanged: signal`authorization.passwordChanged`,
    authenticationRequested: signal`authorization.authenticationRequested`,
    viewChanged: signal`app.viewChanged`,
  },
  injectIntl(Login)
)
