import React from 'react';

const CodeTypeSelector = ({ selectedCodeType, onChange }) => {
  const codeOptions = [
    { label: 'CSS', value: 'css' },
    { label: 'JavaScript', value: 'javascript' },
    { label: 'HTML', value: 'html' },
  ];

  return (
    <select value={selectedCodeType} onChange={(e) => onChange(e.target.value)}>
      {codeOptions.map(option => (
        <option key={option.value} value={option.value}>{option.label}</option>
      ))}
    </select>
  );
};

export default CodeTypeSelector;
