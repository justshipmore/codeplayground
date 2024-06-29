"use client";

import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import { useEffect, useRef, useState } from "react";
import { Controlled as ControlledEditor } from "react-codemirror2";

// needed to avoid throwing a ReferenceError of navigator is not defined
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
  value,
  onChange,
}: {
  isVisible: boolean;
  language: string;
  value: string;
  onChange: any;
}) {
  const [isMounted, setMount] = useState(false); // Fix for hydration error from Next
  const editorRef = useRef();
  const wrapperRef = useRef();

  useEffect(() => {
    setMount(true);
  }, []);

  const onBeforeChange = (
    editor: CodeMirror.Editor,
    data: CodeMirror.EditorChange,
    value: string
  ) => onChange(value);

  if (!isVisible || !isMounted) return;
  return (
    <div className="bg-red-600 h-full">
      <ControlledEditor
        className="CodeMirrorWrapper"
        onBeforeChange={onBeforeChange}
        value={value}
        options={{
          lineWrapping: true,
          mode: language,
          theme: "material",
          lineNumbers: true,
          autofocus: true,
        }}
        // fix to remove duplicate editor bug in react-codemirror2: https://github.com/scniro/react-codemirror2/issues/284
        editorDidMount={(editorElement) => {
          (
            editorRef as unknown as React.MutableRefObject<CodeMirror.Editor>
          ).current = editorElement;
        }}
        // fix to remove duplicate editor bug in react-codemirror2: https://github.com/scniro/react-codemirror2/issues/284
        editorWillUnmount={() => {
          const editorWrapper = (
            editorRef as unknown as React.MutableRefObject<CodeMirror.Editor>
          ).current.getWrapperElement();
          if (editorWrapper) editorWrapper.remove();
          if (wrapperRef.current) {
            (wrapperRef.current as { hydrated: boolean }).hydrated = false;
          }
        }}
      />
    </div>
  );
}
