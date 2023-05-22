import "./editorSection.css";
// import { EditorSectionProps } from "../types/propTypes";
import Sidebar from "./Sidebar";
import TextEditor from "./TextEditor";
import Editor from "./Editor";

const EditorSection=()=> {

  return (
    <section className="editorSection">
      <main className="editorSection__toolbar_and_textarea">
        <Editor/>
        <TextEditor/>
      </main>
      <Sidebar />
    </section>
  );
}

export default EditorSection;