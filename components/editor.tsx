"use client";

import { BlockNoteEditor } from "@blocknote/core";
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import "@blocknote/core/style.css";

interface Props {
  onEditorChange: (blocknote: BlockNoteEditor) => void;
}

const Editor = ({ onEditorChange }: Props) => {
  const editor: BlockNoteEditor = useBlockNote({
    onEditorContentChange: onEditorChange,
  });

  return <BlockNoteView editor={editor} theme="light" />;
};

export default Editor;
