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
import {
  Button,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
} from 'reactstrap'
import KeyIcon from 'react-icons/fa/key'
import EnvelopeIcon from 'react-icons/fa/envelope'

function Login (props) {
  return (
    <Form>
      <FormGroup />
      <FormGroup>
        <InputGroup>
          <InputGroupAddon><EnvelopeIcon /></InputGroupAddon>
          <Input
            // autoFocus // (TODO) removed due to some wonkyness with dropdown causing focus/blur on this element
            type="text"
            placeholder={props.intl.formatMessage({ id: 'i18n.Login.usernameField.placeholderText' })}
            value={props.username}
            onChange={e => props.usernameChanged({ username: e.target.value })}
          />
        </InputGroup>
      </FormGroup>
      <FormGroup>
        <InputGroup>
          <InputGroupAddon><KeyIcon /></InputGroupAddon>
          <Input
            type="password"
            placeholder={props.intl.formatMessage({ id: 'i18n.Login.passwordField.placeholderText' })}
            value={props.password}
            onChange={e => props.passwordChanged({ password: e.target.value })}
          />
        </InputGroup>
      </FormGroup>
      <Button type="button" color="primary" onClick={e => props.authenticationRequested()}>
        <FormattedMessage id={'i18n.Login.submitButton'} />
      </Button>
    </Form>
  )
}

Login.propTypes = {
  intl: intlShape.isRequired,
  password: PropTypes.string,
  username: PropTypes.string,
  passwordChanged: PropTypes.func,
  authenticationRequested: PropTypes.func,
  usernameChanged: PropTypes.func,
}

export default connect(
  {
    username: state`authorization.username`,
    password: state`authorization.password`,
    usernameChanged: signal`authorization.usernameChanged`,
    passwordChanged: signal`authorization.passwordChanged`,
    authenticationRequested: signal`authorization.authenticationRequested`,
  },
  injectIntl(Login)
)
