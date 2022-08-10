class MusicBrainzClient

  def self.request_artist_data(artist)
    url = "http://musicbrainz.org/ws/2/artist/?query=name:#{artist}&fmt=json"
    @response = Faraday.get(url)
  end

  def self.parse_data
    data = JSON.parse(@response.body)
    artist = data["artists"][0]
    artist_data = artist.slice("name")
    artist_data.merge!("city": artist.dig('begin-area', 'name'), "country": artist.dig('area', 'name'), "year-started": artist.dig('life-span', 'begin'), "year-ended": artist.dig('life-span', 'end'))
  end
end