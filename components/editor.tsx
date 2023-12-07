"use client";

import { BlockNoteEditor, PartialBlock } from "@blocknote/core";
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import "@blocknote/core/style.css";
import { useEffect, useState } from "react";

interface Props {
  onEditorChange?: (blocknote: BlockNoteEditor) => void;
  editable?: boolean;
  initialContent?: string;
}

const Editor = ({ onEditorChange, editable, initialContent }: Props) => {
  const [client, setClient] = useState(false);

  useEffect(() => {
    setClient(true);
  }, []);

  const editor: BlockNoteEditor = useBlockNote({
    editable,
    initialContent: initialContent ? (JSON.parse(initialContent) as PartialBlock[]) : undefined,
    onEditorContentChange: onEditorChange,
  });
  if (!client) {
    return null;
  }
  return <BlockNoteView editor={editor} theme="light" />;
};

export default Editor;
