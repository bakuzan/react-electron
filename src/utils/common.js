import Strings from 'constants/strings'

export const getUserSettings = () => JSON.parse(localStorage.getItem(Strings.localUserSettings)) || null;
export const persistUserSettings = (settingUpdate) => {
  const settings = getUserSettings();
  const updated = { ...settings, ...settingUpdate };
  localStorage.setItem(Strings.localUserSettings, JSON.stringify(updated));
  return updated;
}
