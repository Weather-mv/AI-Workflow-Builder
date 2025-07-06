// Updated BaseNode.js
import { Handle, Position } from 'reactflow';

const nodeStyles = {
  base: {
    minWidth: '200px',
    borderRadius: '16px',
    padding: '20px',
    background: 'linear-gradient(360deg, #020104, #230C59)',
    
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    border: '1px solid #e2e8f0',
    fontFamily: 'Inter, sans-serif',
  },
  header: {
    fontWeight: '600',
    color: '#7E64D5',
    borderBottom: '1px solidrgb(60, 132, 203)',
    paddingBottom: '8px',
    marginBottom: '12px',
  },
};

export const BaseNode = ({ id, title, children, inputHandles = [], outputHandles = [], style = {} }) => {
  return (
    <div style={{ ...nodeStyles.base, ...style, }}>
      <div style={nodeStyles.header}>{title}</div>
      {children}
      
      {inputHandles.map((handle, idx) => (
        <Handle
          key={`${id}-${handle.id}`}
          type="target"
          position={Position.Left}
          id={`${id}-${handle.id}`}
          style={{ ...handle.style, backgroundColor: '#64748b' }}
        />
      ))}
      
      {outputHandles.map((handle) => (
        <Handle
          key={`${id}-${handle.id}`}
          type="source"
          position={Position.Right}
          id={`${id}-${handle.id}`}
          style={{ ...handle.style, backgroundColor: '#64748b' }}
        />
      ))}
    </div>
  );
};