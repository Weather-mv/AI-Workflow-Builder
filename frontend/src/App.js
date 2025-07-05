import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './SubmitButton';
import { useState } from 'react';
import { ReactFlowProvider } from 'reactflow';

function App() {
  // Initialize state (remove setNodes/setEdges if not used elsewhere)
  const [nodes] = useState([]);
  const [edges] = useState([]);

  // If you're not modifying nodes/edges in this component,
  // you can simplify further:
  // const nodes = [];
  // const edges = [];

  return (
    <ReactFlowProvider>
      <PipelineToolbar />
      <PipelineUI />
      <SubmitButton nodes={nodes} edges={edges} />
    </ReactFlowProvider>
  );
}

export default App;