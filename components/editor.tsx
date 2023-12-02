"use client";

import { BlockNoteEditor } from "@blocknote/core";
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import "@blocknote/core/style.css";
import { useEffect, useState } from "react";

interface Props {
  onEditorChange: (blocknote: BlockNoteEditor) => void;
  editable?: boolean;
}

const Editor = ({ onEditorChange, editable }: Props) => {
  const [client, setClient] = useState(false);

  useEffect(() => {
    setClient(true);
  }, []);

  const editor: BlockNoteEditor = useBlockNote({
    editable,
    onEditorContentChange: onEditorChange,
  });
  if (!client) {
    return null;
  }
  return <BlockNoteView editor={editor} theme="light" />;
};

export default Editor;
