def analyze_games(inputfile):
    genres = {}

    with open(inputfile, "r") as file:
        next(file)

        for regel in file:
            regel = regel.strip()
            gegevens = regel.split(",")

            genre = gegevens[1]
            playtime = int(gegevens[2])

            if genre not in genres:
                genres[genre] = []

            genres[genre].append(playtime)

    with open("Exercise2/game_analysis.txt", "w") as file:
        file.write("Average Play Time per Game Genre:\n")

        for genre in genres:
            tijden = genres[genre]

            gemiddelde = sum(tijden) / len(tijden)
            gemiddelde = round(gemiddelde, 1)

            file.write(f"- {genre}: {gemiddelde}\n")

    print("Analyse is succesvol uitgevoerd!")


analyze_games("Exercise2/game_sessions.txt")