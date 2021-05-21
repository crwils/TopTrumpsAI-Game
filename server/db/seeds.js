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
        name: "Milhouse",
        most_lovable: 78,
        smartest: 84,
        fattest: 74, 
        biggest_nerd: 88,
        greatest_anarchist: 68,
        walk_of_fame: 62
    },

]);