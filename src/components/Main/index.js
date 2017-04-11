import React from 'react'
import { connect } from 'cerebral/react'
import { FormattedMessage } from 'react-intl'
import styled from 'styled-components'

import {
  BSContainer,
  BSCard,
  BSCardBlock,
  BSCardHeader,
} from '../../wrappers/bootstrap'
import Logout from '../Logout'
import LanguageSelector from '../LanguageSelector'



export default connect(
  {
  },
  function Main () {
    return (
      <Container>
        <br />
        <BSCard>
          <BSCardHeader>
            <FormattedMessage id={'i18n.Main.LanguageSelector.header'} />
          </BSCardHeader>
          <BSCardBlock>
            <LanguageSelector />
          </BSCardBlock>
        </BSCard>
        <br />
        <BSCard>
          <BSCardHeader>
            <FormattedMessage id={'i18n.Main.Logout.header'} />
          </BSCardHeader>
          <BSCardBlock>
            <Logout />
          </BSCardBlock>
        </BSCard>
      </Container>
    )
  }
)

const Container = styled(BSContainer)`
  padding-bottom: 160px;
`
