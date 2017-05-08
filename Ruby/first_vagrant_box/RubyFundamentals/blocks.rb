def test
    puts "You are in method"
    yield
    puts "Back to method"
    yield
end

test { puts "You are in block" }