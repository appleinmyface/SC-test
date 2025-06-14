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
          'D) Operation > Invoice > Group Invoice - Batch'
        ],
        answer: 'D) Operation > Invoice > Group Invoice - Batch',
        hint: 'Refer to the path shown in the lesson as well as the image.'
      }
    ]
  },
  {
    key: 'service-dates',
    title: 'Section 2: Service Date',
    intro: ['Learn how to set service date ranges for invoice filtering.'],
    lesson: [
      '1. Set the Serv Date From',
      '2. Set the Serv Date To — the date range belongs to the transactions dates that will be included in the invoice.',
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
        q: 'What should you do after setting the service date range and before pulling records?',
        options: [
          'A) Enter the business unit if required',
          'B) Generate the invoice immediately',
          'C) Skip to the next section',
          'D) Close the application'
        ],
        answer: 'A) Enter the business unit if required',
        hint: 'Make sure all necessary filters are set before querying.'
      }
    ]
  },
  {
    key: 'pull-records',
    title: 'Section 3: Records',
    intro: ['Pulling records is a key step in generating invoices.'],
    lesson: [
      { type: 'image', src: '/images/PullRecords.jpg', alt: 'Pull Records' },
      '1. Enter Business unit (Mandatory)',
      '2. Set Service Dates',
      '3. Press Query to retrieve results.',
      'Review the record summary line to confirm the right data has been pulled.'
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
        q: 'Once you retrieve the results, what should you do next?',
        options: [
          'A) Immediately generate the invoice',
          'B) Review the record summary line to confirm the right data has been pulled',
          'C) Change the service dates and query again',
          'D) Skip to the next section'
        ],
        answer: 'B) Review the record summary line to confirm the right data has been pulled',
        hint: 'It’s important to do what before proceeding to invoice generation.'
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
      '5. Select the record line',
      '6. Enter Invoice Comments (optional)',
      '7. Set the Trial Invoice Flag to “Yes” — best practice for review.',
      '8. Press Generate Invoice — this will generate an Invoice Generation Instance ID.',
      { type: 'image', src: '/images/InvoiceGeneration.jpg', alt: 'Invoice Generation' }
    ],
    quiz: [
      {
        q: 'What is the recommended setting for the Trial Invoice Flag before generating an invoice?',
        options: [
          'A) No',
          'B) Yes',
          'C) Leave blank',
          'D) Not applicable'
        ],
        answer: 'B) Yes',
        hint: 'Best practice is to review the invoice before finalizing.'
      },
      {
        q: 'What happens after you press Generate Invoice?',
        options: [
          'A) The invoice is sent to the customer',
          'B) An Invoice Generation Instance ID is created',
          'C) The records are deleted',
          'D) Nothing happens'
        ],
        answer: 'B) An Invoice Generation Instance ID is created',
        hint: 'Check the lesson steps for what is generated.'
      },
      {
        q: 'Which step is optional in the invoice generation process?',
        options: [
          'A) Select the record line',
          'B) Enter Invoice Comments',
          'C) Set the Trial Invoice Flag',
          'D) Press Generate Invoice'
        ],
        answer: 'B) Enter Invoice Comments',
        hint: 'You can skip this step if you have no comments.'
      }
    ],
    },
{
  key: 'congrats',
  title: 'Congratulations!',
  intro: ['🎉 You’ve finished the test. Well done!'],
  lesson: [],
  quiz: []
}

];

export default sections;
