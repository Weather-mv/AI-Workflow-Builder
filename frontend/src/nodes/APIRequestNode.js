// frontend/src/nodes/APIRequestNode.js
import { BaseNode } from './BaseNode';

export const APIRequestNode = ({ id }) => (
  <BaseNode
    id={id}
    title="API Request"
    inputHandles={[{ id: 'params' }]}
    outputHandles={[{ id: 'response' }]}
  >
    <input placeholder="https://api.example.com" style={{ width: '100%' }} />
  </BaseNode>
);