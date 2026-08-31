def voorwaarde(regel):
    regel = regel.strip()

    if len(regel) >= 10 and " " in regel:
        return True

    return False


def kopieer_regels_met_voorwaarde(bron, bestemming, voorwaarde):
    with open(bron, "r") as file:
        with open(bestemming, "w") as output:
            for regel in file:
                if voorwaarde(regel):
                    output.write(regel)


kopieer_regels_met_voorwaarde(
    "Exercise3/source.txt",
    "Exercise3/output.txt",
    voorwaarde
)