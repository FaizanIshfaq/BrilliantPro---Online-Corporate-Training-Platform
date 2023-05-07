import React, { useState } from 'react';

const ManageMaterials = () => {
  const [materials, setMaterials] = useState([]);

  const handleAddMaterial = (event) => {
    event.preventDefault();
    // Add material logic
  };

  const handleDeleteMaterial = (materialId) => {
    // Delete material logic
  };

  const handleEditMaterial = (materialId) => {
    // Edit material logic
  };

  return (
    <div>
      <h2>Manage Materials</h2>
      <form onSubmit={handleAddMaterial}>
        <label>
          Material Name:
          <input type="text" name="name" />
        </label>
        <label>
          Material Description:
          <input type="text" name="description" />
        </label>
        <button type="submit">Add Material</button>
      </form>
      <ul>
        {materials.map((material) => (
          <li key={material.id}>
            <h3>{material.name}</h3>
            <p>{material.description}</p>
            <button onClick={() => handleEditMaterial(material.id)}>Edit</button>
            <button onClick={() => handleDeleteMaterial(material.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageMaterials;
