import React from 'react';
import TableComponent from './TableComponent'; // Import your configuration

const Table = () => {
  return (
    <table className={`${TableComponent.table} border-2`}>
      <thead>
        <tr className={`${TableComponent.headerRow}`}>
          <th className={TableComponent.headerCell}>Name</th>
          <th className={TableComponent.headerCell}>Email</th>
          <th className={TableComponent.headerCell}>Role</th>
        </tr>
      </thead>
      <tbody>
        <tr className={`${TableComponent.row} border-b-2`}>
          <td className={TableComponent.cell}>John Doe</td>
          <td className={TableComponent.cell}>john@example.com</td>
          <td className={TableComponent.cell}>User</td>
        </tr>
        <tr className={`${TableComponent.row} border-b-2`}>
          <td className={TableComponent.cell}>Jane Smith</td>
          <td className={TableComponent.cell}>jane@example.com</td>
          <td className={TableComponent.cell}>Admin</td>
        </tr>
        <tr className={`${TableComponent.row} border-b-2`}>
          <td className={TableComponent.cell}>Jane Smith</td>
          <td className={TableComponent.cell}>jane@example.com</td>
          <td className={TableComponent.cell}>Admin</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
