import { AutoLinkPlugin } from "@lexical/react/LexicalAutoLinkPlugin";
import { EMAIL_MATCHER, URL_MATCHER } from "../constant";

const MATCHERS = [
  (text: string) => {
    const match = URL_MATCHER.exec(text);
    return (
      match && {
        index: match.index,
        length: match[0].length,
        text: match[0],
        url: match[0]
      }
    );
  },
  (text: string) => {
    const match = EMAIL_MATCHER.exec(text);
    return (
      match && {
        index: match.index,
        length: match[0].length,
        text: match[0],
        url: `mailto:${match[0]}`
      }
    );
  }
];

export default function PlaygroundAutoLinkPlugin() {
  return <AutoLinkPlugin matchers={MATCHERS as any} />;
}
