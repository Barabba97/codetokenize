import stylelint from 'stylelint';
import { css as cssLanguage } from '@codemirror/lang-css';

export function CSSLint(config) {
  return (view) => {
    const { state } = view;
    const found = [];

    for (let { from, to } of cssLanguage.findRegions(state)) {
      const fromLine = state.doc.lineAt(from);
      const offset = { line: fromLine.number -  1, col: from - fromLine.from, pos: from };
      const cssCode = state.sliceDoc(from, to);

      stylelint.lint({
        code: cssCode,
        config: config,
        syntax: 'css',
      }).then((result) => {
        if (result.errored) {
          for (const message of result.results[0].warnings) {
            const start = mapPos(message.line, message.column, state.doc, offset);
            const end = mapPos(message.line, message.column + message.text.length, state.doc, offset);
            found.push({
              from: start,
              to: end,
              message: message.text,
              severity: message.severity === 'error' ? 'error' : 'warning',
            });
          }
        }
      });
    }

    return found;
  };
}

function mapPos(line, col, doc, offset) {
  return doc.line(line + offset.line).from + col + (line ===  1 ? offset.col -  1 : -1);
}
