import { BaseNode } from './BaseNode';

export const llmNode = ({ id, data }) => (
  <BaseNode
    className='input-box'
    id={id}
    title="llm"
    inputHandles={[
      { id: 'system', style: { top: '33%' } },
      { id: 'prompt', style: { top: '66%' } }
    ]}
    outputHandles={[{ id: 'response' }]}
  >
    <div >
      <select className='llm-box' defaultValue="gpt-4" >
        <option value="gpt-4">GPT-4</option>
        <option value="claude-2">Claude 2</option>
      </select>
    </div>
  </BaseNode>
);