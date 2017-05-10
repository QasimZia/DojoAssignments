require_relative "human"
class Ninja < Human
    def initialize()
        @stealth = 175
    end 

    def steal(obj)
        if obj.class.ancestors.include?(Human)
            obj.health -= 10
            @health += 10
            true
        else
            false
        end
    end

    def get_away
        @health -= 15
    end

end