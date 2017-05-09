class Bank_Account
    attr_reader :checking_bal, :savings_bal, :account_number, :total_balance, :interest_rate
    @@total_accounts = 0
    def initialize(inital_checkings, initial_savings)
        puts "Successfully created account"
        @account_number = generate_acc_number
        @checking_bal = inital_checkings
        @savings_bal = initial_savings
        @total_balance = @checking_bal + @savings_bal
        @interest_rate = 0.01
        @@total_accounts += 1
    end

    def show_balance
        puts "Checking Balance: #{@checking_bal}"
        puts "Savings Balance: #{@savings_bal}"
        puts "Total Balance: #{@total_balance}"
    end

    def account_info
        show_balance
        puts "Account Number: #{@account_number}"
        puts "Interest Rate: #{@interest_rate}"
    end

    def deposit(account, amount)
        if account.downcase == "checking"
            @checking_bal += amount
            @total_balance += amount
            puts "Money Money Money"
        elsif account.downcase == "savings" 
            @savings_bal += amount
            @total_balance += amount
            puts "Money"
        else 
            puts "No"
        end
    end

    def withdraw(account, amount)
        if account.downcase == "checking"
            if amount > @checking_bal
                puts "You Broke"
            else
                @checking_bal -= amount
                @total_balance -= amount
                puts "Money Money Money"
        elsif account.downcase == "savings" 
            if amount > @savings_bal
                puts "You Broke"
            else
                @savings_bal -= amount
                @total_balance -= amount
                puts "Money Money Money"
        else 
            puts "nah"
        end
    end

    def self.get_total_accounts
        @@total_accounts
    end

    private
        def generate_acc_number
            rand(1000..9999) 
        end
end

daniel = Bank_Account.new(500, 10)

daniel.account_info