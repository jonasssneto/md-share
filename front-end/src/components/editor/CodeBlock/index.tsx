import { CodeBlockEditorDescriptor, useCodeBlockEditorContext } from "@mdxeditor/editor"

export const PlainTextCodeEditorDescriptor: CodeBlockEditorDescriptor = {
    match: () => true,
    priority: 0,
    Editor: (props) => {
      const cb = useCodeBlockEditorContext()
      return (
        <div onKeyDown={(e) => e.nativeEvent.stopImmediatePropagation()}>
          <textarea rows={3} cols={20} defaultValue={props.code} onChange={(e) => cb.setCode(e.target.value)} />
        </div>
      )
    }
  }