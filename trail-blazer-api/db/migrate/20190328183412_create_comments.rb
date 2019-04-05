class CreateComments < ActiveRecord::Migration[5.1]
  def change
    create_table :comments do |t|
      t.string :data
      t.string :name
      t.references :trails, foreign_key: true
      t.timestamps
    end
  end
end
