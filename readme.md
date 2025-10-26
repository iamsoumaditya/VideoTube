# 🎬 VideoTube

A video sharing platform inspired by YouTube, built with Node.js, Express, and MongoDB. VideoTube allows users to upload, view, and manage videos, create playlists, and interact with content in a dynamic environment.

---

## 🚀 Features

- **User Authentication**: Secure login and registration with JWT-based sessions.
- **Video Management**: Upload, view, and delete videos.
- **Playlist System**: Create, update, and manage playlists.
- **Video Comments**: Users can comment on videos.
- **Like System**: Rate videos with likes and dislikes.
- **Search Functionality**: Search for videos by title, description.
- **Subscription Functionality**: User can subscribe any channel.
- **Dashboard Functionality**: Get all video of a channel and channel stats.
- **Tweet System**: User can create, update,delete tweets.

---

## 🛠 Technologies Used

- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose
- **Authentication**: JWT (JSON Web Tokens)
- **File Storage**: Multer for handling video uploads
- **Environment Management**: dotenv
- **Development Tools**: Nodemon,prettier

---

## 📁 Project Structure

VideoTube/  
│  
├── public/  
│ └──temp/ # Temporary media files  
├── src/  
│ │  
│ ├── controllers/ # Route controllers  
│ │ ├── comment.controller.js  
│ │ ├── dashboard.controller.js  
│ │ ├── healthcheck.controller.js  
│ │ ├── like.controller.js  
│ │ ├── playlist.controller.js  
│ │ ├── subscription.controller.js  
│ │ ├── tweet.controller.js  
│ │ ├── user.controller.js  
│ │ └── video.controller.js  
│ │  
│ ├── db/ # Database connection  
│ │ └── index.js  
│ │  
│ ├── models/ # Mongoose models  
│ │ ├── like.models.js  
│ │ ├── like.models.js  
│ │ ├── like.models.js  
│ │ ├── comment.models.js  
│ │ ├── like.models.js  
│ │ ├── playlist.models.js  
│ │ ├── subscription.models.js  
│ │ ├── tweet.models.js  
│ │ ├── user.models.js  
│ │ └── video.model.js  
│ │  
│ ├── routes/ # API routes  
│ │ ├── comment.routes.js  
│ │ ├── dashboard.routes.js  
│ │ ├── healthcheck.routes.js  
│ │ ├── like.routes.js  
│ │ ├── playlist.routes.js  
│ │ ├── subscription.routes.js  
│ │ ├── tweet.routes.js  
│ │ ├── user.routes.js  
│ │ └── video.routes.js  
│ │  
│ ├── middleware/ # Custom middleware  
│ │ ├── auth.middleware.js  
│ │ ├── multer.middleware.js  
│ │ └── validators.middleware.js  
│ │  
│ ├── utils/ # Utility functions  
│ │ ├── ApiError.js  
│ │ ├── ApiResponse.js  
│ │ ├── asyncHandler.js  
│ │ └── cloudinary.js  
│ │  
│ ├── validators/ #Validations  
│ │ └── user.validators.js  
│ │  
│ ├── app.js # Router, middlewares setup  
│ ├── constant.js  
│ └── index.js # Entry point  
│  
├── .env  
├── .env.sample # Sample environment variables  
├── .gitignore  
├── package-lock.json    
├── package.json    
├── readme.md  
└── VideoTube.postman_collection.json    

---

## ⚙️ Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/iamsoumaditya/VideoTube.git
   cd VideoTube
2. Install Dependencies

    npm install

3. Set up environment  
    copy all enviroment variables from .env.sample and add your own credentials

4. Run Command
   
   npm run dev  #development  
   npm run start  #production

---


## 🚀 Usage

- Visit `http://localhost:{PORT}` to access the backend API.
- Use a tool like **Postman** to test endpoints.
- You can create users, upload videos, and manage playlists & etc.

---

## API Documentation 

 - Refer to the postman collection documentation

---

## 👨‍💻 Contributing

Contributions are always welcome!

1. Fork the repository.
2. Create your feature branch
    ```bash
        git checkout -b feature/new-feature
3. git commit -m "Added new feature"

---

## 👨‍💻 Author

Soumaditya Roy  
GitHub: [@iamsoumaditya](https://github.com/iamsoumaditya)


