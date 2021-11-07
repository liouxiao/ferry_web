import defaultSettings from '@/settings'
import i18n from '@/lang'

var title = defaultSettings.title || 'ferry 管理平台'

export default function getPageTitle(pageTitle, globalTitle) {
  if (globalTitle !== undefined && globalTitle !== null) {
    title = globalTitle
  }
  if (i18n.te(`route.${pageTitle}`)) {
    const pageName = i18n.t(`route.${pageTitle}`)
    return `${pageName} - ${title}`
  }
  return `${title}`
}
