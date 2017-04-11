import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'cerebral/react'
import { signal } from 'cerebral/tags'
import {
  injectIntl,
  intlShape,
  FormattedMessage,
} from 'react-intl'

import {
  BSButton,
} from '../../wrappers/bootstrap'

function Logout (props) {
  return (
    <BSButton
      type="button"
      color="danger"
      onClick={() => props.viewChanged({ view: 'login' })}
    >
      <FormattedMessage id={'i18n.Logout.submitButton'} />
    </BSButton>
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
