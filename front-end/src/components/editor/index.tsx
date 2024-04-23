import { MDXEditor, MDXEditorProps } from "@mdxeditor/editor";
import "@mdxeditor/editor/style.css";
import { rest, toolbar } from "./ToolBar";

export function Editor({ ...props }: MDXEditorProps) {
  return (
    <>
      <MDXEditor plugins={[...rest, toolbar]} {...props} />
    </>
  );
}
