const sections = [
  {
    key: 'welcome-tutorial',
    title: 'Tutorial: Getting Started',
    intro: [
      'Welcome to the test!',
      'This is your tutorial on how the sections work.'
    ],
    lesson: [
      'In the lessons you will find information about the section topic.',
      'Follow the instructions and use the content to answer quiz questions that appear at the end of each section.'
    ],
    quiz: [
      {
        q: 'This is how the questions will look like after each section. Are you ready to begin?',
        options: ['Yes', 'No'],
        answer: 'Yes',
        hint: 'Answering Yes will allow you to continue to the first real section.'
      }
    ]
  },
  {
    key: 'video-intro',
    title: 'Introduction Overview',
    intro: [
      'This section introduces key concepts covered in the training with a brief video overview.'
    ],
    lesson: [
      { type: 'video', src: './video/BMSTrainingVideo.mp4', alt: 'Training Overview Video' },
      'Watch the video to understand the overall process before diving into detailed sections.'
    ],
    quiz: [
      {
        q: 'What is the purpose of this training?',
        options: [
          'A) To learn how to use a smartphone',
          'B) To understand warehouse operations and invoicing basics',
          'C) To practice typing',
          'D) To complete safety training'
        ],
        answer: 'B) To understand warehouse operations and invoicing basics',
        hint: 'The video highlights the main goals of the training.'
      },
      {
        q: 'Should you skip sections if you already know the material?',
        options: [
          'A) Yes',
          'B) No'
        ],
        answer: 'B) No',
        hint: 'Every section has unique material and questions.'
      }
    ]
  },
  {
    key: 'create-invoice',
    title: 'Section 1: Create an Invoice',
    intro: [
      'Welcome to BMS Training video on how to use the Group Invoice Batch screen in Softeon WMS to generate invoices for month-end billing.'
    ],
    lesson: [
      'This screen is designed to help you efficiently create invoices for multiple charges during month-end billing.',
      'Menu Path: Operations > Invoice > Group Invoice – Batch',
      { type: 'image', src: '/images/MenuPath.jpg', alt: 'Menu Path Screenshot' },
      'This screen provides a variety of filters to narrow down the records to be included in the invoice.'
    ],
    quiz: [
      {
        q: 'What is the menu path to create an invoice?',
        options: [
          'A) File > New > Invoice',
          'B) Billing > Create > Invoice',
          'C) Finance > New > Invoice',
          'D) Operations > Invoice > Group Invoice - Batch'
        ],
        answer: 'D) Operations > Invoice > Group Invoice - Batch',
        hint: 'Refer to the path shown in the lesson and MenuPath.jpg image.'
      },
      // Additional questions
      {
        q: 'What is the main purpose of the Group Invoice Batch screen?',
        options: [
          'A) To delete invoices',
          'B) To create invoices for multiple charges',
          'C) To print reports',
          'D) To update customer information'
        ],
        answer: 'B) To create invoices for multiple charges',
        hint: 'It is used for efficient month-end billing.'
      },
      {
        q: 'Which of the following is NOT a step in creating an invoice?',
        options: [
          'A) Setting filters',
          'B) Selecting records',
          'C) Sending emails',
          'D) Generating invoices'
        ],
        answer: 'C) Sending emails',
        hint: 'Focus on the steps described in the lesson.'
      }
    ]
  },
  {
    key: 'service-dates',
    title: 'Section 2: Service Date',
    intro: ['Learn how to set service date ranges for invoice filtering.'],
    lesson: [
      '1. Set the Serv Date From.',
      '2. Set the Serv Date To — these dates represent the transaction date range to be included in the invoice.',
      { type: 'image', src: '/images/HighLevelOverview.jpg', alt: 'High Level Overview' },
      '3. Press Query to pull the filtered records.'
    ],
    quiz: [
      {
        q: 'What do the Serv Date From and To dates represent?',
        options: [
          'A) The dates when the invoice was created',
          'B) The dates when the transactions occurred',
          'C) The dates when the record was modified',
          'D) The dates when the invoice is due'
        ],
        answer: 'B) The dates when the transactions occurred',
        hint: 'Think about what dates actually determine which records are included in the invoice.'
      },
      {
        q: 'Why is it important to set the correct service date range?',
        options: [
          'A) To include only relevant transactions',
          'B) To change invoice numbers',
          'C) To update customer addresses',
          'D) To print invoices'
        ],
        answer: 'A) To include only relevant transactions',
        hint: 'The date range filters which records are included.'
      },
      {
        q: 'What should you do after setting the service dates?',
        options: [
          'A) Press Query',
          'B) Log out',
          'C) Print the screen',
          'D) Change the menu path'
        ],
        answer: 'A) Press Query',
        hint: 'This action retrieves the filtered records.'
      }
    ]
  },
  {
    key: 'pull-records',
    title: 'Section 3: Records',
    intro: ['Pulling records is a key step in generating invoices.'],
    lesson: [
      { type: 'image', src: '/images/PullRecords.jpg', alt: 'Pull Records' },
      '1. Enter Business Unit (mandatory).',
      '2. Set Service Dates.',
      '3. Press Query to retrieve results.',
      'Review the record summary line to confirm the correct data has been pulled.'
    ],
    quiz: [
      {
        q: 'Which field is mandatory when pulling a record?',
        options: [
          'A) Business unit',
          'B) Invoice number',
          'C) Customer name',
          'D) Transaction type'
        ],
        answer: 'A) Business unit',
        hint: 'You won’t be able to pull any records without this key field.'
      },
      {
        q: 'What should you review after pulling records?',
        options: [
          'A) The record summary line',
          'B) The invoice comments',
          'C) The menu path',
          'D) The service date fields'
        ],
        answer: 'A) The record summary line',
        hint: 'This confirms the correct data has been pulled.'
      },
      {
        q: 'What happens if you do not enter a business unit?',
        options: [
          'A) The system will pull all records',
          'B) No records will be pulled',
          'C) The system will crash',
          'D) The invoice will be generated automatically'
        ],
        answer: 'B) No records will be pulled',
        hint: 'Business unit is a required field.'
      }
    ]
  },
  {
    key: 'invoice-process',
    title: 'Section 4: Invoice Generation Process',
    intro: [
      'Welcome to the invoice generation process tutorial.',
      'This section will walk you through the steps after pulling records.'
    ],
    lesson: [
      { type: 'image', src: '/images/AfterPullRecords.jpg', alt: 'After Pull Records' },
      '5. Select the record line.',
      '6. Enter Invoice Comments (optional).',
      '7. Set the Trial Invoice Flag to “Yes” — best practice for review.',
      '8. Press Generate Invoice — this will generate an Invoice Generation Instance ID.',
      { type: 'image', src: '/images/InvoiceGeneration.jpg', alt: 'Invoice Generation' }
    ],
    quiz: [
      {
        q: 'What is the purpose of setting the Trial Invoice Flag to "Yes"?',
        options: [
          'A) To generate a final invoice',
          'B) To review the invoice before finalization',
          'C) To skip the invoice generation process',
          'D) To automatically approve the invoice'
        ],
        answer: 'B) To review the invoice before finalization',
        hint: 'Think about the best practices for invoice review.'
      },
      {
        q: 'What is generated after pressing "Generate Invoice"?',
        options: [
          'A) A new customer record',
          'B) An Invoice Generation Instance ID',
          'C) A service date report',
          'D) A business unit summary'
        ],
        answer: 'B) An Invoice Generation Instance ID',
        hint: 'This ID is used to track the generated invoice.'
      },
      {
        q: 'Which step is optional in the invoice generation process?',
        options: [
          'A) Selecting the record line',
          'B) Entering invoice comments',
          'C) Setting the trial invoice flag',
          'D) Pressing Generate Invoice'
        ],
        answer: 'B) Entering invoice comments',
        hint: 'Comments are not required.'
      }
    ]
  },
  {
    key: 'congrats',
    title: 'Congratulations',
    intro: ['You have completed all the main training sections.'],
    labels: {
      lesson: null,
      quiz: null,
    },
  },
  {
    key: 'final-exam',
    title: 'Final Exam',
    intro: [
      'You’ve reached the final section of the training.',
      'This exam will review all the material covered. Take your time.'
    ],
    lesson: null,
    quiz: [
      {
        q: 'What must be done before generating an invoice?',
        options: [
          'A) Enter comments only',
          'B) Pull records and set the trial invoice flag',
          'C) Skip to the end',
          'D) Modify invoice number manually'
        ],
        answer: 'B) Pull records and set the trial invoice flag',
        hint: 'Remember the recommended steps before pressing generate.'
      },
      {
        q: 'What is the purpose of the Service Date From/To fields?',
        options: [
          'A) Invoice creation dates',
          'B) Invoice approval range',
          'C) Record filtering based on transaction dates',
          'D) Due date filters'
        ],
        answer: 'C) Record filtering based on transaction dates',
        hint: 'Used to filter transactions within a date range.'
      },
      // Additional final exam questions
      {
        q: 'Which field is mandatory when pulling records for an invoice?',
        options: [
          'A) Invoice comments',
          'B) Business unit',
          'C) Customer address',
          'D) Service date'
        ],
        answer: 'B) Business unit',
        hint: 'You cannot proceed without this field.'
      },
      {
        q: 'What should you do after setting the service date range?',
        options: [
          'A) Press Query',
          'B) Log out',
          'C) Print the screen',
          'D) Change the menu path'
        ],
        answer: 'A) Press Query',
        hint: 'This retrieves the filtered records.'
      },
      {
        q: 'What is the best practice before finalizing an invoice?',
        options: [
          'A) Set the trial invoice flag to "Yes"',
          'B) Skip the trial invoice flag',
          'C) Change the business unit',
          'D) Ignore the record summary'
        ],
        answer: 'A) Set the trial invoice flag to "Yes"',
        hint: 'This allows for review before finalization.'
      },
      {
        q: 'What is generated when you press "Generate Invoice"?',
        options: [
          'A) A new customer record',
          'B) An Invoice Generation Instance ID',
          'C) A service date report',
          'D) A business unit summary'
        ],
        answer: 'B) An Invoice Generation Instance ID',
        hint: 'This ID is used to track the generated invoice.'
      },
      {
        q: 'Which of the following is NOT a step in the invoice process?',
        options: [
          'A) Entering business unit',
          'B) Setting service dates',
          'C) Sending emails',
          'D) Pressing Generate Invoice'
        ],
        answer: 'C) Sending emails',
        hint: 'Focus on the steps described in the training.'
      },
      {
        q: 'What should you review after pulling records?',
        options: [
          'A) The record summary line',
          'B) The invoice comments',
          'C) The menu path',
          'D) The service date fields'
        ],
        answer: 'A) The record summary line',
        hint: 'This confirms the correct data has been pulled.'
      },
      {
        q: 'What happens if you do not enter a business unit?',
        options: [
          'A) The system will pull all records',
          'B) No records will be pulled',
          'C) The system will crash',
          'D) The invoice will be generated automatically'
        ],
        answer: 'B) No records will be pulled',
        hint: 'Business unit is a required field.'
      },
      {
        q: 'Which step is optional in the invoice generation process?',
        options: [
          'A) Selecting the record line',
          'B) Entering invoice comments',
          'C) Setting the trial invoice flag',
          'D) Pressing Generate Invoice'
        ],
        answer: 'B) Entering invoice comments',
        hint: 'Comments are not required.'
      },
      {
        q: 'Why is it important to set the correct service date range?',
        options: [
          'A) To include only relevant transactions',
          'B) To change invoice numbers',
          'C) To update customer addresses',
          'D) To print invoices'
        ],
        answer: 'A) To include only relevant transactions',
        hint: 'The date range filters which records are included.'
      },
      {
        q: 'Should you skip sections if you already know the material?',
        options: [
          'A) Yes',
          'B) No'
        ],
        answer: 'B) No',
        hint: 'Every section has unique material and questions.'
      },
      {
        q: 'What is the main purpose of the Group Invoice Batch screen?',
        options: [
          'A) To delete invoices',
          'B) To create invoices for multiple charges',
          'C) To print reports',
          'D) To update customer information'
        ],
        answer: 'B) To create invoices for multiple charges',
        hint: 'It is used for efficient month-end billing.'
      },
      {
        q: 'Which of the following is NOT a step in creating an invoice?',
        options: [
          'A) Setting filters',
          'B) Selecting records',
          'C) Sending emails',
          'D) Generating invoices'
        ],
        answer: 'C) Sending emails',
        hint: 'Focus on the steps described in the lesson.'
      },
      {
        q: 'What should you do after setting the service dates?',
        options: [
          'A) Press Query',
          'B) Log out',
          'C) Print the screen',
          'D) Change the menu path'
        ],
        answer: 'A) Press Query',
        hint: 'This action retrieves the filtered records.'
      },
      {
        q: 'What is generated after pressing "Generate Invoice"?',
        options: [
          'A) A new customer record',
          'B) An Invoice Generation Instance ID',
          'C) A service date report',
          'D) A business unit summary'
        ],
        answer: 'B) An Invoice Generation Instance ID',
        hint: 'This ID is used to track the generated invoice.'
      },
      {
        q: 'Which step is optional in the invoice generation process?',
        options: [
          'A) Selecting the record line',
          'B) Entering invoice comments',
          'C) Setting the trial invoice flag',
          'D) Pressing Generate Invoice'
        ],
        answer: 'B) Entering invoice comments',
        hint: 'Comments are not required.'
      },
      {
        q: 'What is the purpose of setting the Trial Invoice Flag to "Yes"?',
        options: [
          'A) To generate a final invoice',
          'B) To review the invoice before finalization',
          'C) To skip the invoice generation process',
          'D) To automatically approve the invoice'
        ],
        answer: 'B) To review the invoice before finalization',
        hint: 'Think about the best practices for invoice review.'
      }
    ],
    
    noRedo: true,
    showScore: true
  }
];

export default sections;
