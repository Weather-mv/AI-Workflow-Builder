// frontend/src/nodes/MathNode.js
import { BaseNode } from './BaseNode';

export const MathNode = ({ id }) => (
  <BaseNode
    id={id}
    title="Math"
    inputHandles={[
      { id: 'a', style: { top: '30%' } },
      { id: 'b', style: { top: '70%' } }
    ]}
    outputHandles={[{ id: 'result' }]}
  >
    <select defaultValue="add" style={{ width: '100%' }}>
      <option value="add">A + B</option>
      <option value="subtract">A - B</option>
    </select>
  </BaseNode>
);