import config from 'config'

import setLanguage from './actions/setLanguage'

export default function ({ controller }) {
  // Define user's language. Different browsers have the user locale defined
  // on different fields on the `navigator` object, so we make sure to account
  // for these different by checking all of them
  const detectedLanguage = ((navigator.languages && navigator.languages[0]) ||
                             navigator.language ||
                             navigator.userLanguage).toLowerCase()
  return {
    state: {
      language: detectedLanguage || 'en-us',
      availableLanguages: config.localize.languages,
    },
    signals: {
      languageChanged: setLanguage,
    },
  }
}
