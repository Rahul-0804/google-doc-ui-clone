import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import "draft-js/dist/Draft.css";
import "./texteditor.css";

import { useEffect } from "react";

const TextEditor=()=>{
  return (
    <div className="editor">
      <div className="editor__page">
        <Editor
          toolbarHidden
          placeholder="Type @ to insert"
        />
      </div>
    </div>
  );
}

export default TextEditor;