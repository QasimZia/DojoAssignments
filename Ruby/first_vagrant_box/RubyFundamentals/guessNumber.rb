def guessNumber guess
    number = 25
    guessInt = guess.to_i
    if guessInt == number
        return "You got it!"
    elsif guessInt > number
        return "Guess was too high!"
    elsif guessInt < number
        return "Too Low!"
    end
end

puts "Please enter your guess"
userGuess = gets

puts guessNumber(userGuess)