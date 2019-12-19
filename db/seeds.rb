10.times do
  name = Faker::Name.name
  bio = Faker::Quote.matz
  avatar = Faker::Avatar.image(slug: name, size: '200x300', format: 'png', set: 'set5')
  Friend.create(name: name, bio: bio, avatar: avatar)
end

puts "DB seeded"