import './code-editor.css';
import { useRef } from 'react';
// import MonacoEditor from '@monaco-editor/react';
import Editor from "@monaco-editor/react";
import prettier from 'prettier';
import parser from 'prettier/parser-babel';

interface CodeEditorProps {
  initialValue: string;
  onChange(value: string): void;
}
// const CodeEditor = () =>{
//   return <Editor theme="vs-dark" language='javascript' height='500px'/>
// }
const CodeEditor: React.FC<CodeEditorProps> = ({ onChange, initialValue }) => {
  const editorRef = useRef<any>();

  // const onEditorDidMount: EditorDidMount = (getValue, monacoEditor) => {
  //   editorRef.current = monacoEditor;
  //   monacoEditor.onDidChangeModelContent(() => {
  //     onChange(getValue());
  //   });

  //   monacoEditor.getModel()?.updateOptions({ tabSize: 2 });
  // };
  function handleEditorDidMount(editor: any, _monaco: any) {
    editorRef.current = editor; 
  }
  function handleEditorChange(_value: any, _event: any) {
    // console.log("here is the current model value:", value);
    onChange(editorRef.current.getValue())
  }
  const onFormatClick = () => {
    // get current value from editor
    // const unformatted = editorRef.current.getModel().getValue();
    const unformatted = editorRef.current.getValue()

    // format that value
    const formatted = prettier
      .format(unformatted, {
        parser: 'babel',
        plugins: [parser],
        useTabs: false,
        semi: true,
        singleQuote: true,
      })
      .replace(/\n$/, '');

    // set the formatted value back in the editor
    editorRef.current.setValue(formatted);
  };

  return (
    <div className="editor-wrapper">
      <button
        className="button button-format is-primary is-small"
        onClick={onFormatClick}
      >
        Format
      </button>
      <Editor
        onMount={handleEditorDidMount}
        value={initialValue}
        theme="vs-dark"
        language="javascript"
        height="100%"
        onChange={handleEditorChange}
        options={{
          wordWrap: 'on',
          minimap: { enabled: false },
          showUnused: false,
          folding: false,
          lineNumbersMinChars: 3,
          fontSize: 16,
          scrollBeyondLastLine: false,
          automaticLayout: true,
        }}
      />
    </div>
  );
};

export default CodeEditor;
