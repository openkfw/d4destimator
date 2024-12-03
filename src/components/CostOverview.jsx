import React, {useState} from 'react';

const CostOverview = () => {
  const [staff, setStaff] = useState('');
  const [hardware, setHardware] = useState('');
  const [administration, setAdministration] = useState('');
  const [licences, setLicences] = useState('');

  const sum = [staff, hardware, administration, licences].reduce((acc, val) => acc + (parseFloat(val) || 0), 0);

  return (
    <table >
      <thead>
        <tr>
          <th>Cost Category</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Staff</td>
          <td><input type="text" placeholder="Enter value" value={staff} onChange={(e) => setStaff(e.target.value)} />€</td>
        </tr>
        <tr>
          <td>Hardware</td>
          <td><input type="text" placeholder="Enter value" value={hardware} onChange={(e) => setHardware(e.target.value)} />€</td>
        </tr>
        <tr>
          <td>Administration</td>
          <td><input type="text" placeholder="Enter value" value={administration} onChange={(e) => setAdministration(e.target.value)} />€</td>
        </tr>
        <tr>
          <td>Licences</td>
          <td><input type="text" placeholder="Enter value" value={licences} onChange={(e) => setLicences(e.target.value)} /> €</td>
        </tr>
        <tr>
          <td><strong>Total</strong></td>
          <td>{sum.toFixed(2)} €</td>
        </tr>
      </tbody>
    </table>
  );
};

export default CostOverview;