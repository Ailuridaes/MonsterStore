(function (){
  var app = angular.module('store', ['store-monsters']);

  app.controller('StoreController', function(){
    this.monsters = monsters;
  });

  var monsters = [
    {
      name: 'Marlboro',
      price: 2.95,
      description: 'Fiercely loyal... Or perhaps just fierce.',
      canPurchase: true,
      images: ['images/monster01.png', 'images/monster01-2.png'],
      reviews: [
        {
          stars: 5,
          body: "I love my Marlboro!",
          author: "Tom S."
        }
      ]
    },
    {
      name: 'Flapuff',
      price: 3.95,
      description: 'Maybe bringing this little guy home will cheer him up.',
      canPurchase: true,
      images: ['images/monster02.png', 'images/monster02-2.png'],
      reviews: [
        {
          stars: 5,
          body: "He's the perfect pet for my boring lifestyle.",
          author: "Scott Marsters"
        }
      ]
    },
    {
      name: 'Pet Rock',
      price: 1.95,
      description: 'The perfect pet for beginners...',
      canPurchase: true,
      images: ['images/monster03.png'],
      reviews: [
        {
          stars: 5,
          body: "He's great, I don't even have to feed him!",
          author: "Libby Thompson"
        }
      ]
    },
    {
      name: 'Vi',
      price: 4.95,
      description: 'Watch your fingers!',
      canPurchase: true,
      images: ['images/monster04.png'],
      reviews: [
        {
          stars: 4,
          body: "Very loving, just watch out for his 'love nips'! I'm down to 8 fingers.",
          author: "Herman M."
        }
      ]
    },
    {
      name: 'Plip',
      price: 2.95,
      description: 'Phhhphlllbttt',
      canPurchase: true,
      images: ['images/monster05.png', 'images/monster05-2.png'],
      reviews: [
        {
          stars: 5,
          body: "Boundless energy!",
          author: "Norma Kilstrom"
        },
        {
          stars: 4,
          body: "Very sweet, but I get the feeling mine's not too bright...",
          author: "Hunter T."
        }
      ]
    },
    {
      name: 'Ryuu',
      price: 5.95,
      description: 'So fast!',
      canPurchase: true,
      images: ['images/monster06.png'],
      reviews: []
    },
    {
      name: 'Bryce',
      price: 3.95,
      description: 'The perfect pet for experienced owners...',
      canPurchase: true,
      images: ['images/monster07.png'],
      reviews: [
        {
          stars: 5,
          body: "I keep him on my coffee table. Guests always comment on how cool he is!",
          author: "Felix H."
        }
      ]
    }
]
})();
