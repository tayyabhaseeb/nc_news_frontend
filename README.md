
### **NC-News Frontend**  

## **Project Overview**  
NC-News is a **full-stack news platform** where users can browse, read, and interact with news articles. This repository contains the **frontend**, built with **React.js**, while the backend is powered by **Node.js, Express, and PostgreSQL**.  

🔗 **Live Demo:** [NC-News Live](https://nc-news-19.netlify.app/) *(Optional: Add deployment link)*  
🔗 **Backend Repository:** [NC-News Backend](https://github.com/tayyabhaseeb/nc_news)  



## **Features**  
✅ View a list of news articles, sorted by date, votes, or comments  
✅ Filter articles by topic  
✅ Read individual articles with full content  
✅ View and post comments on articles  
✅ Upvote and downvote articles  
✅ Mobile-responsive UI with Tailwind CSS  



## **Tech Stack**  
- **Frontend:** React.js, React Router, Axios, Tailwind CSS  
- **State Management:** React Hooks (useState, useEffect)  
- **API Requests:** Axios for fetching data  
- **Styling:** Tailwind CSS for modern UI  
- **Testing:** Jest & React Testing Library  



## **Getting Started**  

### **1. Clone the Repository**  
```sh
git clone https://github.com/tayyabhaseeb/nc_news_frontend.git
cd nc_news_frontend
```

### **2. Install Dependencies**  
```sh
npm install
```


### **3. Run the Development Server**  
```sh
npm run dev
```
The app will be available at **http://localhost:5173**  



## **Test Credentials (For Demo Purposes Only)**  
For testing, you can log in using the following credentials:  

- **Email:** `grumpy19@gmail.com`  
- **Password:** `password123`
- 

## **API Endpoints Used (From Backend)**  
The frontend interacts with the following API endpoints:  

| Method | Endpoint | Description |
|--------|---------|-------------|
| GET | `/api/articles` | Fetch all articles |
| GET | `/api/articles/:article_id` | Fetch a single article |
| GET | `/api/articles/:article_id/comments` | Fetch comments for an article |
| POST | `/api/articles/:article_id/comments` | Add a new comment |
| PATCH | `/api/articles/:article_id` | Upvote/downvote an article |
| DELETE | `/api/comments/:comment_id` | Delete a comment |





## **Future Improvements**  
🚀 Implement user authentication with firebase(signup/login)  



## **Contributing**  
Want to contribute? Feel free to fork this repo and open a pull request!  

