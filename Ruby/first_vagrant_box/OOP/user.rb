class User
    #declaring setter method
    # def first_name=(val)
    #     @first_name = val
    # end

    #declaring get method
    # def first_name
    #     @first_name
    # end

    #get and set method using attr
    # attr_reader :last_name
    # attr_writer :last_name

    #set and get method for multiple properties on one line using attr
    attr_accessor :first_name, :last_name
    def initialize(f_name, l_name)
        @first_name = f_name
        @last_name = l_name
    end

end

user1 = User.new("Stephen", "Curry")
user2 = User.new("Matz", "Something")

puts user1
puts user1.last_name