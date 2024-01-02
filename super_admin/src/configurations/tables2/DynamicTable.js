import React, { useState } from 'react';
import TableStyle from './TableStyle';

function DynamicTable({ config, data, onEdit, onDelete }) {
  const [editableRow, setEditableRow] = useState(null);

  const handleEdit = (row) => {
    setEditableRow(row);
  };

  const handleSave = async () => {
    try {
      // Perform the save action (e.g., API call to update data)
      await fetch(`/api/update/${editableRow.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editableRow),
      });

      // Update the UI by calling the onEdit callback
      onEdit(editableRow);

      // Reset the editable row state
      setEditableRow(null);
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  const handleCancelEdit = () => {
    // Reset the editable row state without saving changes
    setEditableRow(null);
  };

  const handleDelete = async (row) => {
    try {
      // Perform the deletion action (e.g., API call to delete data)
      await fetch(`/api/delete/${row.id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // Update the UI by calling the onDelete callback
      onDelete(row);
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  return (
    <div>
      <table className='mx-4'>
        <thead>
          <tr>
            {config.map((column) => (
              <th key={column.name} className={TableStyle[column.clmncss]}>
                {column.label}
              </th>
            ))}
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {config.map((column) => (
                <td key={column.name} className={TableStyle[column.cssClass]}>
                  {column.dataType === 'number'
                    ? parseFloat(row[column.name]).toFixed()
                    : row[column.name]}
                </td>
              ))}
              <td className={`${TableStyle.datastyle} flex space-x-2`}>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleEdit(row)}>Edit</button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleDelete(row)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editableRow && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="modal-container bg-black bg-opacity-50 absolute inset-0"></div>
        <div className="modal-box bg-white p-8 max-w-md mx-auto z-50 relative">
          {/* Display input fields for editing */}
          {config.map((column) => (
            <div key={column.name} className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                {column.label}
              </label>
              <input
                type="text"
                value={editableRow[column.name]}
                onChange={(e) =>
                  setEditableRow({
                    ...editableRow,
                    [column.name]: e.target.value,
                  })
                }
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            ))}
            {/* Save and Cancel buttons */}
            <button
            onClick={handleSave}
            className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
          >
            Save
          </button>
          <button
            onClick={handleCancelEdit}
            className="bg-gray-500 text-white px-4 py-2 rounded-md"
          >
            Cancel
          </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default DynamicTable;