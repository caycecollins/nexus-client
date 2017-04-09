/*
  common.js

  Provides a common configuration object which is exposed to the web client.
  This module is imported within specific environment configuration files in this directory.
*/

export default {
  localize: {
    poeditor: {
      url: 'https://api.poeditor.com/v2/projects/export',
      project: '105131',
      token: 'e7299a0583a80e5fa1b3d4bec50013eb',
    },
    languages: [
      'en-us',
      'es-mx',
    ],
  }
}
