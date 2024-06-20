# 🍽️ MERN_FOOD_RECIPE FOODIFY

![GitHub top language](https://img.shields.io/github/languages/top/manishms-com/foodrecipe-hub)
![GitHub last commit](https://img.shields.io/github/last-commit/manishms-com/foodrecipe-hub)
![GitHub issues](https://img.shields.io/github/issues/manishms-com/foodrecipe-hub)
![GitHub pull requests](https://img.shields.io/github/issues-pr/manishms-com/foodrecipe-hub)
![GitHub license](https://img.shields.io/github/license/manishms-com/foodrecipe-hub)

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

![Home Page](https://drive.google.com/file/d/1-KXpJ7NEj3BK69eFyHqa554GyUTVbpoQ/view?usp=drive_link)
![All Recipe Page](https://drive.google.com/file/d/1ep9Lz51u4maN1GUedNzxrIeFLFeo97Zj/view?usp=drive_link)
![Single Recipe Page](https://drive.google.com/file/d/12tPLOUpncr_caU5r-Ck5YHQH5xjxPseM/view?usp=drive_link)

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

3. Change the index.js and  file in the `backend` directory and add the following environment variables:

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

backend/
├── node_modules/
├── src/
│ ├── controllers/
│ ├── model/
│ ├── routes/
│ ├── index.js
│ ├── package-lock.json
│ ├── package.json
├── .gitignore

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
│ ├── main.jsx
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
├── vite.config.js
├── README.md

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
