// frontend/src/nodes/DebugNode.js
import { BaseNode } from './BaseNode';

export const DebugNode = ({ id }) => (
  <BaseNode
    id={id}
    title="Debug"
    inputHandles={[{ id: 'input' }]}
    style={{ backgroundColor: '#fff8e1' }}
  >
    <div style={{ fontFamily: 'monospace', fontSize: '12px' }}>
      Logs input to console
    </div>
  </BaseNode>
);