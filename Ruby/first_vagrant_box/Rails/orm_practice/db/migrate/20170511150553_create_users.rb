class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :email
      t.string :password
      t.integer :age

      t.timestamps
    end
  end
end
