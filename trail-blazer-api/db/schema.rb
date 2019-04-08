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

ActiveRecord::Schema.define(version: 20190403022712) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "comments", force: :cascade do |t|
    t.string "data"
    t.string "name"
    t.bigint "trails_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["trails_id"], name: "index_comments_on_trails_id"
  end

  create_table "donations", force: :cascade do |t|
    t.integer "amount"

    t.string "name"
    t.bigint "trails_id"

    t.bigint "trail_solutions_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["trail_solutions_id"], name: "index_donations_on_trail_solutions_id"

    t.index ["trails_id"], name: "index_donations_on_trails_id"

  end

  create_table "new_trails", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "ratings", force: :cascade do |t|
    t.integer "feedback"
    t.bigint "trails_id"
    t.bigint "users_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["trails_id"], name: "index_ratings_on_trails_id"
    t.index ["users_id"], name: "index_ratings_on_users_id"
  end

  create_table "trail_solutions", force: :cascade do |t|
    t.string "description_to_fix"
    t.integer "timeline_days"
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
    t.integer "trail_forks_id"
    t.string "name"
    t.string "description"
    t.integer "length"
    t.integer "difficulty"
    t.integer "condition"
    t.string "coded_path"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "comments", "trails", column: "trails_id"
  add_foreign_key "donations", "trail_solutions", column: "trail_solutions_id"

  add_foreign_key "donations", "trails", column: "trails_id"

  add_foreign_key "ratings", "trails", column: "trails_id"
  add_foreign_key "ratings", "users", column: "users_id"
  add_foreign_key "trail_solutions", "trails", column: "trails_id"
  add_foreign_key "trail_solutions", "users", column: "users_id"
end
