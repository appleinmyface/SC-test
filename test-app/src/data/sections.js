/* ==================== src/data/sections.js ==================== */
const sections = [
  {
    key: 'welcome',
    title: 'Welcome',
    intro: [
      'Welcome to Animal Noises!',
      'In this tutorial you will learn:',
      '- How to navigate between Intro, Lesson, and Quiz.',
      '- What to expect in each step.',
      'Click Continue to start with the Animal Sounds lesson.'
    ],
    lesson: ['In the lessons section is where you will find all the information necessary to complete the quizzes.',
            'Each lesson will cover different animal sounds and their meanings.',
            'Pay attention to the details as they will help you answer the quiz questions.',
            'You can always return to the lesson if you need a refresher.',
            'Once you feel ready, proceed to the quiz section to test your knowledge.',
            'Good luck!'
    ],
    quiz: ['Are you ready to test your knowledge? In the quiz section, you will find questions based on the lessons you just learned.',
            'Each question will have multiple choice answers.',
            'Select the answer you believe is correct and submit your response.',
            'You will receive feedback on your answers after each quiz.',
            'If you get stuck, feel free to revisit the lesson section for a refresher.',
            'Once you complete all quizzes, you will receive a completion certificate.',
            'ready to begin? Click Continue to start the first lesson.'
    ]
  },
  {
    key: 'animals',
    title: 'Animal Sounds',
    intro: ['Intro to Animal Sounds: dogs, cats, cows.'],
    lesson: [
      'Dogs bark with "woof". They use different pitches to express emotion.',
      'Cats meow with "meow". Kittens meow more, adults purr when content.',
      'Cows moo with "moo". Farmers use cowbells to locate them.'
    ],
    quiz: [
      { q: 'A dog goes?', options: ['woof', 'meow', 'moo'], a: 'woof' },
      { q: 'A cat goes?', options: ['moo', 'meow', 'woof'], a: 'meow' },
      { q: 'A cow goes?', options: ['moo', 'woof', 'meow'], a: 'moo' }
    ]
  },
  {
    key: 'farm',
    title: 'Farm Animals',
    intro: ['Intro to Farm Animals: chickens, horses, pigs.'],
    lesson: [
      'Chickens cluck with "cluck". They communicate danger and nesting.',
      'Horses neigh with "neigh". They also snort when excited.',
      'Pigs oink with "oink". They grunt when foraging.'
    ],
    quiz: [
      { q: 'A chicken goes?', options: ['cluck', 'baa', 'neigh'], a: 'cluck' },
      { q: 'A horse goes?', options: ['moo', 'neigh', 'oink'], a: 'neigh' },
      { q: 'A pig goes?', options: ['oink', 'quack', 'meow'], a: 'oink' }
    ]
  },
  {
    key: 'wild',
    title: 'Wild Animals',
    intro: ['Intro to Wild Animals: lions, snakes, birds.'],
    lesson: [
      'Lions roar with "roar". It can be heard 8km away.',
      'Snakes hiss with "hiss". It is a warning signal.',
      'Birds tweet with various calls for mating and territory.'
    ],
    quiz: [
      { q: 'A lion goes?', options: ['roar', 'hiss', 'chirp'], a: 'roar' },
      { q: 'A snake goes?', options: ['slither', 'hiss', 'buzz'], a: 'hiss' },
      { q: 'A bird goes?', options: ['tweet', 'growl', 'oink'], a: 'tweet' }
    ]
  },
  {
    key: 'congrats',
    title: 'Congratulations',
    intro: ['🎉 You completed the Animal Noises Test! 🎉'],
    lesson: [],
    quiz: []
  }
];
export default sections;