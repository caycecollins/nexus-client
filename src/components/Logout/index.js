import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'cerebral/react'
import { signal } from 'cerebral/tags'
import {
  injectIntl,
  intlShape,
  FormattedMessage,
} from 'react-intl'
import Button from 'react-toolbox/lib/button/Button'

function Logout (props) {
  return (
    <Button
      icon="exit_to_app"
      raised={true}

      onClick={() => props.viewChanged({ view: 'login' })}
    >
      <FormattedMessage id={'i18n.Logout.submitButton'} />
    </Button>
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
