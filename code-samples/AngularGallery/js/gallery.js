var app = angular.module('imageGallery', []);

    app.controller('GalleryController', function() {
        this.pictures = galleries;
    });

var galleries = [
  {
    title: "Wolfepaw's Fractals",
    entries: [
      {
      title: 'Fractal Bird of Paradise',
      description: 'Fractal created in Apophysis 7X v15c (created by `Xyrus02) and postwork done in PhotoPlus X5.',
      source: 'http://wolfepaw.deviantart.com/art/Fractal-Bird-of-Paradise-349675515',
      author: 'Peggi Wolfe',
      authorSite: 'http://wolfepaw.deviantart.com',
      images: {
        thumb: 'http://imgur.com/ULsWsiA',
        medWide: 'http://imgur.com/P1QK3TN',
        medSquare: 'http://imgur.com/mkQcaxt',
        full:'http://i.imgur.com/HGggDe3.jpg'
      }
      }, {  
      title: 'Crackled Leaves',
      description: 'A fractal abstract leaf pattern created using the Frax app.',
      source: 'http://wolfepaw.deviantart.com/art/Crackled-Leaves-585111494',
      author: 'Peggi Wolfe',
      authorSite: 'http://wolfepaw.deviantart.com',
      images: {
        thumb: 'http://imgur.com/IULVOUh',
        medWide: 'http://imgur.com/pHBKpiK',
        medSquare: 'http://imgur.com/vci9jrJ',
        full:'http://i.imgur.com/HGggDe3.jpg'
      }
      }, {
      title: 'Fractal Crochet Doily',
      description: 'Made using Apo 206 3D Hack. What a truly awesome program!!',
      source: 'http://wolfepaw.deviantart.com/art/Fractal-Crochet-Doily-106033861',
      author: 'Peggi Wolfe',
      authorSite: 'http://wolfepaw.deviantart.com',
      images: {
        thumb: 'http://imgur.com/TGQYfa5',
        medWide: 'http://imgur.com/owVfTZK',
        medSquare: 'http://imgur.com/vABTzTI',
        full:'http://i.imgur.com/HGggDe3.jpg'
      },
      comments: [{
        body: 'This is a comment',
        author: 'John Doe'
      }, {
        body: 'This is another comment',
        author: 'Sam Doe'
      }]
      }
    ]  // End 'entries'
  },  // End 'Fractals'
  {
    title: "Patterns",
    entries: [
    {
      title: '101 OF 100!',
      description: 'This was an extra bonus pattern the artist decided to do at the end.',
      source: 'http://onehundredpatterns.tumblr.com/post/104442113204/101-of-100',
      author: 'Ben Barry',
      authorSite: 'http://benbarry.com/',
      images: {
        thumb: 'http://imgur.com/l7p06wE',
        medWide: 'http://imgur.com/JGw4W7Q',
        medSquare: 'http://imgur.com/PyjzUT2',
        full: 'http://imgur.com/y8TOG5B'
      }
    }, {
      title: '98 OF 100',
      description: 'DECEMBER 2, 2014',
      source: 'http://onehundredpatterns.tumblr.com/post/104197368114/98-of-100',
      author: 'Ben Barry',
      authorSite: 'http://benbarry.com/',
      images: {
        thumb: 'http://imgur.com/Z8tqp6T',
        medWide: 'http://imgur.com/N5M2IdP',
        medSquare: 'http://imgur.com/r7USXn8',
        full: 'http://imgur.com/dU1zNKl'
      }
    }, {
      title: '96 OF 100',
      description: 'NOVEMBER 30, 2014',
      source: 'http://onehundredpatterns.tumblr.com/post/104026933064/96-of-100',
      author: 'Ben Barry',
      authorSite: 'http://benbarry.com/',
      images: {
        thumb: 'http://imgur.com/T8Z1nPQ',
        medWide: 'http://imgur.com/gVWVrs4',
        medSquare: 'http://imgur.com/PvxC3Xj',
        full: 'http://imgur.com/YbJr3Ex'
      }
    }
    ]  // End 'entries'
  },  // End 'Patternss'
  {
    title: "Textures",
    entries: [
    {
      title: 'A Title',
      description: 'A Discription.',
      source: 'A url',
      author: 'John Doe',
      authorSite: 'A url',
      images: {
        thumb: 'A url',
        medWide: 'A url',
        medSquare: 'A url',
        full: 'A url'
      }
    }, {
      title: 'A Title',
      description: 'A Discription.',
      source: 'A url',
      author: 'John Doe',
      authorSite: 'A url',
      images: {
        thumb: 'A url',
        medWide: 'A url',
        medSquare: 'A url',
        full: 'A url'
      }
    }, {
      title: 'A Title',
      description: 'A Discription.',
      source: 'A url',
      author: 'John Doe',
      authorSite: 'A url',
      images: {
        thumb: 'A url',
        medWide: 'A url',
        medSquare: 'A url',
        full: 'A url'
      }
    }
    ]  // End 'entries'
  } // End 'Patterns'
  
];