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
import KeyIcon from 'react-icons/fa/key'
import EnvelopeIcon from 'react-icons/fa/envelope'

import {
  BSButton,
  BSCard,
  BSCardBlock,
  BSCardHeader,
  BSForm,
  BSFormGroup,
  BSInput,
  BSInputGroup,
  BSInputGroupAddon,
} from '../../wrappers/bootstrap'

function Login (props) {
  return (
    <BSCard>
      <BSCardHeader>
        <FormattedMessage id={'i18n.Main.Login.header'} />
      </BSCardHeader>
      <BSCardBlock>
        <BSForm>
          <BSFormGroup />
          <BSFormGroup>
            <BSInputGroup>
              <BSInputGroupAddon><EnvelopeIcon /></BSInputGroupAddon>
              <BSInput
                // autoFocus // (TODO) removed due to some wonkyness with dropdown causing focus/blur on this element
                type="text"
                placeholder={props.intl.formatMessage({ id: 'i18n.Login.usernameField.placeholderText' })}
                value={props.username}
                onChange={e => props.usernameChanged({ username: e.target.value })}
              />
            </BSInputGroup>
          </BSFormGroup>
          <BSFormGroup>
            <BSInputGroup>
              <BSInputGroupAddon><KeyIcon /></BSInputGroupAddon>
              <BSInput
                type="password"
                placeholder={props.intl.formatMessage({ id: 'i18n.Login.passwordField.placeholderText' })}
                value={props.password}
                onChange={e => props.passwordChanged({ password: e.target.value })}
              />
            </BSInputGroup>
          </BSFormGroup>
          <BSButton
            type="button"
            color="primary"
            // onClick={e => props.authenticationRequested()}
            onClick={() => props.viewChanged({ view: 'main' })} // until auth is in
          >
            <FormattedMessage id={'i18n.Login.submitButton'} />
          </BSButton>
        </BSForm>
      </BSCardBlock>
    </BSCard>
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
