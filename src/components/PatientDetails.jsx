import React, { useState } from 'react';
import PopupModal from './PopupModal';

const PatientDetails = ({ data }) => {
  const [modalData, setModalData] = useState(null);
  const [modalType, setModalType] = useState('');

  const handlePatientClick = (patient) => {
    setModalData(patient);
    setModalType('patient');
  };

  const handleActionClick = (action, patient) => {
    setModalData({ action, patient });
    setModalType('action');
  };

  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <table className="min-w-full border-collapse border border-gray-200 text-sm text-left text-gray-500">
        <thead className="bg-pink-600 text-white">
          <tr>
            <th className="px-4 py-2 border border-gray-200">Patient Name</th>
            <th className="px-4 py-2 border border-gray-200">Contact</th>
            <th className="px-4 py-2 border border-gray-200">Parent</th>
            <th className="px-4 py-2 border border-gray-200">Immediate Actions</th>
            <th className="px-4 py-2 border border-gray-200">Due Date</th>
            <th className="px-4 py-2 border border-gray-200">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((patient) => (
            <tr key={patient.id} className="bg-white even:bg-gray-50">
              <td className="px-4 py-2 border border-gray-200">
                <button
                  className="text-blue-600 underline"
                  onClick={() => handlePatientClick(patient)}
                >
                  {patient.patientName}
                </button>
              </td>
              <td className="px-4 py-2 border border-gray-200">{patient.contact}</td>
              <td className="px-4 py-2 border border-gray-200">{patient.parent}</td>
              <td className="px-4 py-2 border border-gray-200">{patient.immediateActions}</td>
              <td className="px-4 py-2 border border-gray-200">{patient.dueDate}</td>
              <td className="px-4 py-2 border border-gray-200">
                {patient.actions.map((action, index) => (
                  <button
                    key={index}
                    className="px-3 py-1 mx-1 text-sm font-medium text-white bg-blue-500 rounded hover:bg-blue-600"
                    onClick={() => handleActionClick(action, patient)}
                  >
                    {action}
                  </button>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {modalData && (
        <PopupModal
          modalType={modalType}
          data={modalData}
          onClose={() => setModalData(null)}
        />
      )}
    </div>
  );
};

export default PatientDetails;
