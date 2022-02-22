/**
 * @description plugin test
 * @author wangfupeng
 */

import { SlateEditor, IDomEditor } from '@wangeditor/editor'
import createEditor from '../utils/create-editor'
import withMarkdown from '../../src/module/plugin'

describe('markdown plugin', () => {
  let editor = withMarkdown(createEditor({}))
  function getStartLocation(editor: IDomEditor) {
    return SlateEditor.start(editor, [])
  }

  beforeEach(() => {
    editor = withMarkdown(createEditor({}))
  })

  it('header', () => {
    editor.select(getStartLocation(editor))
    editor.insertText('##')
    editor.insertText(' ')
    expect(editor.children).toEqual([
      {
        type: 'header2',
        children: [{ text: '' }],
      },
    ])
  })

  it('blockquote', () => {
    editor.select(getStartLocation(editor))
    editor.insertText('>')
    editor.insertText(' ')
    expect(editor.children).toEqual([
      {
        type: 'blockquote',
        children: [{ text: '' }],
      },
    ])
  })

  it('list-item', () => {
    editor.select(getStartLocation(editor))
    editor.insertText('-')
    editor.insertText(' ')
    expect(editor.children).toEqual([
      {
        type: 'bulleted-list',
        children: [
          {
            type: 'list-item',
            children: [{ text: '' }],
          },
        ],
      },
    ])
  })

  it('divider', () => {
    editor.select(getStartLocation(editor))
    editor.insertText('---')
    editor.insertBreak()
    expect(editor.children).toEqual([
      {
        type: 'divider',
        children: [{ text: '' }],
      },
      {
        type: 'paragraph',
        children: [{ text: '' }],
      },
    ])
  })

  it('pre/code', () => {
    editor.select(getStartLocation(editor))
    editor.insertText('```js')
    editor.insertBreak()
    expect(editor.children).toEqual([
      {
        type: 'paragraph',
        children: [
          {
            text: '',
          },
        ],
      },
      {
        type: 'pre',
        children: [
          {
            type: 'code',
            language: 'javascript',
            children: [
              {
                text: '',
              },
            ],
          },
        ],
      },
      {
        type: 'paragraph',
        children: [
          {
            text: '',
          },
        ],
      },
    ])
  })
})
