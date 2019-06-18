# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# AdminUser.create!(email: 'admin@example.com', password: 'password', password_confirmation: 'password') if Rails.env.development?


# User.create!([
#   {email: "usernewadmin@gmail.com", password: "usernewadminuser", password_confirmation: "usernewadminuser",  created_at: "2019-05-06 14:02:10", updated_at: "2015-05-06 14:02:10", name: "Alicia", city: "Canberra", country: "Australia", area:"hidrología"},
#   {email: "usernewuser@gmail.com", password: "usernewuseraccount", password_confirmation: "usernewuseraccount",  created_at: "2019-03-06 14:03:01", updated_at: "2019-03-06 14:03:01", name: "Antonia", city: "Roma", country: "Italy", area:"energía solar"},
#   {email: "usernewcustomer@gmail.com", password: "usernewcustomeruser", password_confirmation: "usernewcustomeruser", created_at: "2019-05-06 14:03:44", updated_at: "2019-05-06 14:03:44", name: "Barbara", city: "Tokyo", country: "Japan", area:"construcción"},
#   {email: "usernew@mvmanor.com", password: "newadminuser", password_confirmation: "newadminuser",  created_at: "2019-01-06 14:02:10", updated_at: "2015-01-06 14:02:10", name: "Santiago", city: "Belen", country: "Chile",area:"servicios sanitarios"},
#   {email: "newuser@mvmanor.com", password: "usernewuser", password_confirmation: "usernewuser",  created_at: "2019-04-06 14:03:01", updated_at: "2019-04-06 14:03:01", name: "Miguel", city: "Berlin", country: "Germany", area:"minería"},
#   {email: "newcustomer@customer.com", password: "usernewcustomer", password_confirmation: "usernewcustomer", created_at: "2019-04-06 14:03:44", updated_at: "2019-04-06 14:03:44", name: "Claudio", city: "Tokyo", country: "Japan",area:"hidrología"}

# ])

User.create!([
  {email: "marisol@gmail.com", password: "usernewad", password_confirmation: "usernewad",  created_at: "2019-02-06 14:02:10", updated_at: "2015-02-06 14:02:10", name: "Marisol", city: "Brasilia", country: "Brazil", area:"hidrología"},
  {email: "andres@gmail.com", password: "usernaccount", password_confirmation: "usernaccount",  created_at: "2019-01-06 14:03:01", updated_at: "2019-01-06 14:03:01", name: "Andres", city: "Roma", country: "Italy", area:"energía solar"},
  {email: "lucia@gmail.com", password: "userstomeruser", password_confirmation: "userstomeruser", created_at: "2019-05-06 14:03:44", updated_at: "2019-05-06 14:03:44", name: "Lucia", city: "Habana", country: "Cuba", area:"meteorología"},
  {email: "marcelw@mvmanor.com", password: "newa64r", password_confirmation: "newa64r",  created_at: "2019-04-06 14:02:10", updated_at: "2015-04-06 14:02:10", name: "Marcel", city: "Belen", country: "Chile",area:"hidrología"},
  {email: "eduardor@mvmanor.com", password: "usewuser", password_confirmation: "usewuser",  created_at: "2019-04-06 14:03:01", updated_at: "2019-04-06 14:03:01", name: "Eduardo", city: "Berlin", country: "Germany", area:"minería"},
  {email: "camila@customer.com", password: "usernustomer", password_confirmation: "usernustomer", created_at: "2019-05-06 14:03:44", updated_at: "2019-05-06 14:03:44", name: "Camila", city: "La Serena", country: "Chile",area:"hidrología"},
  {email: "lucia@customer.com", password: "usernstomer", password_confirmation: "usernstomer", created_at: "2019-02-06 14:03:44", updated_at: "2019-02-06 14:03:44", name: "Camila", city: "Viña del mar", country: "Chile",area:"hidrología"},
  {email: "jaime@customer.com", password: "usernewcuomer", password_confirmation: "usernewcuomer", created_at: "2019-03-06 14:03:44", updated_at: "2019-03-06 14:03:44", name: "Jaime", city: "Mexico city", country: "Mexico",area:"hidrología"},
  {email: "jaime@customer.com", password: "userneuomer", password_confirmation: "userneuomer", created_at: "2019-03-06 14:03:44", updated_at: "2019-03-06 14:03:44", name: "Jaime", city: "Mexico city", country: "Mexico",area:"agro/agroindustria/riego"},
  {email: "jimena@customer.com", password: "usernewctomer", password_confirmation: "usernewctomer", created_at: "2019-03-07 14:03:44", updated_at: "2019-03-07 14:03:44", name: "Jimena", city: "Wellington", country: "New Zealand",area:"agro/agroindustria/riego"}


])