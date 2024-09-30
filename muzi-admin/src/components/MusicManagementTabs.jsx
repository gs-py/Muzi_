import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Music, Image as ImageIcon, Search } from "lucide-react"

// Mock data for demonstration purposes
const mockSongs = [
  { id: "1", title: "Song 1", artist: "Artist 1", duration: 180 },
  { id: "2", title: "Song 2", artist: "Artist 2", duration: 240 },
]

const mockAlbums = [
  { id: "1", title: "Album 1", artist: "Artist 1", year: 2021 },
  { id: "2", title: "Album 2", artist: "Artist 2", year: 2022 },
]

export default function MusicManagementTabs() {
  const [musicFile, setMusicFile] = useState(null)
  const [coverPhoto, setCoverPhoto] = useState(null)
  const [selectedSong, setSelectedSong] = useState(null)
  const [selectedAlbum, setSelectedAlbum] = useState(null)

  const handleMusicFileChange = (event) => {
    const file = event.target.files[0]
    if (file && file.type.startsWith('audio/')) {
      setMusicFile(file)
    } else {
      alert('Please select a valid audio file')
    }
  }

  const handleCoverPhotoChange = (event) => {
    const file = event.target.files[0]
    if (file && file.type.startsWith('image/')) {
      setCoverPhoto(file)
    } else {
      alert('Please select a valid image file')
    }
  }

  const handleSongSearch = (event) => {
    event.preventDefault()
    const songId = event.target.elements['remove-song-id'].value
    const song = mockSongs.find(s => s.id === songId)
    setSelectedSong(song || null)
  }

  const handleAlbumSearch = (event) => {
    event.preventDefault()
    const albumId = event.target.elements['remove-album-id'].value
    const album = mockAlbums.find(a => a.id === albumId)
    setSelectedAlbum(album || null)
  }

  return (
    <div className="bg-[#1a1a1a] bg-grid-white/[0.2] min-h-screen p-6">
      <Tabs defaultValue="add-song" className="w-full max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-4 mb-4">
          <TabsTrigger value="add-song">Add Song</TabsTrigger>
          <TabsTrigger value="remove-song">Remove Song</TabsTrigger>
          <TabsTrigger value="add-album">Add Album</TabsTrigger>
          <TabsTrigger value="remove-album">Remove Album</TabsTrigger>
        </TabsList>
        <TabsContent value="add-song">
          <Card className="bg-black/50 text-white border-gray-800">
            <CardHeader>
              <CardTitle>Add Song</CardTitle>
              <CardDescription className="text-gray-400">
                Add a new song to your music library.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-1">
                <Label htmlFor="song-title">Song Title</Label>
                <Input id="song-title" placeholder="Enter song title" className="bg-gray-800 text-white border-gray-700" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="music-file">Music File</Label>
                <Input id="music-file" type="file" accept="audio/*" onChange={handleMusicFileChange} className="bg-gray-800 text-white border-gray-700" />
                {musicFile && (
                  <div className="flex items-center mt-2 p-2 bg-gray-800 rounded">
                    <Music className="w-6 h-6 mr-2" />
                    <span className="text-sm text-gray-400">{musicFile.name}</span>
                  </div>
                )}
              </div>
              <div className="space-y-1">
                <Label htmlFor="cover-photo">Cover Photo</Label>
                <Input id="cover-photo" type="file" accept="image/*" onChange={handleCoverPhotoChange} className="bg-gray-800 text-white border-gray-700" />
                {coverPhoto ? (
                  <div className="mt-2">
                    <img
                      src={URL.createObjectURL(coverPhoto)}
                      alt="Cover preview"
                      className="w-32 h-32 object-cover rounded"
                    />
                  </div>
                ) : (
                  <div className="mt-2 w-32 h-32 bg-gray-800 rounded flex items-center justify-center">
                    <ImageIcon className="w-12 h-12 text-gray-600" />
                  </div>
                )}
              </div>
            </CardContent>
            <CardFooter>
              <Button className="bg-white text-black hover:bg-gray-200">Add Song</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="remove-song">
          <Card className="bg-black/50 text-white border-gray-800">
            <CardHeader>
              <CardTitle>Remove Song</CardTitle>
              <CardDescription className="text-gray-400">
                Remove a song from your music library.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <form onSubmit={handleSongSearch} className="space-y-2">
                <div className="flex space-x-2">
                  <Input id="remove-song-id" placeholder="Enter song ID" className="bg-gray-800 text-white border-gray-700" />
                  <Button type="submit" size="icon" className="bg-white text-black hover:bg-gray-200"><Search className="h-4 w-4" /></Button>
                </div>
              </form>
              {selectedSong && (
                <div className="p-4 bg-gray-800 rounded">
                  <h3 className="font-semibold">{selectedSong.title}</h3>
                  <p className="text-sm text-gray-400">Artist: {selectedSong.artist}</p>
                  <p className="text-sm text-gray-400">Duration: {selectedSong.duration} seconds</p>
                </div>
              )}
            </CardContent>
            <CardFooter>
              <Button variant="destructive" disabled={!selectedSong}>Remove Song</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="add-album">
          <Card className="bg-black/50 text-white border-gray-800">
            <CardHeader>
              <CardTitle>Add Album</CardTitle>
              <CardDescription className="text-gray-400">
                Add a new album to your music library.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="album-title">Album Title</Label>
                <Input id="album-title" placeholder="Enter album title" className="bg-gray-800 text-white border-gray-700" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="album-artist">Artist</Label>
                <Input id="album-artist" placeholder="Enter artist name" className="bg-gray-800 text-white border-gray-700" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="album-year">Release Year</Label>
                <Input id="album-year" type="number" placeholder="Enter release year" className="bg-gray-800 text-white border-gray-700" />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="bg-white text-black hover:bg-gray-200">Add Album</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="remove-album">
          <Card className="bg-black/50 text-white border-gray-800">
            <CardHeader>
              <CardTitle>Remove Album</CardTitle>
              <CardDescription className="text-gray-400">
                Remove an album from your music library.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <form onSubmit={handleAlbumSearch} className="space-y-2">
                <div className="flex space-x-2">
                  <Input id="remove-album-id" placeholder="Enter album ID" className="bg-gray-800 text-white border-gray-700" />
                  <Button type="submit" size="icon" className="bg-white text-black hover:bg-gray-200"><Search className="h-4 w-4" /></Button>
                </div>
              </form>
              {selectedAlbum && (
                <div className="p-4 bg-gray-800 rounded">
                  <h3 className="font-semibold">{selectedAlbum.title}</h3>
                  <p className="text-sm text-gray-400">Artist: {selectedAlbum.artist}</p>
                  <p className="text-sm text-gray-400">Year: {selectedAlbum.year}</p>
                </div>
              )}
            </CardContent>
            <CardFooter>
              <Button variant="destructive" disabled={!selectedAlbum}>Remove Album</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}