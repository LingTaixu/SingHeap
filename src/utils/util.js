import get from './util.get'
import editor from './util.editor'

const util = {
  get,
  editor
}

/**
 * @description 更新标题
 * @param {String} title 标题
 */

util.title = function (titleText) {
  const processTitle = process.env.VUE_APP_TITLE || '出错'
  window.document.title = `${processTitle}${titleText ? ` | ${titleText}` : ''}`
}

export default util
