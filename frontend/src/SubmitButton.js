import React from 'react';
import { useReactFlow } from 'reactflow';
import { submitPipeline } from './submit';

// Only use this inside ReactFlowProvider!
export const SubmitButton = () => {
  const { getNodes, getEdges } = useReactFlow();

  const handleSubmit = async () => {
    const nodes = getNodes();
    const edges = getEdges();
    
    if (nodes.length === 0) {
      alert("Please add at least one node");
      return;
    }

    try {
      const result = await submitPipeline(nodes, edges);
      alert(`Nodes: ${result.num_nodes}, Edges: ${result.num_edges}, Is DAG: ${result.is_dag}`);
    } catch (error) {
      alert("Error submitting pipeline: " + error.message);
    }
  };

  return (
    <button 
      onClick={handleSubmit}
      style={{
        padding: '8px 16px',
        background: '#4f46e5',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        position: 'absolute',
        right: '20px',
        bottom: '20px',
        zIndex: 10
      }}
    >
      Analyze Pipeline
    </button>
  );
};