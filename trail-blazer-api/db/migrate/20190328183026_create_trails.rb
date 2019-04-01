class CreateTrails < ActiveRecord::Migration[5.1]
  def change
    create_table :trails do |t|
      t.integer :trail_forks_id
      t.string :name
<<<<<<< HEAD
      
=======
      t.string :description
      t.integer :length
      t.integer :difficulty
      t.integer :condition
      t.string :coded_path
>>>>>>> 51a3744a25b0e764ed5debddf48339a06b682287
      t.timestamps
    end
  end
end
