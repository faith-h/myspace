10.times do
  name = Faker::Name.name
  bio = Faker::TvShows::SouthPark.quote
  avatar = Faker::Avatar.image(name, '100x400', 'png', 'set5')
  Friend.create(name: name, bio: bio, avatar: avatar)
end

puts "DB seeded"