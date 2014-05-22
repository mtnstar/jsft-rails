# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
#

100.times do
  Buddy.create({
    nick: Forgery(:name).first_name,
    birthdate: rand(100.years).ago,
    bodysize: rand(120...210),
    strong: Forgery(:basic).boolean
  })
end
