require_relative 'human'
class Wizard < Human
    def initialize()
        @health = 50
        @intelligence = 25
    end 

    def heal()
        @health += 10
    end

    def fireball(obj)
        if obj.class.ancestors.include?(Human)
            obj.health -= 20
            puts "Attacking #{obj}"
            true
        else
            false
        end
    end
end

wizard1 = Wizard.new

wizard2 = Wizard.new

wizard1.fireball(wizard2) 