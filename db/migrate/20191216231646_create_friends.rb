class CreateFriends < ActiveRecord::Migration[6.0]
  def change
    create_table :friends do |t|
      t.string :name
      t.string :bio
      t.string :avatar

      t.timestamps
    end
  end
end
