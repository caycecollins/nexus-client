import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'cerebral/react'
import { signal } from 'cerebral/tags'
import styled from 'styled-components'
import RTList from 'react-toolbox/lib/list/List'
import RTListItem from 'react-toolbox/lib/list/ListItem'

function Notifications (props) {
  return (
    <Container>
      <Header>Notifications</Header>
      <RTList>
        <RTListItem
          caption="Message 1"
          legend="A brief message to test"
          ripple={false}
          selectable
          onClick={() => props.sidebarActiveToggled({ value: false })}
        />
        <RTListItem
          caption="Message 2"
          legend="A brief message to test"
          ripple={false}
          selectable
          onClick={() => props.sidebarActiveToggled({ value: false })}
        />
        <RTListItem
          caption="Message 3"
          legend="A brief message to test"
          ripple={false}
          selectable
          onClick={() => props.sidebarActiveToggled({ value: false })}
        />
        <RTListItem
          caption="Message 4"
          legend="A brief message to test"
          ripple={false}
          selectable
          onClick={() => props.sidebarActiveToggled({ value: false })}
        />
        <RTListItem
          caption="Message 5"
          legend="A brief message to test"
          ripple={false}
          selectable
          onClick={() => props.sidebarActiveToggled({ value: false })}
        />
        <RTListItem
          caption="Message 6"
          legend="A brief message to test"
          ripple={false}
          selectable
          onClick={() => props.sidebarActiveToggled({ value: false })}
        />
      </RTList>
    </Container>
  )
}

Notifications.propTypes = {
  sidebarActiveToggled: PropTypes.func,
}

export default connect(
  {
    sidebarActiveToggled: signal`app.sidebarActiveToggled`,
  }, Notifications
)

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 24px;
  background-color: #f8f8f8;
`

const Header = styled.h3`
  padding-left: 16px;
  margin-top: 0;
`
