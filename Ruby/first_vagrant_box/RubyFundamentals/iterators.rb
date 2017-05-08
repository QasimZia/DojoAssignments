a = ["Matz", "Guido", "Dojo", "Choi", "John"]
b = [5, 6, 9, 3, 1, 2, 4, 7, 8, 10]

#----------------------------------------------------------------------#
# returns true or false if any element matches conditions in block

puts "--"
puts a.any? { |word| word.length >= 3 }
puts "--"

#----------------------------------------------------------------------#
# for each element calls block once

a.each { |word| print word, "--" }
puts "\n"

#----------------------------------------------------------------------#
# collect return a new array with the results of running block once for every element in enum

x = b.collect { |i| i*i }

#----------------------------------------------------------------------#
# detect returns the first for which block is not false

puts "--"
puts (1..100).detect { |i| i % 5 == 0 and i % 7 == 0 }

#----------------------------------------------------------------------#
# find all returns an array containing all elements of enum for which block is not false

puts "--"
puts a.find_all { |word| word.length == 4 }

#----------------------------------------------------------------------#
# reject returns a new array containing all element of enum except for which block is true

puts "--"
puts a.reject { |word| word.length == 4 }

#----------------------------------------------------------------------#
# upto iterates block upto the int number

puts "--"
5.upto(10) { |i| print i, " " }
print "\n" + "--" + "\n"