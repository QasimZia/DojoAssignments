require_relative "bank_account"
RSpec.describe Bank_Account do
    before(:each) do 
        @account1 = Bank_Account.new(500, 10)
        @account2 = Bank_Account.new(200, 15)
    end

    it "has a getter method for retrieving checking account balance" do
        expect(@account1.checking_bal).to eq(500)
    end

    it "has a getter method for retrieving total account balance" do
        expect(@account1.total_balance).to eq(510)
    end

    it "has a function that allows user to withdraw cash" do
        expect(@account1.checking_bal).to eq(500)
        @account1.withdraw("checking", 450)
        expect(@account1.checking_bal).to eq(50)
    end

    it "has an error if user tries to withdraw more than what they have" do
        expect { @account1.withdraw("checking", 600) }.to raise_error("You Broke")
    end

    it "has an error if the user attempts to retrieve total number of bank accounts" do
        expect { @account1.total_accounts }.to raise_error(NoMethodError)
    end

    it "has an error when user attempts to set interest rate" do
        expect { @account.interest_rate = 0.5 }.to raise_error(NoMethodError)
    end
end