// frontend/src/nodes/FileUploadNode.js
import { BaseNode } from './BaseNode';

export const FileUploadNode = ({ id }) => (
  <BaseNode
    id={id}
    title="File Upload"
    outputHandles={[{ id: 'file' }]}
  >
    <button style={{ width: '100%' }}>Click to Upload</button>
  </BaseNode>
);