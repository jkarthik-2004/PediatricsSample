import React from 'react';

const PopupModal = ({ modalType, data, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full">
        <div className="border-b px-4 py-2 flex justify-between items-center">
          <h2 className="text-lg font-bold">
            {modalType === 'patient' ? 'Patient Details' : 'Action Details'}
          </h2>
          <button
            className="text-gray-600 hover:text-gray-800"
            onClick={onClose}
          >
            x
          </button>
        </div>
        <div className="p-4">
          {modalType === 'patient' ? (
            <div>
              <p><strong>Name:</strong> {data.patientName}</p>
              <p><strong>Contact:</strong> {data.contact}</p>
              <p><strong>Parent:</strong> {data.parent}</p>
              <p><strong>Immediate Actions:</strong> {data.immediateActions}</p>
              <p><strong>Due Date:</strong> {data.dueDate}</p>
            </div>
          ) : (
            <div>
              <p><strong>Action:</strong> {data.action}</p>
              <p><strong>Patient:</strong> {data.patient.patientName}</p>
            </div>
          )}
        </div>
        <div className="border-t px-4 py-2 flex justify-end">
          <button
            className="px-4 py-2 text-white bg-gray-600 rounded hover:bg-gray-700"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopupModal;
