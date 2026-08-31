class Tiktoker:
    def __init__(self, username, category, followers):
        self.username = username
        self.category = category
        self.__followers = followers

    def get_followers(self):
        return self.__followers

    def set_followers(self, value):
        if value < 0 or value > 1000000000:
            raise ValueError("Invalid number of followers!")
        self.__followers = value

    def get_info(self):
        return f"Username: {self.username}, Category: {self.category}, Followers: {self.get_followers()}"


class TiktokAgency:
    def __init__(self, name):
        self.name = name
        self.__tiktokers = []

    def add_tiktoker(self, tiktoker):
        for c in self.__tiktokers:
            if c.username.lower() == tiktoker.username.lower():
                raise ValueError("TikToker already exists!")

        self.__tiktokers.append(tiktoker)

        with open("tiktokers.txt", "a") as file:
            file.write(
                tiktoker.username + "," +
                tiktoker.category + "," +
                str(tiktoker.get_followers()) + "\n"
            )

    def get_tiktokers(self):
        return self.__tiktokers

    def remove_tiktoker(self, username):
        for tiktoker in self.__tiktokers:
            if tiktoker.username.lower() == username.lower():
                self.__tiktokers.remove(tiktoker)
                return

    def find_tiktokers_by_category(self, category):
        lijst = []

        for tiktoker in self.__tiktokers:
            if tiktoker.category.lower() == category.lower():
                lijst.append(tiktoker)

        return lijst


def load_tiktokers(agency):
    try:
        with open("tiktokers.txt", "r") as file:
            for regel in file:
                regel = regel.strip()

                if regel == "":
                    continue

                gegevens = regel.split(",")

                username = gegevens[0]
                category = gegevens[1]
                followers = int(gegevens[2])

                tiktoker = Tiktoker(username, category, followers)

                agency.get_tiktokers().append(tiktoker)

    except FileNotFoundError:
        pass


def save_tiktokers(agency):
    with open("tiktokers.txt", "w") as file:
        for tiktoker in agency.get_tiktokers():
            file.write(
                tiktoker.username + "," +
                tiktoker.category + "," +
                str(tiktoker.get_followers()) + "\n"
            )


agency_name = input("Voer de naam van de agency in: ")
agency = TiktokAgency(agency_name)

load_tiktokers(agency)


while True:
    print("\n--- Menu ---")
    print("1. Voeg een TikTokker toe")
    print("2. Toon alle TikTokkers")
    print("3. Verwijder een TikTokker")
    print("4. Zoek TikTokkers op categorie")
    print("5. Stoppen")

    keuze = input("Maak een keuze: ")

    if keuze == "1":
        username = input("Username: ")
        category = input("Categorie: ")
        followers = int(input("Aantal volgers: "))

        try:
            tiktoker = Tiktoker(username, category, followers)
            agency.add_tiktoker(tiktoker)
            print("TikTokker toegevoegd!")

        except ValueError as e:
            print(e)

    elif keuze == "2":
        for tiktoker in agency.get_tiktokers():
            print(tiktoker.get_info())

    elif keuze == "3":
        username = input("Username van TikTokker om te verwijderen: ")

        gevonden = False

        for tiktoker in agency.get_tiktokers():
            if tiktoker.username.lower() == username.lower():
                gevonden = True
                break

        agency.remove_tiktoker(username)

        if gevonden:
            save_tiktokers(agency)
            print("TikTokker verwijderd!")
        else:
            print("TikTokker niet gevonden.")

    elif keuze == "4":
        category = input("Categorie: ")

        tiktokers = agency.find_tiktokers_by_category(category)

        for tiktoker in tiktokers:
            print(tiktoker.get_info())

    elif keuze == "5":
        print("Programma afgesloten.")
        break

    else:
        print("Ongeldige keuze.")