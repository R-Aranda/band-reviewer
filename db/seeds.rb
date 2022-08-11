# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Artist.create(name: "Daft Punk", bio: "Two French men making crazy electronic music", photo: "https://static01.nyt.com/images/2021/02/23/arts/22daftpunk/merlin_68436082_cbc2d16f-e4ce-4e8e-9f06-d2789c9f309b-mobileMasterAt3x.jpg", genre: "Electronic", website: "https://www.daftpunk.com/")
Artist.create(name: "Kendrick Lamar", bio: "Compton's second coming of Christ", photo: "https://www.nme.com/wp-content/uploads/2022/06/kendrick-lamar-glasto-2022.jpg", genre: "Hip-Hop", website: "https://oklama.com/")
Artist.create(name: "Pearl Jam", bio: "Eddie Vedder the GOAT! Nirvana who? This is the only Seattle band that matters", photo: "https://www.rollingstone.com/wp-content/uploads/2020/03/PearlJam.jpg", genre: "Grunge", website: "https://pearljam.com/")
Artist.create(name: "Nirvana", bio: "Kurt Cobain the GOAT! Pearl Jam who? This is the only Seattle band that matters", photo: "https://townsquare.media/site/366/files/2014/11/Nirvana.jpg", genre: "Grunge", website: "https://www.nirvana.com/")
Artist.create(name: "Hole", bio: "Good band BUT I HATE COURTNEY LOVE!!!", photo: "https://i.etsystatic.com/5608450/r/il/7e9bcd/3676090408/il_fullxfull.3676090408_s71z.jpg", genre: "Rock", website:"https://en.wikipedia.org/wiki/Hole_(band)")
Artist.create(name: "Sammy Rae And The Friends", bio: "GO PUT A SMILE ON SOMEBODYS FACE, GO TELL SOMEBODY THEYVE GOT A PLACE IN THIS WORLD, GO TELL SOMEBODY YOU WANNA BE FRIENDS WITH THEM.", photo: "https://www.thelantern.com/files/2022/03/D3AA5415-74C2-4D47-9CF6-035ADDA0A68E.jpeg", genre: "Pop", website: "https://www.sammyrae.com/")
Artist.create(name: "Alabama Shakes", bio: "Alabama Shakes is an American rock band formed in Athens, Alabama, in 2009.", photo: "https://gardenandgun.com/wp-content/uploads/2016/12/GG0315_Shakes_02-1024x712.jpg", genre: "Blues Rock", website: "https://alabamashakes.com/")
Artist.create(name: "Alicia Keys", bio: "A classically trained pianist, Keys began composing songs by age 12 and was signed at 15 years old by Columbia Records.", photo: "https://www.biography.com/.image/t_share/MTQ0NTk4NzY3ODM4OTYzMDMx/alicia_keys_michael_muller_nbc_nbcu_getty_images_592222308_profile.jpg", genre: "R&B", website: "https://en.wikipedia.org/wiki/Alicia_Keys")
Artist.create(name: "Arctic Monkeys", bio: "Arctic Monkeys are an English rock band formed in Sheffield in 2002.", photo: "https://guitar.com/wp-content/uploads/2022/04/Arctic-Monkeys-Credit-Gabriel-Olsen-Getty-Images-for-Radio-com@2000x1500-1392x1044.jpg", genre: "Indie Rock", website: "https://www.arcticmonkeys.com/")
Artist.create(name: "Elton John", bio: "Sir Elton Hercules John CH CBE is a British singer, pianist and composer.", photo: "https://www.wonderwall.com/wp-content/uploads/sites/2/2021/03/shutterstock_editorial_10517032ai.jpg", genre: "Pop Rock", website: "http://eltonjohn.com/")
Artist.create(name: "Rihanna", bio: "Robyn Rihanna Fenty NH is a Barbadian singer, actress, and businesswoman.", photo: "https://pyxis.nymag.com/v1/imgs/5c3/d2d/0d809014d06afaffff48e2a0f78febb5fb-rihanna.rsquare.w330.jpg", genre: "Pop R&B", website:"http://rihanna.com/")
Artist.create(name: "Foo Fighters", bio: "Foo Fighters are an American rock band formed in Seattle in 1994.", photo: "https://media.pitchfork.com/photos/60d617bd46c357c48e83fe56/16:9/w_1280,c_limit/Foo-Fighters.jpeg", genre: "Grunge Rock", website:"http://foofighters.com/")

Review.create(rating: "⭐️⭐️⭐️⭐️⭐️", title: 'This band is cool', body: "I'm this band's number one fan!", artist: Artist.first)
Review.create(rating: "⭐️", title: 'I like their music', body: "These guys are like really good", artist: Artist.fourth)
Review.create(rating: "⭐️", title: 'Worst band ever', body: "This band is horrible and should be ashamed of themselves", artist: Artist.last)
Review.create(rating: "⭐️⭐️", title: 'I listen to this artist sometimes', body: "I'm this band's number one fan!", artist: Artist.first)
Review.create(rating: "⭐️⭐️⭐️⭐️⭐️", title: 'I like', body: "Very cool", artist: Artist.second)