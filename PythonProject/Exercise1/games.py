class Character:
    def __init__(self, name, level):
        self.name = name
        self.__level = level
    
    def get_level(self):
        return self.__level
    
    def set_level(self, value):
        if value < 1 or value > 100:
            raise ValueError()
        self.__level = value

    def is_high_level(self):
        if self.__level >= 50:
            return True
        return False
    
    def get_rank(self):
        if self.__level >= 90:
            return "Legend"
        if self.__level >= 70:
            return "Master"
        if self.__level >= 50:
            return "Expert"
        if self.__level >= 20:
            return "Adventurer"
        if self.__level >= 1:
            return "Beginner"
        
class Player:
    def __init__(self, player_id, username):
        self.player_id = player_id
        self.username = username
        self.__characters = []

    def get_characters(self):
        return self.__characters
    
    def add_character(self, character):
        for c in self.__characters:
            if c.name == character.name:
                raise ValueError("Character already exists!")
        self.__characters.append(character)

    def calculate_avarage_level(self):
        if len(self.__characters) == 0:
            return 0
        
        totaal = 0

        for c in self.__characters:
            totaal = totaal + c.get_level()
        
        gemiddelde = totaal / len(self.__characters)
        return gemiddelde
    
    def get_high_level_characters(self):
        lijst = []

        for c in self.__characters:
            if c.get_level() >= 50:
                lijst.append(c)
        
        return lijst

    def get_best_character(self):
        if len(self.__characters) == 0:
            return None

        beste = self.__characters[0]

        for c in self.__characters:
            if c.get_level() > beste.get_level():
                beste = c
        
        return beste
    
    def remove_beginner_characters(self):
        nieuwe_lijst = []

        for c in self.__characters:
            if c.get_level() >= 50:
                nieuwe_lijst.append(c)
            
        self.__characters = nieuwe_lijst



c1 = Character("Knight", 82)
c2 = Character("Mage", 14)
c3 = Character("Archer", 67)

player = Player("P001", "Emma")

player.add_character(c1)
player.add_character(c2)
player.add_character(c3)

print(player.calculate_avarage_level())

print(player.get_best_character().name)

player.remove_beginner_characters()

for character in player.get_characters():
    print(character.name)