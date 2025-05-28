/* ==================== src/data/sections.js ==================== */
const sections = [
  {
    key: 'welcome',
    title: 'Welcome',
    intro: ['Welcome to Animal Noises!'],
    lesson: ['Click Continue to begin.'],
    quiz: []
  },
  {
    key: 'animals',
    title: 'Animal Sounds',
    intro: ['Intro to Animal Sounds: dogs, cats, cows.'],
    lesson: ['Dogs bark with "woof", cats meow with "meow", cows moo with "moo".'],
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
    lesson: ['Farm animals live on a farm: Chickens cluck, horses neigh, pigs oink.'],
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
    lesson: ['Wild animals roam free: Lions roar, snakes hiss, birds tweet.'],
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