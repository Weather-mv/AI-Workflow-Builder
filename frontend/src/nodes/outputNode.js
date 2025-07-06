import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data.outputType || 'Text');

  return (
    <BaseNode
      id={id}
      title="Output"
      inputHandles={[{ id: 'value' }]}
    >
      <div className='base-node'>
        <label>
          Name:
          <input className='input-box' type="text" value={currName} onChange={(e) => setCurrName(e.target.value)} />
        </label>
        <label>
          Type:
          <select className='type-box' value={outputType} onChange={(e) => setOutputType(e.target.value)}>
            <option value="Text">Text</option>
            <option value="Image">Image</option>
          </select>
        </label>
      </div>
    </BaseNode>
  );
};