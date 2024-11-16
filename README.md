# 🎵 Muzi

A web application designed for music enthusiasts to explore, listen, and manage their favorite tracks, albums, and playlists, inspired by Spotify's functionality.

---

## 🌟 Features

- **User Authentication**: Sign up, log in, and manage your profile securely.
- **Browse and Discover**: Search for songs, artists, and albums with an intuitive interface.
- **Playlists Management**: Create, update, and share your personalized playlists.
- **Real-Time Music Streaming**: Enjoy high-quality audio streaming with a responsive music player.
- **Responsive Design**: Optimized for seamless use across desktop, tablet, and mobile devices.

---

## 🛠️ Tech Stack

- **Frontend**:
  - React.js, 
  - Tailwind CSS  for styling.

- **Backend**:
  - Node.js with Express.js for server-side logic.
  - RESTful API for data communication.

- **Database**:
  - MongoDB  for user data, playlists, and music metadata.

- **Cloud and Storage**:
  - Cloudinary

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB or access to a database server

## 🖼️ Screenshots
![Image Alt Text](./Admin_panel)
![Home_page](./Homepage_image)

## 📚 API Endpoints

| HTTP Method | Endpoint                       | Description                          | Authentication Required |
|-------------|--------------------------------|--------------------------------------|-------------------------|
| `POST`      | `/api/register`                | Register a new user                  | ❌                      |
| `POST`      | `/api/login`                   | Authenticate a user                  | ❌                      |
| `GET`       | `/api/List`                   | Retrieve list of all songs           | ❌                      |
| `GET`       | `/api/songs/:id`               | Retrieve details of a specific song  | ❌                      |
| `GET`       | `/api/playlist`                | Retrieve all playlists for a user    | ✅                      |
| `POST`      | `/api/playlist`                | Create a new playlist                | ✅                      |
| `PUT`       | `/api/playlist/:id`            | Update an existing playlist          | ✅                      |
| `DELETE`    | `/api/playlist/:id`            | Delete a playlist                    | ✅                      |
| `POST`      | `/api/playlist/:id/songs`      | Add a song to a playlist             | ✅                      |
| `DELETE`    | `/api/playlist/:id/songs/:songId` | Remove a song from a playlist       | ✅                      |

## 📞 Contact

For any inquiries, feedback, or suggestions, feel free to reach out:  

- **Live Project**: [https://muzi1.netlify.app/](https://muzi1.netlify.app/)  
- **Email**: [gladwinsanthosh6@gmail.com](mailto:gladwinsanthosh6@gmail.com)  
- **LinkedIn**: [Gladwin](https://www.linkedin.com/in/gladwin7/)


