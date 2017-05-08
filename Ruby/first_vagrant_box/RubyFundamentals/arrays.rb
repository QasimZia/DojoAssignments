a = ["Matz", "Guido", "Dojo", "Choi", "John"]
b = [5, 6, 9, 3, 1, 2, 4, 7, 8, 10]
c = ["Dojo", 9]
# puts a[0]
# puts a[1]

# puts b.class

x = (a+b)-c

puts x.to_s

a.delete("Matz")

puts a

a.reverse!

puts a

puts b.sort!
