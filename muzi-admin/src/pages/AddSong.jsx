import MusicManagementTabs from '@/components/MusicManagementTabs'
import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from '@/components/ui/button'
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Music, Image as ImageIcon, Search } from "lucide-react"
const AddAlbum = () => {
  const [musicFile, setMusicFile] = useState(null)
  const [coverPhoto, setCoverPhoto] = useState(null)
  
    const handleCoverPhotoChange = (event) => {
    const file = event.target.files[0]
    if (file && file.type.startsWith('image/')) {
      setCoverPhoto(file)
    } else {
      alert('Please select a valid image file')
    }
  }
   const handleMusicFileChange = (event) => {
    const file = event.target.files[0]
    if (file && file.type.startsWith('audio/')) {
      setMusicFile(file)
    } else {
      alert('Please select a valid audio file')
    }
  }

  return (
    
      <div>
                   <Card className="bg-black/100 text-white border-gray-800 border">
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
      
    </div>
  )
}

export default AddAlbum