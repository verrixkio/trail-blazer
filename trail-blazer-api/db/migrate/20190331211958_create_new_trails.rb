class CreateNewTrails < ActiveRecord::Migration[5.1]
  def change
    create_table :new_trails do |t|
      t.string :name

      t.timestamps
    end
  end
end
