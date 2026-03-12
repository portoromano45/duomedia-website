import 'server-only'

const dictionaries = {
  sq: () => import('../../../public/locales/sq/common.json').then(module => module.default),
  it: () => import('../../../public/locales/it/common.json').then(module => module.default),
}

export const getDictionary = async (locale: string) => {
  if (locale !== 'sq' && locale !== 'it') {
    return dictionaries['sq']();
  }
  return dictionaries[locale]();
}
