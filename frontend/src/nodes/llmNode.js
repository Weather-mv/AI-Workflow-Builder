// frontend/src/nodes/llmNode.js
import { BaseNode } from './BaseNode';

export const llmNode = ({ id, data }) => (
  <BaseNode
    id={id}
    title="llm"
    inputHandles={[
      { id: 'system', style: { top: '33%' } },
      { id: 'prompt', style: { top: '66%' } }
    ]}
    outputHandles={[{ id: 'response' }]}
  >
    <div style={{ padding: '8px 0' }}>
      <select defaultValue="gpt-4" style={{ width: '100%' }}>
        <option value="gpt-4">GPT-4</option>
        <option value="claude-2">Claude 2</option>
      </select>
    </div>
  </BaseNode>
);