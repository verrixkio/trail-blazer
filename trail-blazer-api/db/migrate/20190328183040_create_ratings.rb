class CreateRatings < ActiveRecord::Migration[5.1]
  def change
    create_table :ratings do |t|
      t.integer :feedback
      t.references :trails, index: true, foreign_key: true
      t.references :users, index: true, foreign_key: true
      t.timestamps
    end
  end
end
