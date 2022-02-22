import { SlateElement, SlateDescendant } from '@wangeditor/editor'

declare module '@wangeditor/editor' {
  interface SlateElement {
    type: string
    children: SlateDescendant[]
  }
}
