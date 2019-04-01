class CreateTrailSolutions < ActiveRecord::Migration[5.1]
  def change
    create_table :trail_solutions do |t|
      t.string :description_to_fix
      t.integer :timeline_days
      t.integer :cost
      t.string :collaboration
      t.references :trails, foreign_key: true
      t.references :users, foreign_key: true
      t.timestamps
    end
  end
end


