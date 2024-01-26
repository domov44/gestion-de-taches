// src/App.js
import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Amplify } from 'aws-amplify';

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
Amplify.configure(awsExports);

const initialTasks = [
  { id: 'task-1', content: 'Tâche 1' },
  { id: 'task-2', content: 'Tâche 2' },
  { id: 'task-3', content: 'Tâche 3' },
];

const initialColumns = {
  'column-1': {
    id: 'column-1',
    title: 'À faire',
    taskIds: ['task-1', 'task-2', 'task-3'],
  },
  'column-2': {
    id: 'column-2',
    title: 'En cours',
    taskIds: [],
  },
};


export default function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <DragDropContext onDragEnd={onDragEnd}>
            {Object.values(columns).map((column) => (
              <Droppable droppableId={column.id} key={column.id}>
                {(provided) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    style={{
                      background: '#f5f5f5',
                      padding: 10,
                      margin: 10,
                      width: 250,
                    }}
                  >
                    <h2>{column.title}</h2>
                    {column.taskIds.map((taskId, index) => (
                      <Draggable
                        draggableId={taskId}
                        index={index}
                        key={taskId}
                      >
                        {(provided) => (
                          <div
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                            style={{
                              userSelect: 'none',
                              padding: 16,
                              margin: '0 0 8px 0',
                              backgroundColor: 'white',
                              border: '1px solid #ddd',
                              borderRadius: '4px',
                              ...provided.draggableProps.style,
                            }}
                          >
                            {tasks.find((task) => task.id === taskId).content}
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            ))}
          </DragDropContext>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  );
}