x = {first_name: "Coding", last_name: "Dojo"}

puts x[:first_name] if x[:last_name].eql? "Dojo"

x.delete(:last_name)

puts x

puts x.has_key?(:first_name)