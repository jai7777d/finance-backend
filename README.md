# 💰 Finance Data Processing Backend

## 📌 Overview

This project is a backend system for a finance dashboard that allows users to manage financial records with role-based access control.

It supports authentication, CRUD operations on financial records, and dashboard analytics.

---

## 🚀 Tech Stack

* Node.js
* Express.js
* MongoDB (Mongoose)
* JWT Authentication
* bcrypt for password hashing

---

## 📁 Project Structure

```
finance-backend/
│── src/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   └── app.js
│
│── .env
│── package.json
│── README.md
```

---

## ⚙️ Setup Instructions

### 1. Clone Repository

```
git clone <your-repo-link>
cd finance-backend
```

### 2. Install Dependencies

```
npm install
```

### 3. Setup Environment Variables

Create `.env` file:

```
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/financeDB
JWT_SECRET=your_secret_key
```

### 4. Start Server

```
npm run dev
```

---

## 🔐 Authentication APIs

### Register

```
POST /auth/register
```

Body:

```
{
  "name": "Jai",
  "email": "jai@gmail.com",
  "password": "123456",
  "role": "ADMIN"
}
```

---

### Login

```
POST /auth/login
```

Response:

```
{
  "token": "jwt_token"
}
```

---

## 📊 Financial Records APIs

### Create Record (Admin only)

```
POST /records
```

### Get Records

```
GET /records
```

### Update Record

```
PUT /records/:id
```

### Delete Record

```
DELETE /records/:id
```

---

## 📈 Dashboard APIs

### Get Summary

```
GET /dashboard/summary
```

Returns:

* Total Income
* Total Expense
* Net Balance
* Category-wise totals

---

## 👥 Roles & Permissions

| Role    | Permissions     |
| ------- | --------------- |
| Viewer  | Read only       |
| Analyst | Read + Insights |
| Admin   | Full access     |

---

## 🔒 Access Control

* JWT-based authentication
* Middleware used for role validation
* Protected routes using token verification

---

## ✅ Features

* User Authentication
* Role-based Authorization
* Financial Records CRUD
* Dashboard Analytics
* Input Validation
* Error Handling

---

## ⚠️ Assumptions

* Email is unique for each user
* Roles are predefined
* MongoDB is running locally

---

## 🧪 Testing

Use Postman or Thunder Client to test APIs.

---

## 📌 Future Improvements

* Pagination
* Search & Filtering
* Swagger API Docs
* Deployment (AWS/Render)
* Unit Testing

---

## 👨‍💻 Author

Jai Dadhich

