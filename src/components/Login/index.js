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
} from 'react-intl'
import styled from 'styled-components'
import {
  RTInput,
  RTButton,
  RTCard,
  RTCardTitle,
  RTCardText,
  RTCardActions,
} from 'wrappers/react-toolbox'

function Login (props) {
  return (
    <Container>
      <RTCard>
        <RTCardTitle title={props.intl.formatMessage({ id: 'i18n.Main.Login.header' })} />
        <RTCardText>
          <br />
          <RTInput
            // autoFocus // (TODO) removed due to some wonkyness with dropdown causing focus/blur on this element
            type="text"
            label={props.intl.formatMessage({ id: 'i18n.Login.usernameField.placeholderText' })}
            value={props.username}
            onChange={e => props.usernameChanged({ username: e.target.value })}
          />
          <RTInput
            type="password"
            label={props.intl.formatMessage({ id: 'i18n.Login.passwordField.placeholderText' })}
            value={props.password}
            onChange={e => props.passwordChanged({ password: e.target.value })}
          />
          <br />
        </RTCardText>
        <RTCardActions>
          <RTButton
            label={props.intl.formatMessage({ id: 'i18n.Login.submitButton' })}
            onClick={() => props.viewChanged({ view: 'main' })} // until auth is in
          />
        </RTCardActions>
      </RTCard>
    </Container>
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

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 24px;
  background-color: #ddd;
`
