#-----------------------------------------------------------#
#puzzle 1

# def sum_array(arr)
#     sum = 0
#     for i in 0...arr.length
#         sum += arr[i]
#     end

#     puts sum

#     arr = arr.reject{ |i| i < 10 }

# end

# arr = [3,5,1,2,7,9,8,13,25,32]

#-----------------------------------------------------------#
#puzzle 2

# arr = ["John", "KB", "Oliver", "Cory", "Matthew", "Christopher"]

# def sorted_array(arr)
#     puts arr.shuffle
#     arr = arr.reject{ |i| i.length < 5 }

# end

# p sorted_array(arr)

#-----------------------------------------------------------#
#puzzle 3

# arr = ("a".."z").to_a

# def check_arr(arr)
#     arr.shuffle!

#     puts arr[25]

#     puts arr[0]

#     puts "This is a vowel" if arr[0] == "a" or arr[0] == "e" or arr[0] == "o" or arr[0] == "u" 

# end

# check_arr(arr)

#-----------------------------------------------------------#
#puzzle 4

# arr = Array.new(10) { rand(55..100) } 

# p arr

#-----------------------------------------------------------#
#puzzle 5

# arr = Array.new(10) { rand(55..100) } 

# p arr.sort!

# puts arr.min

# puts arr.max

#-----------------------------------------------------------#
#puzzle 6

# new_string = (0..5).map { (65+rand(26)).chr }.join

# puts new_string

#-----------------------------------------------------------#

