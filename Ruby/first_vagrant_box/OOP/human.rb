class Human
    attr_accessor :strength, :intelligence, :stealth, :health
    def initialize
        @health = 100
        @strength = 3
        @intelligence = 3
        @stealth = 3 
    end

    def attack(obj)
        if obj.class.ancestors.include?(Human)
            obj.health -= 10

            true
        else 
            false
        end
    end
end