# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create!(email: "user1@email.com", password: "111111", username: "testuser2")
User.create(email: "user2@email.com", password: "111111", username: "another")
User.create(email: "user3@email.com", password: "111111", username: "Aidan")
User.create(email: "user4@email.com", password: "111111", username: "420")

Artist.create(name: "Daft Punk", bio: "Two French men making crazy electronic music", genre: "Electronic", website: "https://www.daftpunk.com/")
Artist.create(name: "Kendrick Lamar", bio: "Compton's second coming of Christ", genre: "Hip-Hop", website: "https://oklama.com/")
Artist.create(name: "Pearl Jam", bio: "Eddie Vedder the GOAT! Nirvana who? This is the only Seattle band that matters", genre: "Grunge", website: "https://pearljam.com/")
Artist.create(name: "Nirvana", bio: "Kurt Cobain the GOAT! Pearl Jam who? This is the only Seattle band that matters", genre: "Grunge", website: "https://www.nirvana.com/")
Artist.create(name: "Hole", bio: "Good band BUT I HATE COURTNEY LOVE!!!", genre: "Rock", website:"https://en.wikipedia.org/wiki/Hole_(band)")

Review.create(title: 'This band is cool', body: "I'm this band's number one fan!", rating: "2", artist: Artist.first, user: User.first)
Review.create(title: 'I like their music', body: "These guys are like really good", rating: "2", artist: Artist.fourth, user: User.second)
Review.create(title: 'Worst band ever', body: "This band is horrible and should be ashamed of themselves", rating: "2", artist: Artist.last, user: User.first)
Review.create(title: 'I listen to this artist sometimes', body: "I'm this band's number one fan!", rating: "2", artist: Artist.first)
Review.create(title: 'I like', body: "Very cool", rating: "2", artist: Artist.second, user: User.first)
