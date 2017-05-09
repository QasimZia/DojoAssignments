class MathDojo
    def add *x
        sum = 0
        x.each { |i| sum += i }
        self
    end

    def subtract *x
        difference = 0
        x.each { |i| difference -= i }
        self
    end
    
end

challenge1 = MathDojo.new.add(2).add(2, 5).subtract(3, 2)

puts challenge1