import React, { useState, useEffect, useRef } from 'react';
import { EditorState } from '@codemirror/state';
import { EditorView, keymap } from '@codemirror/view';
import { lineNumbers, highlightSpecialChars, drawSelection, dropCursor } from '@codemirror/view';
import { defaultKeymap, indentWithTab, history } from '@codemirror/commands';
import { oneDark } from '@codemirror/theme-one-dark';
import { css } from '@codemirror/lang-css';
import { javascript } from '@codemirror/lang-javascript';
import { html } from '@codemirror/lang-html';
import { closeBrackets, autocompletion } from '@codemirror/autocomplete';
import { indentOnInput } from '@codemirror/language';
import { lintKeymap, lintGutter, linter } from '@codemirror/lint';
/* import { CSSLint } from '../utils/CSSLinter'; */

const CodeEditor = ({ codeType, onChange }) => {
    const editor = useRef();
    const [code, setCode] = useState('');
  
    const onUpdate = EditorView.updateListener.of((v) => {
      setCode(v.state.doc.toString());
    });
    
    /* const onDiagnosticsChanged = EditorView.updateListener.of((update) => {
      if (update.diagnosticsChanged) {
        const errors = update.view.state.diagnostics.filter((d) => d.severity === 'error');
        if (errors.length >  0) {
          // Prevent saving if there are errors
          console.error('Syntax errors found, snippet cannot be saved.');
        } else {
          // Save the snippet if there are no errors
          console.log('No syntax errors, snippet can be saved.');
        }
      }
    }); */
    
    //TODO: Aggiungere altri linguaggi.
    const codeExtension = codeType === 'css' ? css() : codeType === 'javascript' ? javascript() : html();
    /* const cssLinter = CSSLint(); */
    const initialContent = 'Crea uno Snippet CSS'.repeat(1) + '\n'.repeat(9);
    
    useEffect(() => {
      const state = EditorState.create({
        doc: initialContent,
        extensions: [
            keymap.of([defaultKeymap, indentWithTab, ...lintKeymap]),
            lineNumbers(),
            highlightSpecialChars(),
            drawSelection(),
            dropCursor(),
            oneDark,
            codeExtension,
            history(),
            closeBrackets(),
            autocompletion(),
            indentOnInput(),
            /* linter(cssLinter), */
            lintGutter(),
            /* onDiagnosticsChanged, */
            onUpdate,
          ],
      });

      const view = new EditorView({ state, parent: editor.current });
  
      return () => {
        view.destroy();
      };
    }, []);
  
    return <div ref={editor}></div>;
};

export default CodeEditor;
