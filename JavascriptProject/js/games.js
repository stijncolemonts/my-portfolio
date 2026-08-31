const games = [
    {name: "Elden Ring", type:"Rpg", rating: 9.5, isFavourite: true},
    {name: "Hollow Knight", type:"Metroidvania", rating: 9.0, isFavourite: true},
    {name: "minecraft", type:"Sandbox", rating: 8.5, isFavourite: false},
    {name: "The Legend of Zelda: Breath of the Wild", type:"Action-Adventure", rating: 9.8, isFavourite: true},
    {name: "Fifa23", type:"Sandbox", rating: 7, isFavourite: false},
    {name: "AOTennis 2", type:"Action-Adventure", rating: 2, isFavourite: true},
    {name: "Gran Turismo", type:"Racing", rating: 8, isFavourite: true}

];

const friendGames = [
    {name: "Minecraft", type:"Sandbox", rating: 8.0, isFavourite: true},
    {name: "Tetris", type:"Puzzle", rating: 7.5, isFavourite: false},
]

const toString = (game) => {
    return `${game.name} (${game.type}) - Rating: ${game.rating} - Favorite: ${game.isFavourite}`;
};

const printAllGames = (listOfGames) => {
    listOfGames.map(toString).forEach(addStatus);
};

const isFavourite = (game) => {
    return game.isFavourite
};

const printFavouriteGames = (listOfGames) => {
    addStatus("These are all the favourite games in the libary:");
    listOfGames
        .filter(isFavourite)
        .forEach(game => {
            addStatus(game.isFavourite ? game.name : "");
        });
};

const printGamesRatingAbove = (listOfGames, rating) => {
    addStatus(`These are all games with rating above ${rating}`)
    listOfGames
        .filter(game => game.rating > rating)
        .forEach(game => addStatus(toString(game)))
};

const filterAndPrintGames = (listOfGames, filterFunction) => {
    listOfGames
        .filter(filterFunction)
        .forEach(game => addStatus(toString(game)))
};

const getAverageRating = () => {
    let result = 0;
    games.forEach((game) => {result += game.rating;});
    return result / games.length;
};

const gemiddeldeRating = getAverageRating();
addStatus(`Gemiddelde rating: ${gemiddeldeRating.toFixed(2)}`);

const getHighestRating = () => {
    let result = null;
    games.forEach((game) => {
        if (result === null || game.rating > result.rating) {result = game;}
    });
    return result;
};

const hoogsteRating = getHighestRating();
addStatus(`Beste game: ${hoogsteRating.name}`);

addStatus("Favoriete status:");
games.forEach(game => {
    const status = game.isFavourite ? "Dit is mijn favoriet" : "Niet mijn favoriet";
    addStatus(`${game.name}: ${status}`);
});

const [first, second] = games;
addStatus("My first top 2 games are:");
addStatus(first.name);
addStatus(second.name);

addStatus("My own games:")
printAllGames(games)

addStatus("My best friends games:")
printAllGames(friendGames)

const allGames = [...games, ...friendGames]
addStatus("All the games in our library:")
printAllGames(allGames)

printFavouriteGames(games)
printGamesRatingAbove(games, 9)

addStatus("These are all my favourite games:")
filterAndPrintGames(games, game => game.isFavourite)

addStatus('These games have type "Open World"');
filterAndPrintGames(games, game => game.type === "Open World");