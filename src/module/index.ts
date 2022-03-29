/**
 * @description module entry
 * @author wangfupeng
 */

import { IModuleConf } from '@wangeditor/editor'

import withMarkdown from './plugin'

const module: Partial<IModuleConf> = {
  editorPlugin: withMarkdown,
}

export default module
