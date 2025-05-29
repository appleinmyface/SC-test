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
    lesson: [],
    quiz: []
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