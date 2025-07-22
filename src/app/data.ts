//simpen hard code data disini
//kalo mau dipake di ts page lain, pake import

export const MOVIE_DATA = [
    {
      id: 1,
      title: 'The Shawshank Redemption',
      genre: 'Drama',
      releaseDate: '1994-09-23',
      director: 'Frank Darabont',
      actors: [
        { name: 'Tim Robbins', character: 'Andy Dufresne' },
        { name: 'Morgan Freeman', character: 'Ellis Redding'},
        { name: 'Bob Gunton', character: 'Warden Norton' }],
      synopsis: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
      poster: 'https://irs.www.warnerbros.com/gallery-jpeg/the_shawshank_redemption_posterlarge_0-675188670.jpg',
      ratings: [
        { userId: 1, rating: 9, date: '2024-01-01', review: 'An absolute masterpiece, full of emotions and deep storytelling.' },
        { userId: 2, rating: 10, date: '2024-01-02', review: 'The best movie I have ever watched, simply legendary!' }
      ]
    },
    {
      id: 2,
      title: 'The Godfather',
      genre: 'Crime',
      releaseDate: '1972-03-24',
      director: 'Francis Ford Coppola',
      actors: [
        { name: 'Marlon Brando', character: 'Vito Corleone' },
        { name: 'Al Pacino', character: 'Michael Corleone' },
        { name: 'James Caan', character: 'Sonny Corleone' }
      ],
      synopsis: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
      poster: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg',
      ratings: [
        { userId: 1, rating: 10, date: '2024-01-03', review: 'A true classic, the best mafia movie ever made!' },
        { userId: 3, rating: 8, date: '2024-01-04', review: 'Great acting and story, but a bit too slow-paced for me.' }
      ]
    },
    {
      id: 3,
      title: 'The Dark Knight',
      genre: 'Action',
      releaseDate: '2008-07-18',
      director: 'Christopher Nolan',
      actors: [
        { name: 'Christian Bale', character: 'Bruce Wayne / Batman' },
        { name: 'Heath Ledger', character: 'Joker' },
        { name: 'Aaron Eckhart', character: 'Harvey Dent' }
      ],
      synopsis: 'When the menace known as the Joker emerges, he wreaks havoc and chaos on Gotham.',
      poster: 'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/826e20d747af639e2e2c3a95662283eabc6a6216a9bb74fc45cb1c29f2708b96._RI_V_TTW_.jpg',
      ratings: [
        { userId: 2, rating: 9, date: '2024-01-05', review: 'Heath Ledger gave the best Joker performance ever!' }
      ]
    },
    {
      id: 4,
      title: 'Pulp Fiction',
      genre: 'Crime',
      releaseDate: '1994-10-14',
      director: 'Quentin Tarantino',
      actors: [
        { name: 'John Travolta', character: 'Vincent Vega' },
        { name: 'Samuel L. Jackson', character: 'Jules Winnfield' },
        { name: 'Uma Thurman', character: 'Mia Wallace' }
      ],
      synopsis: 'Stories of crime and redemption intertwine in Los Angeles.',
      poster: 'https://m.media-amazon.com/images/I/71c05lTE03L._AC_UF1000,1000_QL80_.jpg',
      ratings: [
        { userId: 3, rating: 8, date: '2024-01-06', review: 'A crazy but brilliant storyline, Tarantino is a genius.' }
      ]
    },
    {
      id: 5,
      title: 'Forrest Gump',
      genre: 'Drama',
      releaseDate: '1994-07-06',
      director: 'Robert Zemeckis',
      actors: [
        { name: 'Tom Hanks', character: 'Forrest Gump' },
        { name: 'Robin Wright', character: 'Jenny Curran' },
        { name: 'Gary Sinise', character: 'Lieutenant Dan Taylor' }
      ],
      synopsis: 'The story of a slow-witted but kind-hearted man experiencing history.',
      poster: 'https://th.bing.com/th/id/OIP.4L_vNEKtfkb3z9layw1XXgHaJ3?rs=1&pid=ImgDetMain',
      ratings: [
        { userId: 4, rating: 10, date: '2024-01-07', review: 'Heartwarming and inspiring, Tom Hanks at his best!' }
      ]
    },
    {
      id: 6,
      title: 'Inception',
      genre: 'Sci-Fi',
      releaseDate: '2010-07-16',
      director: 'Christopher Nolan',
      actors: [
        { name: 'Leonardo DiCaprio', character: 'Dom Cobb' },
        { name: 'Joseph Gordon-Levitt', character: 'Arthur' },
        { name: 'Elliot Page', character: 'Ariadne' }
      ],
      synopsis: 'A thief steals secrets from within the subconscious.',
      poster: 'https://m.media-amazon.com/images/I/81p+xe8cbnL._AC_SY679_.jpg',
      ratings: [
        { userId: 5, rating: 9, date: '2024-01-08', review: 'Mind-blowing! Nolan never disappoints!' }
      ]
    },
    {
      id: 7,
      title: 'Fight Club',
      genre: 'Drama',
      releaseDate: '1999-10-15',
      director: 'David Fincher',
      actors: [
        { name: 'Brad Pitt', character: 'Tyler Durden' },
        { name: 'Edward Norton', character: 'The Narrator' },
        { name: 'Helena Bonham Carter', character: 'Marla Singer' }
      ],
      synopsis: 'An underground fight club evolves into something sinister.',
      poster: 'https://th.bing.com/th/id/OIP.X8GXwUnJEzAclGg3OtAnrAHaLH?rs=1&pid=ImgDetMain',
      ratings: [
        { userId: 6, rating: 8, date: '2024-01-09', review: 'A deep and psychological thriller, truly unique!' }
      ]
    },
    {
      id: 8,
      title: 'Interstellar',
      genre: 'Sci-Fi',
      releaseDate: '2014-11-07',
      director: 'Christopher Nolan',
      actors: [
        { name: 'Matthew McConaughey', character: 'Cooper' },
        { name: 'Anne Hathaway', character: 'Dr. Brand' },
        { name: 'Jessica Chastain', character: 'Murph' }
      ],
      synopsis: 'A team of explorers travels through a wormhole in space.',
      poster: 'https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_SY679_.jpg',
      ratings: [
        { userId: 7, rating: 9, date: '2024-01-10', review: 'Epic cinematography and an emotional storyline.' }
      ]
    },
    {
      id: 9,
      title: 'The Matrix',
      genre: 'Sci-Fi',
      releaseDate: '1999-03-31',
      director: 'Lana Wachowski, Lilly Wachowski',
      actors: [
        { name: 'Keanu Reeves', character: 'Neo' },
        { name: 'Laurence Fishburne', character: 'Morpheus' },
        { name: 'Carrie-Anne Moss', character: 'Trinity' }
      ],
      synopsis: 'A hacker discovers the true nature of his reality.',
      poster: 'https://m.media-amazon.com/images/I/51EG732BV3L.jpg',
      ratings: [
        { userId: 8, rating: 8, date: '2024-01-11', review: 'A genre-defining film that changed sci-fi forever!' }
      ]
    },
    {
      id: 10,
      title: 'The Lion King',
      genre: 'Animation',
      releaseDate: '1994-06-24',
      director: 'Roger Allers, Rob Minkoff',
      actors: [
        { name: 'Matthew Broderick', character: 'Simba' },
        { name: 'Jeremy Irons', character: 'Scar' },
        { name: 'James Earl Jones', character: 'Mufasa' }
      ],
      synopsis: 'A young lion prince flees his kingdom only to return as a true king.',
      poster: 'https://th.bing.com/th/id/OIP.aEI6WJ22i4HYARFJ1OLyFgHaKT?rs=1&pid=ImgDetMain',
      ratings: [
        { userId: 9, rating: 10, date: '2024-01-12', review: 'A childhood classic, beautiful animation and music!' }
      ]
    },
    {
        id: 11,
        title: 'Gladiator',
        genre: 'Action',
        releaseDate: '2000-05-05',
        director: 'Ridley Scott',
        actors: [
          { name: 'Russell Crowe', character: 'Maximus' },
          { name: 'Joaquin Phoenix', character: 'Commodus' },
          { name: 'Connie Nielsen', character: 'Lucilla' }
        ],
        synopsis: 'A former Roman General seeks revenge against the corrupt emperor who murdered his family and sent him into slavery.',
        poster: 'https://th.bing.com/th/id/OIP.K-zmLbgJFzIQ4UXnQu4ldgHaLH?rs=1&pid=ImgDetMain',
        ratings: [
        { userId: 10, rating: 9, date: '2024-01-13', review: 'Epic battles and a great story, one of the best historical films.' }
        ]
    },
    {
        id: 12,
        title: 'The Silence of the Lambs',
        genre: 'Thriller',
        releaseDate: '1991-02-14',
        director: 'Jonathan Demme',
        actors: [
          { name: 'Jodie Foster', character: 'Clarice Starling' },
          { name: 'Anthony Hopkins', character: 'Dr. Hannibal Lecter' },
          { name: 'Scott Glenn', character: 'Jack Crawford' }
        ],
        synopsis: 'A young FBI cadet must receive help from an incarcerated cannibal to catch another serial killer.',
        poster: 'https://th.bing.com/th/id/R.86fca3148fa74086ce5d1d40ae03fc48?rik=jBXv1%2bda%2bS6VXw&riu=http%3a%2f%2fposterwire.com%2fwp-content%2fuploads%2fsilence_of_the_lambs.jpg&ehk=AzwHK07U%2fsoVGpbuooRa9%2fgvzuG2UZp%2fGq579EF9jB0%3d&risl=&pid=ImgRaw&r=0',
        ratings: [
        { userId: 11, rating: 8, date: '2024-01-14', review: 'Chilling and suspenseful, Anthony Hopkins is terrifying!' }
        ]
    },
    {
        id: 13,
        title: 'Saving Private Ryan',
        genre: 'War',
        releaseDate: '1998-07-24',
        director: 'Steven Spielberg',
        actors: [
          { name: 'Tom Hanks', character: 'Captain John H. Miller' },
          { name: 'Matt Damon', character: 'Private James Francis Ryan' },
          { name: 'Tom Sizemore', character: 'Sergeant Horvath' }
        ],
        synopsis: 'A group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action.',
        poster: 'https://posterspy.com/wp-content/uploads/2019/10/Saving_private_ryan_poster_NEW.jpg',
        ratings: [
        { userId: 12, rating: 9, date: '2024-01-15', review: 'Realistic and emotional, an amazing war film.' }
        ]
    },
    {
        id: 14,
        title: 'Schindler’s List',
        genre: 'History',
        releaseDate: '1993-12-15',
        director: 'Steven Spielberg',
        actors: [
          { name: 'Liam Neeson', character: 'Oskar Schindler' },
          { name: 'Ralph Fiennes', character: 'Amon Goeth' },
          { name: 'Ben Kingsley', character: 'Itzhak Stern' }
        ],
        synopsis: 'The true story of a businessman who saved thousands of Jews during the Holocaust.',
        poster: 'https://www.themoviedb.org/t/p/original/doGEE2DgjET0XK0k9BozsMBES5H.jpg',
        ratings: [
        { userId: 13, rating: 10, date: '2024-01-16', review: 'Heartbreaking yet inspiring, a must-watch.' }
        ]
    },
    {
        id: 15,
        title: 'Avengers: Endgame',
        genre: 'Superhero',
        releaseDate: '2019-04-26',
        director: 'Anthony Russo, Joe Russo',
        actors: [
          { name: 'Robert Downey Jr.', character: 'Tony Stark / Iron Man' },
          { name: 'Chris Evans', character: 'Steve Rogers / Captain America' },
          { name: 'Scarlett Johansson', character: 'Natasha Romanoff / Black Widow' }
        ],
        synopsis: 'The Avengers must stop Thanos and restore balance to the universe.',
        poster: 'https://m.media-amazon.com/images/I/71niXI3lxlL._AC_SY679_.jpg',
        ratings: [
        { userId: 14, rating: 8, date: '2024-01-17', review: 'A fantastic conclusion to the MCU saga!' }
        ]
    },
    {
        id: 16,
        title: 'The Wolf of Wall Street',
        genre: 'Biography',
        releaseDate: '2013-12-25',
        director: 'Martin Scorsese',
        actors: [
          { name: 'Leonardo DiCaprio', character: 'Jordan Belfort' },
          { name: 'Jonah Hill', character: 'Donnie Azoff' },
          { name: 'Margot Robbie', character: 'Naomi Lapaglia' }
        ],
        synopsis: 'The rise and fall of a wealthy stockbroker in New York City.',
        poster: 'https://th.bing.com/th/id/R.ca85b0a51be6a481b042841ec8c4f8f9?rik=GZfmvrYl7S2EOg&riu=http%3a%2f%2fwww.danielyeow.com%2fwp-content%2fuploads%2fTheWolfofWallStreet-poster.jpg&ehk=9pInwuqq%2bHihzJeOyUkpxRoiyWqy8djHUd9%2brEx%2bYjM%3d&risl=&pid=ImgRaw&r=0',
        ratings: [
        { userId: 15, rating: 9, date: '2024-01-18', review: 'Funny, wild, and full of energy!' }
        ]
    },
    {
        id: 17,
        title: 'Django Unchained',
        genre: 'Western',
        releaseDate: '2012-12-25',
        director: 'Quentin Tarantino',
        actors: [
          { name: 'Jamie Foxx', character: 'Django' },
          { name: 'Christoph Waltz', character: 'Dr. King Schultz' },
          { name: 'Leonardo DiCaprio', character: 'Calvin Candie' }
        ],
        synopsis: 'A freed slave teams up with a bounty hunter to rescue his wife from a brutal plantation owner.',
        poster: 'https://th.bing.com/th/id/R.901947df36c53f518e8a944899375e27?rik=cHeKv8C2XpZQXg&riu=http%3a%2f%2fwww.aceshowbiz.com%2fimages%2fstill%2fdjango-unchained-poster04.jpg&ehk=4%2bZAfAS%2b8C4Qkbxzt4V0PTSW1%2fFBU69Oh88j7yP1I1M%3d&risl=&pid=ImgRaw&r=0',
        ratings: [
        { userId: 16, rating: 9, date: '2024-01-19', review: 'Action-packed and entertaining!' }
        ]
    },
    {
        id: 18,
        title: 'The Prestige',
        genre: 'Mystery',
        releaseDate: '2006-10-20',
        director: 'Christopher Nolan',
        actors: [
          { name: 'Christian Bale', character: 'Alfred Borden' },
          { name: 'Hugh Jackman', character: 'Robert Angier' },
          { name: 'Scarlett Johansson', character: 'Olivia Wenscombe' }
        ],
        synopsis: 'Two rival magicians battle to create the ultimate illusion.',
        poster: 'https://image.tmdb.org/t/p/original/punmWKefqHUGo2f3dO3lpfRbOB2.jpg',
        ratings: [
        { userId: 17, rating: 8, date: '2024-01-20', review: 'Twists and turns that will blow your mind!' }
        ]
    },
    {
        id: 19,
        title: 'Whiplash',
        genre: 'Drama',
        releaseDate: '2014-10-10',
        director: 'Damien Chazelle',
        actors: [
          { name: 'Miles Teller', character: 'Andrew Neiman' },
          { name: 'J.K. Simmons', character: 'Terence Fletcher' },
          { name: 'Paul Reiser', character: 'Jim Neiman' }
        ],
        synopsis: 'A young drummer enrolls in a cutthroat music conservatory.',
        poster: 'https://th.bing.com/th/id/R.42d6a226bd10bcc38011fafaf6012706?rik=PhDAsLS7ro1TSw&riu=http%3a%2f%2fpeppermintiguana.co.uk%2fwp-content%2fuploads%2f2015%2f10%2fwhiplash.34229.jpg&ehk=N0yULCvRU3L7XSkBdYIn4J6n0nNW7nkieq4CS3T34xI%3d&risl=&pid=ImgRaw&r=0',
        ratings: [
        { userId: 18, rating: 9, date: '2024-01-21', review: 'Intense and inspiring, J.K. Simmons is amazing!' }
        ]
    },
    {
        id: 20,
        title: 'Parasite',
        genre: 'Thriller',
        releaseDate: '2019-05-30',
        director: 'Bong Joon Ho',
        actors: [
          { name: 'Song Kang-ho', character: 'Kim Ki-taek' },
          { name: 'Lee Sun-kyun', character: 'Park Dong-ik' },
          { name: 'Cho Yeo-jeong', character: 'Choi Yeon-gyo' }
        ],
        synopsis: 'A poor family schemes their way into the lives of a wealthy household.',
        poster: 'https://wallpaperaccess.com/full/1913793.jpg',
        ratings: [
          { userId: 19, rating: 10, date: '2024-01-22', review: 'A brilliant and unique story, highly recommended!'} ,
          { userId: 10, rating: 5, date: '2024-01-27', review: 'Storyline is weird' },
          { userId: 12, rating: 8, date: '2024-01-23', review: 'Incredible!' }]
        }
    ];
  
    export const USER_DATA = [
      { id: 1, name: 'Cheryl', email: 'cheryl@gmail.com', password: '12345', role: 'Admin', profile_pic:'https://randomuser.me/api/portraits/women/1.jpg' },
      { id: 2, name: 'Aurel', email: 'aurel@gmail.com', password: '12345', role: 'User', profile_pic:'https://randomuser.me/api/portraits/women/2.jpg' },
      { id: 3, name: 'Michele', email: 'michele@gmail.com', password: '12345', role: 'User', profile_pic:'https://randomuser.me/api/portraits/women/3.jpg' },
      { id: 4, name: 'David', email: 'david@gmail.com', password: '12345', role: 'Admin', profile_pic:'https://randomuser.me/api/portraits/men/4.jpg' },
      { id: 5, name: 'Elena', email: 'elena@gmail.com', password: '12345', role: 'User', profile_pic:'https://randomuser.me/api/portraits/women/5.jpg' },
      { id: 6, name: 'James', email: 'james@gmail.com', password: '12345', role: 'User', profile_pic:'https://randomuser.me/api/portraits/men/6.jpg' },
      { id: 7, name: 'Sophia', email: 'sophia@gmail.com', password: '12345', role: 'User', profile_pic:'https://randomuser.me/api/portraits/women/7.jpg' },
      { id: 8, name: 'Michael', email: 'michael@gmail.com', password: '12345', role: 'Admin', profile_pic:'https://randomuser.me/api/portraits/men/8.jpg' },
      { id: 9, name: 'Isabella', email: 'isabella@gmail.com', password: '12345', role: 'User', profile_pic:'https://randomuser.me/api/portraits/women/9.jpg' },
      { id: 10, name: 'William', email: 'william@gmail.com', password: '12345', role: 'User', profile_pic:'https://randomuser.me/api/portraits/men/10.jpg' },
      { id: 11, name: 'Emma', email: 'emma@gmail.com', password: '12345', role: 'User', profile_pic:'https://randomuser.me/api/portraits/women/11.jpg' },
      { id: 12, name: 'Daniel', email: 'daniel@gmail.com', password: '12345', role: 'Admin', profile_pic:'https://randomuser.me/api/portraits/men/12.jpg' },
      { id: 13, name: 'Olivia', email: 'olivia@gmail.com', password: '12345', role: 'User', profile_pic:'https://randomuser.me/api/portraits/women/13.jpg' },
      { id: 14, name: 'Lucas', email: 'lucas@gmail.com', password: '12345', role: 'User', profile_pic:'https://randomuser.me/api/portraits/men/14.jpg' },
      { id: 15, name: 'Ava', email: 'ava@gmail.com', password: '12345', role: 'User', profile_pic:'https://randomuser.me/api/portraits/women/15.jpg' },
      { id: 16, name: 'Henry', email: 'henry@gmail.com', password: '12345', role: 'Admin', profile_pic:'https://randomuser.me/api/portraits/men/16.jpg' },
      { id: 17, name: 'Charlotte', email: 'charlotte@gmail.com', password: '12345', role: 'User', profile_pic:'https://randomuser.me/api/portraits/women/17.jpg' },
      { id: 18, name: 'Ethan', email: 'ethan@gmail.com', password: '12345', role: 'User', profile_pic:'https://randomuser.me/api/portraits/men/18.jpg' },
      { id: 19, name: 'Amelia', email: 'amelia@gmail.com', password: '12345', role: 'User', profile_pic:'https://randomuser.me/api/portraits/women/19.jpg' },
      { id: 20, name: 'Mason', email: 'mason@gmail.com', password: '12345', role: 'Admin', profile_pic:'https://randomuser.me/api/portraits/men/20.jpg' }
  ];  
  