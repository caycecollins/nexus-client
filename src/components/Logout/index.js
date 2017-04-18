import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'cerebral/react'
import { signal } from 'cerebral/tags'
import {
  injectIntl,
  intlShape,
  FormattedMessage,
} from 'react-intl'
import { RTButton } from 'wrappers/react-toolbox'

function Logout (props) {
  return (
    <RTButton
      icon="exit_to_app"
      raised={true}
      primary
      onClick={() => props.viewChanged({ view: 'login' })}
    >
      <FormattedMessage id={'i18n.Logout.submitButton'} />
    </RTButton>
  )
}

Logout.propTypes = {
  intl: intlShape.isRequired,
  viewChanged: PropTypes.func,
}

export default connect(
  {
    viewChanged: signal`app.viewChanged`,
  },
  injectIntl(Logout)
)
