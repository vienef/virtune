const colors = {
  deepBlack: '#080808',
  mainBlack: '#141414',
  mediumBlack: '#1C1C1C',
  lightBlack: '#232323',
  textMainBlack: '#212121',
  textMediumBlack: '#666666',
  textLightBlack: '#9E9E9E',
  lightWhite: '#F7F7F7',
  mainWhite: '#EBEBEB',
  mediumWhite: '#E3E3E3',
  deepWhite: '#DCDCDC',
  textMainWhite: '#DEDEDE',
  textMediumWhite: '#999999',
  textDeepWhite: '#616161'
};

const themeColor = {
  dark: {
    'status-bar': colors.deepBlack,
    background: colors.mainBlack,
    'app-bar': colors.mediumBlack,
    surface: colors.lightBlack,
    'high-emphasize': colors.textMainWhite,
    'medium-emphasize': colors.textMediumWhite,
    disabled: colors.textDeepWhite
  },
  light: {
    'status-bar': colors.deepWhite,
    background: colors.mainWhite,
    'app-bar': colors.lightWhite,
    surface: colors.mediumWhite,
    'high-emphasize': colors.textMainBlack,
    'medium-emphasize': colors.textMediumBlack,
    disabled: colors.textLightBlack
  }
};

export function cssVariable(name, value) {
  document.documentElement.style.setProperty(`--${name}`, value);
}

export function updateVariable(theme) {
  const mode = themeColor[theme];
  const variables = Object.keys(mode);
  variables.map(v => cssVariable(v, mode[v]));
}
