import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'cerebral/react'
import { state, signal } from 'cerebral/tags'
import styled from 'styled-components'
import RTAppBar from 'react-toolbox/lib/app_bar/AppBar'
import RTIconButton from 'react-toolbox/lib/button/IconButton'
import RTIconMenu from 'react-toolbox/lib/menu/IconMenu'
import RTMenuItem from 'react-toolbox/lib/menu/MenuItem'
import RTMenuDivider from 'react-toolbox/lib/menu/MenuDivider'

const AppBar = (props) => {
  const languages = ['none', ...props.availableLanguages].sort()
  const navigationItemClicked = () => {
    const windowWidth = window.innerWidth
    windowWidth <= 840
      ? props.drawerActiveToggled({ value: !props.drawerActive })
      : props.drawerPinnedToggled({ value: !props.drawerPinned })
  }
  return (
    <StyledAppBar
      title="Nexus Gaming"
      leftIcon={!props.drawerPinned ? 'menu' : null}
      onLeftIconClick={() => navigationItemClicked()}
      flat
    >
      <StyledRightIcons>
        <StyledIconMenu icon="language" menuRipple>
          <RTMenuItem caption="Language Selection" disabled />
          <RTMenuDivider />
          {languages.map((language, index) => {
            const lang = {}
            if (language === 'en-us') { lang.name = 'English' }
            if (language === 'es-mx') { lang.name = 'Spanish' }
            if (language === 'none') { lang.name = 'No Language' }
            const languageCaption = `${lang.name} (${language})`
            return (
              <StyledMenuItem
                key={index}
                caption={languageCaption}
                disabled={language === props.language}
                onClick={() => props.languageChanged({ language: language })}
              />
            )
          })}
        </StyledIconMenu>
        <StyledIconButton icon="notifications" onClick={() => props.sidebarViewChanged({ view: 'notifications' })} />
        <StyledIconButton icon="settings" onClick={() => props.viewChanged({ view: 'settings' })} />
      </StyledRightIcons>
    </StyledAppBar>
  )
}

AppBar.propTypes = {
  viewChanged: PropTypes.func,
  drawerActive: PropTypes.bool,
  drawerActiveToggled: PropTypes.func,
  drawerPinned: PropTypes.bool,
  drawerPinnedToggled: PropTypes.func,
  sidebarActiveToggled: PropTypes.func,
  sidebarViewChanged: PropTypes.func,
  language: PropTypes.string.isRequired,
  availableLanguages: PropTypes.array.isRequired,
  languageChanged: PropTypes.func.isRequired,
}

export default connect(
  {
    drawerActive: state`app.drawerActive`,
    drawerActiveToggled: signal`app.drawerActiveToggled`,
    drawerPinned: state`app.drawerPinned`,
    drawerPinnedToggled: signal`app.drawerPinnedToggled`,
    sidebarActive: state`app.sidebarActive`,
    sidebarActiveToggled: signal`app.sidebarActiveToggled`,
    sidebarViewChanged: signal`app.sidebarViewChanged`,
    viewChanged: signal`app.viewChanged`,
    language: state`localization.language`,
    availableLanguages: state`localization.availableLanguages`,
    languageChanged: signal`localization.languageChanged`,
  }, AppBar
)

const StyledAppBar = styled(RTAppBar)`
  background-color: ${props => props.theme.colors.blue};
`

const StyledRightIcons = styled.div`
  display: flex;
  flex-direction: row;
`

const StyledIconButton = styled(RTIconButton)`
  color: white !important;
`

const StyledIconMenu = styled(RTIconMenu)`
  > button {
    color: white !important;
  }
`

const StyledMenuItem = styled(RTMenuItem)`
  ${props => props.disabled && `background-color: ${props.theme.colors.lightestGray} !important;`}
`
