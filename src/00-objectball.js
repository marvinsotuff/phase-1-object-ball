function gameObject() {
    const homeTeam = [
        {
            teamName: "Brooklyn Nets", color: "black & white", players: [
                { name: "Alan Anderson", number: 0, shoe: 16, points: 22, rebounds: 12, assists: 12, steals: 3, blocks: 1, slamDunks: 1 },
                { name: "Reggie Evans", number: 30, shoe: 14, points: 12, rebounds: 12, assists: 12, steals: 12, blocks: 12, slamDunks: 7 },
                { name: "Brook Lopez", number: 11, shoe: 17, points: 17, rebounds: 19, assists: 10, steals: 3, blocks: 1, slamDunks: 15 },
                { name: "Mason Plumlee", number: 1, shoe: 19, points: 26, rebounds: 12, assists: 6, steals: 3, blocks: 8, slamDunks: 5 },
                { name: "Jason Terry", number: 31, shoe: 15, points: 19, rebounds: 2, assists: 2, steals: 4, blocks: 11, slamDunks: 1 }
            ]
        }
    ]

const awayTeam = [
    {
        teamName: "Charlotte Hornets", color: "turquoise & purple", players: [
            {name: "Jeff Adrien", number: 4, shoe: 18, points: 10, rebounds: 1, assists: 1, steals: 2, blocks: 7, slamDunks: 2 },
            {name: "Bismack Biyombo", number: 0, shoe: 16, points: 12, rebounds: 4, assists: 7, steals: 7, blocks: 15, slamDunks: 10 },
            {name: "DeSagna Diop", number: 2, shoe: 14, points: 24, rebounds: 12, assists: 12, steals: 4, blocks: 5, slamDunks: 5 },
            {name: "Ben Gordon", number: 8, shoe: 15, points: 33, rebounds: 3, assists: 2, steals: 1, blocks: 1, slamDunks: 0 },
            {name: "Brendan Haywood", number: 33, shoe: 15, points: 6, rebounds: 12, assists: 12, steals: 22, blocks: 5, slamDunks: 12 }
        ]
    }
]
    return {
        homeTeam: homeTeam,
        awayTeam: awayTeam,
        homeTeamName: homeTeam[0].teamName,
        awayTeamName: awayTeam[0].teamName,
        homeTeamColors: homeTeam[0].color,
        awayTeamColors: awayTeam[0].color,
        homePlayers: homeTeam[0].players,
        awayPlayers: awayTeam[0].players
    };
}

console.log(gameObject());

function homeTeamName(){
    return object["home"]["teamName"];
}
console.log(homeTeamName());



