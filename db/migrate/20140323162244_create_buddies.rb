class CreateBuddies < ActiveRecord::Migration
  def change
    create_table :buddies do |t|
      t.string :nick
      t.date :birthdate
      t.integer :bodysize
      t.boolean :strong

      t.timestamps
    end
  end
end
