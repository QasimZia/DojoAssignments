require 'rails_helper'

RSpec.describe User, type: :model do
  it "should not save if first_name field is blank" do 
    user = User.new(
      first_name:"",
      last_name:"chang",
      email:"schang@codingdojo.com"
    )
    expect(user).to be_invalid
  end

  it "should not save if last_name field is blank" do
    user = User.new(
      first_name:"michael",
      last_name:"",
      email:"schang@codingdojo.com"
    )
    expect(user).to be_invalid
  end

  it "should not save if email already exists" do
    User.create(
      first_name:"michael",
      last_name:"chang",
      email:"schang@codingdojo.com"
    )

    user2 = User.new(
      first_name:"Something",
      last_name:"Else",
      email:"schang@codingdojo.com"
    )

    puts user2.valid?
    expect(user2).to be_invalid
  end

  it "should not save if invalid email format" do
    user = User.new(
      first_name:"shake",
      last_name:"chang",
      email:"thisisinvalid"
    )
    expect(user).to be_invalid
  end
end
