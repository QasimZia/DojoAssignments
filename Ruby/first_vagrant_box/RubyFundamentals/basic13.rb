#-----------------------------------------------------------#

# puts (1..255).to_a

#-----------------------------------------------------------#

# for i in 1..255
#     if i % 2 != 0
#         puts i
#     end
# end
        
#-----------------------------------------------------------#

# sum = 0
# for i in 0..255
#     puts "New Number:" + i.to_s
#     sum += i
#     puts "Sum:" + sum.to_s
# end

#-----------------------------------------------------------#

# a = [1, 2, 3, 4, 5, 6, 7]

# a.each { |i| puts i }

#-----------------------------------------------------------#

# a = [-1, 2, -5, -8, 2, -23, -55]

# puts a.max

#-----------------------------------------------------------#

# def average (arr)
#     sum = 0
#     avg = 0
    
#     arr.each{ |i| sum += i }
    
#     avg = sum / arr.length
# end

# puts average((1..15).to_a)

#-----------------------------------------------------------#

# x = (1..255).reject { |i| i % 2 == 0 }

#-----------------------------------------------------------#

# def greater_than(arr, y)
#     new_arr = arr.find_all { |i| i > y }
#     count = newArr.length 
# end

# puts greater_than([1,3,4], 2)

#-----------------------------------------------------------#

# def square_arr(arr)
#     arr = arr.collect{ |i| i*i }
# end

# p square_arr([1,2,3,4,5])

#-----------------------------------------------------------#

# def remove_negative(arr)
#     for i in 0...arr.length
#         if arr[i] < 0
#             arr[i] = 0
#         end
#     end
#     p arr
# end

# remove_negative([1,2,3,-4,5,-1])

#-----------------------------------------------------------#

# def average (arr)
#     sum = 0
#     avg = 0
    
#     arr.each{ |i| sum += i }
    
#     avg = sum / arr.length
# end

# def max_min_avg(arr)
    
#     mma = {max: arr.max, min: arr.min, avg: average(arr)}

# end

# puts max_min_avg([1,2,3,4,5,6,7])

#-----------------------------------------------------------#

# def replace_negative(arr)
#     for i in 0...arr.length
#         if arr[i] < 0
#             arr[i] = "Dojo"
#         end
#     end
#     p arr
# end

# replace_negative([1,2,3,-4,5,-1])