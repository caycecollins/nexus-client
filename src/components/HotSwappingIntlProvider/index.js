import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'cerebral/react'
import { state } from 'cerebral/tags'
import {
  IntlProvider,
  addLocaleData,
} from 'react-intl'
import en from 'react-intl/locale-data/en'
import es from 'react-intl/locale-data/es'

// import localeData from '../../../dist/locale.json' // Production
import localeData from '../../locale_dev.json' // Development (used for creating terms and later importing them to poeditor)

addLocaleData([...en, ...es])

export default connect(
  {
    language: state`localization.language`,
  },
  class HotSwappingIntlProvider extends React.Component {
    static propTypes = {
      language: PropTypes.string.isRequired,
      children: PropTypes.node.isRequired,
    }

    render () {
      const language = this.props.language
      // Split locales with a region code
      const localeWithoutRegionCode = language.toLowerCase().split(/[_-]+/)[0]
      // Try full locale, try locale without region code, fallback to 'en-us'
      const localeMessages = localeData[language] || localeData[localeWithoutRegionCode] || localeData['en-us']
      // Production -- merges locale messages with en-us to avoid path names showing in the UI if it does not exist in the selected language
      // const messages = Object.assign({}, localeData['en-us'], localeMessages)
      // Development/QA -- will show path name in the UI if the path value can not be found for the selected language
      const messages = Object.assign({}, localeMessages)

      // If browser doesn't support Intl (i.e. Safari), then we manually import the intl polyfill and locale data.
      if (!window.intl && !window.Intl) {
        require.ensure([
          'intl',
          'intl/locale-data/jsonp/en.js',
          'intl/locale-data/jsonp/es.js',
        ], (require) => {
          require('intl')
          require('intl/locale-data/jsonp/en.js')
          require('intl/locale-data/jsonp/es.js')
        })
      }
      return (
        <IntlProvider
          defaultLocale="en-us"
          locale={language}
          key={language}
          messages={messages}
        >
          {this.props.children}
        </IntlProvider>
      )
    }
  }
)
