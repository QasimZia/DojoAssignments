class Apple_Tree
    attr_accessor :age
    attr_reader :height, :apple_count
    def initialize(tree_age, tree_height, tree_apples)
        @age = tree_age
        @height = tree_height
        @apple_count = tree_apples
    end

    def year_gone_by
        if @age >= 3 and @age < 10
            @apple_count += 2
            new_height = @height * 0.10
            @height += new_height
            @age += 1
        else 
            new_height = @height * 0.10
            @height += new_height
            @age += 1
        end            
    end

    def pick_apples
        @apple_count = 0
    end
end
