class CreateTrails < ActiveRecord::Migration[5.1]
  def change
    create_table :trails do |t|
      t.integer :trail_forks_id
      t.string :name
      t.string :description
      t.integer :length
      t.integer :difficulty
      t.integer :condition
      t.string :coded_path
      t.timestamps
    end
  end
end
