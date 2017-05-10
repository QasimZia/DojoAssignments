require_relative 'human'
class Samurai < Human
    @@total_samurai

    def self.get_total_accounts
        @@total_samurai
    end

    def initialize()
        @health = 200
        @@total_samurai += 1
    end 

    def death_blow(obj)
        if obj.class.ancestors.include?(Human)
            obj.health = 0
            true
        else
            false
        end
    end

    def get_away
        @health -= 15
    end

    def meditate()
        @health = 200
    end


end