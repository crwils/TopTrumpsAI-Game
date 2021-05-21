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