# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Artist.create(name: "Daft Punk", bio: "Two French men making crazy electronic music", genre: "Electronic", website: "https://www.daftpunk.com/")
Artist.create(name: "Kendrick Lamar", bio: "Compton's second coming of Christ", genre: "Hip-Hop", website: "https://oklama.com/")
Artist.create(name: "Pearl Jam", bio: "Eddie Vedder the GOAT! Nirvana who? This is the only Seattle band that matters", genre: "Grunge", website: "https://pearljam.com/")
Artist.create(name: "Nirvana", bio: "Kurt Cobain the GOAT! Pearl Jam who? This is the only Seattle band that matters", genre: "Grunge", website: "https://www.nirvana.com/")
Artist.create(name: "Hole", bio: "Good band BUT I HATE COURTNEY LOVE!!!", genre: "Rock", website:"https://en.wikipedia.org/wiki/Hole_(band)")

Review.create(rating: "5", title: 'This band is cool', body: "I'm this band's number one fan!", artist: Artist.first)
Review.create(rating: "1", title: 'I like their music', body: "These guys are like really good", artist: Artist.fourth)
Review.create(rating: "1", title: 'Worst band ever', body: "This band is horrible and should be ashamed of themselves", artist: Artist.last)
Review.create(rating: "2", title: 'I listen to this artist sometimes', body: "I'm this band's number one fan!", artist: Artist.first)
Review.create(rating: "5", title: 'I like', body: "Very cool", artist: Artist.second)

User.create(email: "user1@email.com", username: "testuser2")
User.create(email: "user1@email.com", username: "another")
User.create(email: "user1@email.com", username: "Aidan")
User.create(email: "user1@email.com", username: "420")