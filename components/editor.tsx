import { BlockNoteEditor } from "@blocknote/core";
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import "@blocknote/core/style.css";

const Editor = () => {
  const editor: BlockNoteEditor = useBlockNote({});

  return <BlockNoteView editor={editor} />;
};

export default Editor;
