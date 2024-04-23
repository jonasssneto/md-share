import "@mdxeditor/editor/style.css";
import { Editor } from "./components/editor";

export function App() {
  return (
    <>
      <div className="" style={{ margin: "22px" }}>
        <Editor markdown="" placeholder="Type some content" readOnly={false} />
      </div>
    </>
  );
}
