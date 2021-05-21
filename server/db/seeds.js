use top_trumps;
db.dropDatabase();

db.football.insertMany ([
    { 
        name: "Hernan Crespo",
        height: 184,
        caps: 20,
        goals: 10
    
    },
    { 
        name: "Francesco Totti",
        height: 180,
        caps: 24,
        goals: 5
    },
    { 
        name: "Luis Figo",
        height: 180,
        caps: 70,
        goals: 21
    }
]);

db.simpsons.insertMany ([
    { 
        name: "Principal Skinner",
        most_lovable: 74,
        smartest: 74,
        fattest: 64, 
        biggest_nerd: 80,
        greatest_anarchist: 48,
        walk_of_fame: 70
    },
    { 
        name: "Groundskeeper Willie",
        most_lovable: 62,
        smartest: 48,
        fattest: 70, 
        biggest_nerd: 66,
        greatest_anarchist: 80,
        walk_of_fame: 64
    },
    { 
        name: "Milhouse Van Houten",
        most_lovable: 78,
        smartest: 84,
        fattest: 74, 
        biggest_nerd: 88,
        greatest_anarchist: 68,
        walk_of_fame: 62
    },
    {
        name: "Santa's Little Helper",
        most_lovable: 96,
        smartest: 44,
        fattest: 42, 
        biggest_nerd: 60,
        greatest_anarchist: 50,
        walk_of_fame: 66
    },
    {
        name: "Krusty the Clown",
        most_lovable: 70,
        smartest: 86,
        fattest: 92, 
        biggest_nerd: 54,
        greatest_anarchist: 86,
        walk_of_fame: 78
    },
    {
        name: "Martin",
        most_lovable: 80,
        smartest: 80,
        fattest: 90, 
        biggest_nerd: 70,
        greatest_anarchist: 72,
        walk_of_fame: 52
    },
    {
        name: "Patty & Selma Bouvier",
        most_lovable: 50,
        smartest: 90,
        fattest: 86, 
        biggest_nerd: 50,
        greatest_anarchist: 92,
        walk_of_fame: 88
    },
    {
        name: "Sherri and Terri",
        most_lovable: 54,
        smartest: 82,
        fattest: 58, 
        biggest_nerd: 76,
        greatest_anarchist: 66,
        walk_of_fame: 58
    },
    {
        name: "Itchy & Scratchy",
        most_lovable: 72,
        smartest: 52,
        fattest: 60, 
        biggest_nerd: 56,
        greatest_anarchist: 84,
        walk_of_fame: 76
    },
    {
        name: "Maggie Simpson",
        most_lovable: 100,
        smartest: 540,
        fattest: 46, 
        biggest_nerd: 74,
        greatest_anarchist: 60,
        walk_of_fame: 92
    },
    {
        name: "Snowball II",
        most_lovable: 88,
        smartest: 42,
        fattest: 52, 
        biggest_nerd: 58,
        greatest_anarchist: 52,
        walk_of_fame: 56
    },
    {
        name: "Homer Simpson",
        most_lovable: 92,
        smartest: 76,
        fattest: 94, 
        biggest_nerd: 48,
        greatest_anarchist: 94,
        walk_of_fame: 98
    },
    {
        name: "Nelson Muntz",
        most_lovable: 32,
        smartest: 20,
        fattest: 67, 
        biggest_nerd: 89,
        greatest_anarchist: 56,
        walk_of_fame: 39
    },
    {
        name: "Apu Nahasapeemapetilon",
        most_lovable: 78,
        smartest: 96,
        fattest: 78, 
        biggest_nerd: 52,
        greatest_anarchist: 88,
        walk_of_fame: 68
    },
    {
        name: "Abraham 'Grampa' Simpson",
        most_lovable: 68,
        smartest: 56,
        fattest: 66, 
        biggest_nerd: 76,
        greatest_anarchist: 78,
        walk_of_fame: 86
    },
    {
        name: "C. Montgomery Burns",
        most_lovable: 48,
        smartest: 92,
        fattest: 40, 
        biggest_nerd: 78,
        greatest_anarchist: 90,
        walk_of_fame: 84
    },

]);