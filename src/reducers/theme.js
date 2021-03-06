import {SET_THEME_CLASS} from 'actions/theme'
import Strings from 'constants/strings'
import {getUserSettings, persistUserSettings} from 'utils/common'
import {createReducer} from './utils'


const initialState = {
  class: Strings.themes[0].class
}

const getUserTheme = () => {
  const settings = getUserSettings();

  if (!settings || !settings.theme) return initialState;
  return settings.theme;
}

const persistUserThemeChoice = (state, action) => {
  const updatedSettings = persistUserSettings({
    theme: { ...state, class: action.theme }
  });
  return updatedSettings.theme;
}

const theme = createReducer(getUserTheme(), {
  [SET_THEME_CLASS]     : persistUserThemeChoice
})

export default theme
