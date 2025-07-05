# backend/main.py
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Dict
from collections import defaultdict

app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Your React app's origin
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Node(BaseModel):
    id: str
    type: str
    data: Dict = {}
    position: Dict

class Edge(BaseModel):
    id: str
    source: str
    target: str
    sourceHandle: str = None
    targetHandle: str = None

class PipelineRequest(BaseModel):
    nodes: List[Node]
    edges: List[Edge]

def is_dag(nodes: List[Node], edges: List[Edge]) -> bool:
    graph = defaultdict(list)
    in_degree = {node.id: 0 for node in nodes}
    
    for edge in edges:
        if edge.source in in_degree and edge.target in in_degree:
            graph[edge.source].append(edge.target)
            in_degree[edge.target] += 1
    
    queue = [node.id for node in nodes if in_degree[node.id] == 0]
    count = 0
    
    while queue:
        u = queue.pop(0)
        count += 1
        
        for v in graph[u]:
            in_degree[v] -= 1
            if in_degree[v] == 0:
                queue.append(v)
    
    return count == len(nodes)

@app.post("/pipelines/parse")
async def parse_pipeline(request: PipelineRequest):
    try:
        return {
            "num_nodes": len(request.nodes),
            "num_edges": len(request.edges),
            "is_dag": is_dag(request.nodes, request.edges)
        }
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))