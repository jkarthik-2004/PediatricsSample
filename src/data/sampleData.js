const sampleData = [
    {
      id: 1,
      patientName: 'John Doe',
      contact: '123-456-7890',
      parent: 'Jane Doe',
      immediateActions: 'Needs Vaccine',
      dueDate: '2024-12-30',
      actions: ['Vaccines', 'Follow-up', 'Lab Tests']
    },
    {
      id: 2,
      patientName: 'Alice Smith',
      contact: '987-654-3210',
      parent: 'Robert Smith',
      immediateActions: 'Lab Pending',
      dueDate: '2024-12-31',
      actions: ['Vaccines', 'Follow-up']
    },
    {
      id: 3,
      patientName: 'Tom Brown',
      contact: '456-123-7890',
      parent: 'Laura Brown',
      immediateActions: 'Follow-up Required',
      dueDate: '2024-12-25',
      actions: ['Lab Tests', 'Vaccines']
    },
    {
      id: 4,
      patientName: 'Emily Davis',
      contact: '321-654-9870',
      parent: 'Michael Davis',
      immediateActions: 'Regular Checkup',
      dueDate: '2024-12-28',
      actions: ['Follow-up']
    },
    {
      id: 5,
      patientName: 'Henry Wilson',
      contact: '555-666-7777',
      parent: 'Sara Wilson',
      immediateActions: 'Needs Consultation',
      dueDate: '2024-12-29',
      actions: ['Consultation', 'Follow-up']
    },
    {
      id: 6,
      patientName: 'Sophia Martinez',
      contact: '777-888-9999',
      parent: 'Carlos Martinez',
      immediateActions: 'Lab Results Pending',
      dueDate: '2024-12-26',
      actions: ['Lab Tests', 'Follow-up']
    },
    {
      id: 7,
      patientName: 'Oliver Garcia',
      contact: '111-222-3333',
      parent: 'Maria Garcia',
      immediateActions: 'Requires New Prescription',
      dueDate: '2024-12-24',
      actions: ['Prescription', 'Vaccines']
    },
    {
      id: 8,
      patientName: 'Charlotte Lee',
      contact: '444-555-6666',
      parent: 'David Lee',
      immediateActions: 'Missed Appointment',
      dueDate: '2024-12-20',
      actions: ['Follow-up', 'Vaccines']
    },
    {
      id: 9,
      patientName: 'Lucas Miller',
      contact: '999-888-7777',
      parent: 'Emma Miller',
      immediateActions: 'Needs Blood Test',
      dueDate: '2024-12-18',
      actions: ['Lab Tests', 'Follow-up']
    },
    {
      id: 10,
      patientName: 'Mia Harris',
      contact: '222-333-4444',
      parent: 'Ethan Harris',
      immediateActions: 'Scheduled Surgery',
      dueDate: '2024-12-27',
      actions: ['Consultation', 'Lab Tests']
    },
    {
      id: 11,
      patientName: 'James Clark',
      contact: '666-555-4444',
      parent: 'Lisa Clark',
      immediateActions: 'Annual Checkup',
      dueDate: '2024-12-23',
      actions: ['Vaccines']
    },
    {
      id: 12,
      patientName: 'Amelia Lopez',
      contact: '333-444-5555',
      parent: 'Oscar Lopez',
      immediateActions: 'Follow-up Required',
      dueDate: '2024-12-19',
      actions: ['Follow-up']
    },
    {
      id: 13,
      patientName: 'Ethan Gonzalez',
      contact: '888-777-6666',
      parent: 'Natalie Gonzalez',
      immediateActions: 'Needs Referral',
      dueDate: '2024-12-21',
      actions: ['Consultation']
    },
    {
      id: 14,
      patientName: 'Ava Rodriguez',
      contact: '555-444-3333',
      parent: 'Isabella Rodriguez',
      immediateActions: 'New Patient Consultation',
      dueDate: '2024-12-22',
      actions: ['Vaccines', 'Consultation']
    },
    {
      id: 15,
      patientName: 'William Walker',
      contact: '777-666-5555',
      parent: 'Victoria Walker',
      immediateActions: 'Follow-up on Lab Tests',
      dueDate: '2024-12-17',
      actions: ['Lab Tests', 'Follow-up']
    },
    {
      id: 16,
      patientName: 'Ella Hall',
      contact: '999-000-1111',
      parent: 'Andrew Hall',
      immediateActions: 'Missed Follow-up',
      dueDate: '2024-12-16',
      actions: ['Follow-up']
    },
    {
      id: 17,
      patientName: 'Benjamin Young',
      contact: '111-999-8888',
      parent: 'Sophia Young',
      immediateActions: 'Blood Test Pending',
      dueDate: '2024-12-15',
      actions: ['Lab Tests']
    },
    {
      id: 18,
      patientName: 'Grace King',
      contact: '444-111-2222',
      parent: 'Samuel King',
      immediateActions: 'New Appointment Scheduled',
      dueDate: '2024-12-14',
      actions: ['Consultation', 'Vaccines']
    },
    {
      id: 19,
      patientName: 'Michael Wright',
      contact: '666-333-2222',
      parent: 'Madeline Wright',
      immediateActions: 'Requires Physical Therapy',
      dueDate: '2024-12-13',
      actions: ['Consultation']
    },
    {
      id: 20,
      patientName: 'Lily Baker',
      contact: '333-111-4444',
      parent: 'Jonathan Baker',
      immediateActions: 'Emergency Follow-up',
      dueDate: '2024-12-12',
      actions: ['Follow-up', 'Lab Tests']
    }
  ];
  
  export default sampleData;
  