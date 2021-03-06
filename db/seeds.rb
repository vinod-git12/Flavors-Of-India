# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Restaurant.destroy_all
Review.destroy_all
User.destroy_all

@vinod = User.create!(username: 'vinod', email:'vinod@email.com', password: '123456')
@nikki = User.create!(username: 'nikki', email:'nikki@email.com', password: '123457')
@rudra = User.create!(username: 'rudra', email:'rudra@email.com', password: '123458')
@samayra = User.create!(username: 'samayra', email:'samayra@email.com', password: '123459')

puts '#{User.count} users created'

@krishna = @Restaurant.create!(name: 'New Krishna', img_url: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80', address: '3972, Sharaonville, cincinnati')
@amber = @Restaurant.create!(name: 'Amber India', img_url: 'https://bloximages.chicago2.vip.townnews.com/madison.com/content/tncms/assets/v3/editorial/a/ad/aad3a0a0-5a91-5fce-9524-27cf6f819144/5e729e5c6b4f2.image.jpg?resize=1200%2C800', address: '4972, downtown, cincinnati')
@tajmahl = @Restaurant.create!(name: 'Tajmahal', img_url: 'http://cdn.cnn.com/cnnnext/dam/assets/200120161356-cnn-worlds-best-new-restaurants---madera---simon-brown-photography-1-1.jpg', address: '5972, west chester, cincinnati')
@namastey = @Restaurant.create!(name: 'Namastey India', img_url: 'https://www.elitetraveler.com/wp-content/uploads/2007/02/Alain-Ducasse-scaled.jpg', address: '6972, oakley, cincinnati')
@cuisine = @Restaurant.create!(name: 'Indian Cuisine', img_url: 'https://s3.eu-west-1.amazonaws.com/openreply-poltronafrau/prod/cappellini/contentmanager/content/cate_progetti/cena18settembre_077.jpg', address: '7972, Liberty Township, cincinnati')

puts '#{Restaurant.count} restaurants created'

@Review.create!(content: 'Great place to enjoy Indian Food', user: @vinod, restaurant: @krishna )
@Review.create!(content: 'Tasty Food with Great Service', user: @nikki, restaurant: @tajmahl )
@Review.create!(content: 'Loved It', user: @rudra, restaurant: @namastey )
@Review.create!(content: 'Awesome Food & Nice People', user: @samayra, restaurant: @amber )
@Review.create!(content: 'Good Place for Vegetarians, great menu', user: @vinod, restaurant: @tajmahal )






