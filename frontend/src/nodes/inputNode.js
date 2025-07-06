// frontend/src/nodes/inputNode.js
import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data.inputType || 'Text');

  const handleNameChange = (e) => setCurrName(e.target.value);
  const handleTypeChange = (e) => setInputType(e.target.value);

  return (
    <BaseNode 
      id={id}
      
      title="Input"
      outputHandles={[{ id: 'value' }]}
      
    >
      <div className='base-node'>
        <label>
          Name:
          <input className='input-box' type="text" value={currName} onChange={handleNameChange} />
        </label>
        <label>
          Type:
          <select className='type-box' value={inputType} onChange={handleTypeChange}>
            <option value="Text">Text</option>
            <option value="File">File</option>
          </select>
        </label>
      </div>
    </BaseNode>
  );
};