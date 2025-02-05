# 🍽️ MERN_FOOD_RECIPE FOODIFY

![GitHub top language](https://img.shields.io/github/languages/top/manishms-com/MERN_FOOD_RECIPE)
![GitHub last commit](https://img.shields.io/github/last-commit/manishms-com/MERN_FOOD_RECIPE)
![GitHub issues](https://img.shields.io/github/issues/manishms-com/MERN_FOOD_RECIPE)
![GitHub pull requests](https://img.shields.io/github/issues-pr/manishms-com/MERN_FOOD_RECIPE)
![GitHub license](https://img.shields.io/github/license/manishms-com/MERN_FOOD_RECIPE)

FOOIDFY is a modern web application for discovering, sharing, and managing your favorite food recipes. Built with the MERN stack (MongoDB, Express, React, Node.js), it offers a seamless and interactive user experience.

## 🌟 Features

- **User Authentication**: Secure login and registration using JWT.
- **Recipe Management**: Add, edit, delete, and view recipes.
- **Search and Filter**: Advanced search and filter options for recipes.
- **Responsive Design**: Fully responsive and mobile-friendly design.
- **Comments and Like**: Engage with the community by leaving Comments and Like on recipes.

## 🛠️ Technologies Used

- **Frontend**: React, Redux, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose
- **Authentication**: JWT (JSON Web Tokens)
- **Hosting**: Vercel (Frontend), Heroku (Backend)

## 📸 Screenshots

[Home Page]![Screenshot 2024-06-20 121400](https://github.com/manishms-com/MERN_Food_Recipe/assets/141921608/44ed7fec-a4ea-4134-8961-f3c120fcee1e)

[All Recipe Page]![Screenshot 2024-06-20 121829](https://github.com/manishms-com/MERN_Food_Recipe/assets/141921608/60497ff5-471b-483d-8f04-6890f984c665)
[Single Recipe Page]![Screenshot 2024-06-20 121900](https://github.com/manishms-com/MERN_Food_Recipe/assets/141921608/a31a5e19-e87b-4e82-a760-1d418f9ed37d)

## 🚀 Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/manishms-com/MERN_Food_Recipe.git
   cd MERN_Food_Recipe
   ```

2. Install dependencies for both frontend and backend:

   ```bash
   cd frontend
   npm install
   cd ../backend
   npm install
   ```

3. Change the index.js and file in the `backend` directory and add the following environment variables:

   ```env
   mongodb://your database url/food  index.js line 13
   JWT_SECRET=your_jwt_secret          routes/authRoutes line 42,65
   ```

4. Start the development server:

   ```bash
   cd backend
   npm start
   cd ../frontend
   npm run dev
   ```

5. Open your browser and visit `http://localhost:your port`.

## 📂 Project Structure

```
backend/
├── node_modules/
├── src/
│ ├── controllers/
│ ├── model/
│ ├── routes/
│ └── index.js
├── package-lock.json
├── package.json
└── .gitignore

frontend/
├── node_modules/
├── public/
├── src/
│ ├── assets/
│ ├── components/
│ ├── context/
│ ├── pages/
│ ├── App.css
│ ├── App.jsx
│ ├── index.css
│ └── main.jsx
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
└── vite.config.js
```

## 🤝 Contributing

Contributions are welcome! Please fork the repository and create a pull request.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 💬 Contact

Your Name - [ms09735277@gmail.com.com](mailto:ms09735277@gmail.com.com)

Project Link: [https://github.com/manishms-com/MERN_Food_Recipe](https://github.com/manishms-com/MERN_Food_Recipe)

---

⭐️ Don't forget to star the repo if you find it useful!
