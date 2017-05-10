require_relative 'apple_tree'
RSpec.describe Apple_Tree do
    before(:each) do
        @tree = Apple_Tree.new(0, 1, 0)
    end

    context "tree is under 3 years old" do
        it "raises an error if someone tries to set height" do
            expect{ @tree.height = 15 }.to raise_error(NoMethodError)
        end
        it "raises an error if someone tries to set apple_count" do
            expect{ @tree.apple_count = 15 }.to raise_error(NoMethodError)
        end
        it "has a getter method for apple_count, age, and heigh" do
            expect(@tree.age).to eql(0)
            expect(@tree.height).to eql(1)
            expect(@tree.apple_count).to eql(0)
        end
    end

    context "tree is between 3 and 7 years old" do
        before(:each) do
            for x in 1..4
                @tree.year_gone_by
            end 
        end
        it "raises an error if someone tries to set height" do
            expect{ @tree.height = 15 }.to raise_error(NoMethodError)
        end
        it "raises an error if someone tries to set apple_count" do
            expect{ @tree.apple_count = 15 }.to raise_error(NoMethodError)
        end
        it "has a getter method for apple_count, age, and heigh" do
            expect(@tree.age).to eql(4)
            expect(@tree.height).to eql(1.4641000000000002)
            expect(@tree.apple_count).to eql(2)
        end
    end

    context "tree is over 10 years old" do
        before(:each) do
            for x in 1..11
                @tree.year_gone_by
            end
        end
        it "raises an error if someone tries to set height" do
            expect{ @tree.height = 15 }.to raise_error(NoMethodError)
        end
        it "raises an error if someone tries to set apple_count" do
            expect{ @tree.apple_count = 15 }.to raise_error(NoMethodError)
        end
        it "has a getter method for apple_count, age, and heigh" do
            expect(@tree.age).to eql(11)
            expect(@tree.height).to eql(2.8531167061100002)
            expect(@tree.apple_count).to eql(14)
        end
    end       
end