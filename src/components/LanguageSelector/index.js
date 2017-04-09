import { connect } from 'cerebral/react'
import {
  state,
  signal,
} from 'cerebral/tags'
import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap'

export default connect(
  {
    language: state`localization.language`,
    availableLanguages: state`localization.availableLanguages`,
    changeLanguage: signal`localization.languageChanged`,
  },
  class LanguageSelector extends React.Component {
    static propTypes = {
      language: PropTypes.string.isRequired,
      availableLanguages: PropTypes.array.isRequired,
      changeLanguage: PropTypes.func.isRequired,
    }

    state = {
      dropdownOpen: false,
    }

    toggle = () => {
      this.setState({ dropdownOpen: !this.state.dropdownOpen })
    }

    render () {
      const languages = ['no-lang', ...this.props.availableLanguages].sort() // add no-lang for a selection choice to display i18n path names
      return (
        <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle caret>
            <FormattedMessage id={'i18n.LanguageSelector.dropdownTitle'} />
            &nbsp;<strong>{this.props.language}</strong>&nbsp;
          </DropdownToggle>
          <DropdownMenu>
            {languages.map(language => {
              return (
                <DropdownItem
                  onClick={event => this.props.changeLanguage({ language: language })}
                  key={language}
                >
                  {language}
                </DropdownItem>
              )
            })}
          </DropdownMenu>
        </ButtonDropdown>
      )
    }
  }
)
