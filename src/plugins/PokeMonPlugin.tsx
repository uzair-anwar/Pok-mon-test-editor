import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $wrapNodeInElement, mergeRegister } from "@lexical/utils";
import {
  $createParagraphNode,
  $insertNodes,
  $isRootOrShadowRoot,
  COMMAND_PRIORITY_EDITOR,
  createCommand,
  LexicalCommand
} from "lexical";
import { useEffect } from "react";

import { PokeMonNode, PokeMonPayload, $createPokeMonNode } from "../node/PokeMonNode";

export type PokeMonPay = Readonly<PokeMonPayload>;

export const INSERT_IMAGE_COMMAND: LexicalCommand<PokeMonPay> = createCommand(
  "INSERT_IMAGE_COMMAND"
);

export default function PokeMonPlugin({
  captionsEnabled
}: {
  captionsEnabled?: boolean;
}): JSX.Element | null {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    if (!editor.hasNodes([PokeMonNode])) {
      throw new Error("PokeMonPlugin: PokeMonNode not registered on editor");
    }

    return mergeRegister(
      editor.registerCommand<PokeMonPayload>(
        INSERT_IMAGE_COMMAND,
        (payload) => {
          const PokeMonNode = $createPokeMonNode(payload);
          $insertNodes([PokeMonNode]);
          if ($isRootOrShadowRoot(PokeMonNode.getParentOrThrow())) {
            $wrapNodeInElement(PokeMonNode, $createParagraphNode).selectEnd();
          }

          return true;
        },
        COMMAND_PRIORITY_EDITOR
      )
    );
  }, [captionsEnabled, editor]);

  return null;
}
