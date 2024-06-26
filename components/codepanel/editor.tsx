import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";

// need to avoid throwing a ReferenceError of navigator is not defined
let languageLoaded = false;
if (typeof window !== "undefined" && typeof window.navigator !== "undefined") {
  require("codemirror/mode/xml/xml");
  require("codemirror/mode/css/css");
  require("codemirror/mode/javascript/javascript");
  languageLoaded = true;
}

export default function Editor({
  isVisible,
  language,
}: {
  isVisible: boolean;
  language: string;
}) {
  if (!isVisible) return;
  return <p>Content goes here for {language} </p>;
}
