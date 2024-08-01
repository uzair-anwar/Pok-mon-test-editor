import { useEffect, useRef } from "react";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import TreeViewPlugin from "../plugins/TreeViewPlugin";
import ToolbarPlugin from "../plugins/ToolbarPlugin";
import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { TableCellNode, TableNode, TableRowNode } from "@lexical/table";
import { ListItemNode, ListNode } from "@lexical/list";
import { CodeHighlightNode, CodeNode } from "@lexical/code";
import { AutoLinkNode, LinkNode } from "@lexical/link";
import { LinkPlugin } from "@lexical/react/LexicalLinkPlugin";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import { MarkdownShortcutPlugin } from "@lexical/react/LexicalMarkdownShortcutPlugin";
import { TRANSFORMERS } from "@lexical/markdown";
import { createEditor, LexicalEditor } from 'lexical';

import ListMaxIndentLevelPlugin from "../plugins/ListMaxIndentLevelPlugin";
import CodeHighlightPlugin from "../plugins/CodeHighlightPlugin";
import AutoLinkPlugin from "../plugins/AutoLinkPlugin";
import ErrorBoundary from "./ErrorBoundary";
import PokemonPlugin from "../plugins/PokeMonPlugin";
import PokemonComponent from "../node/PokeMonComponent";
import ExampleTheme from "../themes/ExampleTheme";
import ImagePlugin from "../plugins/PokeMonPlugin";
import { PokeMonNode } from "../node/PokeMonNode";
import PokeMon from "./PokeMon";

function Placeholder() {
  return <div className="editor-placeholder">Enter some rich text...</div>;
}

const editorConfig = {
  namespace: 'MyEditor',
  theme: ExampleTheme,
  editable: true,
  onError(error: any) {
    throw error;
  },
  nodes: [
    HeadingNode,
    ListNode,
    ListItemNode,
    QuoteNode,
    CodeNode,
    CodeHighlightNode,
    TableNode,
    TableCellNode,
    TableRowNode,
    AutoLinkNode,
    LinkNode,
    PokeMonNode,
  ],
  nodeRenderers: {
    PokemonNode: PokemonComponent,
  }
};

export default function Editor() {
  const editorRef = useRef<LexicalEditor | null>(null);


  useEffect(() => {
    const editor = createEditor({
      ...editorConfig,
      editable: true,
    });
    editorRef.current = editor;
  }, []);

  return (
    <LexicalComposer initialConfig={{...editorConfig,}}>
      <div className="editor-container">
        <ToolbarPlugin />
        <div className="editor-inner">
        <RichTextPlugin
            contentEditable={<ContentEditable className="editor-input" />}
            placeholder={<Placeholder />}
            ErrorBoundary={ErrorBoundary}
          />
          <HistoryPlugin />
          <TreeViewPlugin />
          <AutoFocusPlugin />
          <CodeHighlightPlugin />
          <ListPlugin />
          <LinkPlugin />
          <AutoLinkPlugin />
          <ImagePlugin />
          <PokemonPlugin />
          <ListMaxIndentLevelPlugin maxDepth={7} />
          <MarkdownShortcutPlugin transformers={TRANSFORMERS} />
        </div>
      </div>
      <div>
        <h2>PokeMon List</h2>
        <PokeMon />
      </div>
    </LexicalComposer>
  );
}
