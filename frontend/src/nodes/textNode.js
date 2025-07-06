import { useState, useEffect, useRef } from 'react';
import { Handle, Position } from 'reactflow';
import { BaseNode } from '../nodes/BaseNode';

export const TextNode = ({ id, data }) => {
  const [text, setText] = useState(data?.text || '{{input}}');
  const [variables, setVariables] = useState([]);
  const textareaRef = useRef(null);

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [text]);

  // Detect variables like {{var}}
  useEffect(() => {
    const matches = text.match(/\{\{\s*(\w+)\s*\}\}/g) || [];
    const uniqueVars = [...new Set(matches.map(v => v.replace(/\{\{\s*|\s*\}\}/g, '')))];
    setVariables(uniqueVars);
  }, [text]);

  return (
    <BaseNode
      id={id}
      title="Text"
      inputHandles={variables.map((varName, idx) => ({
        id: varName,
        style: { top: `${((idx + 1) * 100) / (variables.length + 1)}%` }
      }))}
      outputHandles={[{ id: 'output' }]}
      style={{ minWidth: '200px' }}
    >
      <textarea
        ref={textareaRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{
          width: '100%',
          minHeight: '60px',
          resize: 'none',
          border: '1px solid #e2e8f0',
          color:'white',
          borderRadius: '4px',
          background:'transparent'
        }}
        placeholder="Enter text with {{variables}}..."
      />
      {variables.length > 0 && (
        <div style={{ fontSize: '12px', color: '#64748b', marginTop: '8px' }}>
          Variables: {variables.join(', ')}
        </div>
      )}
    </BaseNode>
  );
};