import { state, props } from 'cerebral/tags'
import { set } from 'cerebral/operators'

export default [
  set(state`localization.language`, props`language`),
]
