# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20190328184555) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "comments", force: :cascade do |t|
    t.string "data"
    t.bigint "trails_id"
    t.bigint "users_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["trails_id"], name: "index_comments_on_trails_id"
    t.index ["users_id"], name: "index_comments_on_users_id"
  end

  create_table "ratings", force: :cascade do |t|
    t.string "feedback"
    t.bigint "trails_id"
    t.bigint "users_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["trails_id"], name: "index_ratings_on_trails_id"
    t.index ["users_id"], name: "index_ratings_on_users_id"
  end

  create_table "trail_solutions", force: :cascade do |t|
    t.string "description_to_fix"
    t.integer "timeline"
    t.integer "cost"
    t.string "collaboration"
    t.bigint "trails_id"
    t.bigint "users_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["trails_id"], name: "index_trail_solutions_on_trails_id"
    t.index ["users_id"], name: "index_trail_solutions_on_users_id"
  end

  create_table "trails", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "comments", "trails", column: "trails_id"
  add_foreign_key "comments", "users", column: "users_id"
  add_foreign_key "ratings", "trails", column: "trails_id"
  add_foreign_key "ratings", "users", column: "users_id"
  add_foreign_key "trail_solutions", "trails", column: "trails_id"
  add_foreign_key "trail_solutions", "users", column: "users_id"
end
