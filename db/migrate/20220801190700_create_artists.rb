class CreateArtists < ActiveRecord::Migration[5.2]
  def change
    create_table :artists do |t|
      t.string :name, null: false
      t.text :bio, null: false
      t.string :genre 
      t.string :website
      
      t.timestamps null: false
    end
  end
end