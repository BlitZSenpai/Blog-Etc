"use client";

import { BlockNoteEditor, PartialBlock } from "@blocknote/core";
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import "@blocknote/core/style.css";
import { useEffect, useState } from "react";
import { useEdgeStore } from "@/lib/edgestore";

interface Props {
  onEditorChange?: (blocknote: BlockNoteEditor) => void;
  editable?: boolean;
  initialContent?: string;
}

const Editor = ({ onEditorChange, editable, initialContent }: Props) => {
  const [client, setClient] = useState(false);
  const { edgestore } = useEdgeStore();

  useEffect(() => {
    setClient(true);
  }, []);

  const handleFileUpload = async (file: File) => {
    const res = await edgestore.publicFiles.upload({
      file,
    });
    return res.url;
  };

  const editor: BlockNoteEditor = useBlockNote({
    editable,
    initialContent: initialContent ? (JSON.parse(initialContent) as PartialBlock[]) : undefined,
    onEditorContentChange: onEditorChange,
    uploadFile: handleFileUpload,
  });
  if (!client) {
    return null;
  }
  return <BlockNoteView editor={editor} theme="light" />;
};

export default Editor;
