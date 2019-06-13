# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
#AdminUser.create!(email: 'admin@example.com', password: 'password', password_confirmation: 'password') if Rails.env.development?


User.create!([
  {email: "testadmin@mvmanor.co.uk", password: "testadminuser", password_confirmation: "testadminuser",  created_at: "2019-02-06 14:02:10", updated_at: "2015-02-06 14:02:10", name: "Santiago", city: "Santiago", country: "Chile"},
  {email: "testuser@mvmanor.co.uk", password: "testuseraccount", password_confirmation: "testuseraccount",  created_at: "2019-02-06 14:03:01", updated_at: "2019-02-06 14:03:01", name: "Miguel", city: "Moscu", country: "Russia"},
  {email: "testcustomer@customer.co.uk", password: "testcustomeruser", password_confirmation: "testcustomeruser", created_at: "2019-05-06 14:03:44", updated_at: "2019-05-06 14:03:44", name: "Fernanda", city: "Tokio", country: "Japan"}

])