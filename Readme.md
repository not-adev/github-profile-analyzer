# GitHub Profile Analyzer API

## Overview

GitHub Profile Analyzer API is a backend application built using **Node.js**, **Express.js**, **MySQL**, and **Sequelize ORM**. The application fetches public GitHub profile information using the GitHub REST API, analyzes the profile, calculates useful insights, stores the results in a MySQL database, and exposes APIs to retrieve analyzed profiles.

---

## Features

### Profile Analysis

* Fetch GitHub user information by username
* Retrieve public repositories
* Calculate total stars across all repositories
* Identify the most starred repository
* Calculate account age in days
* Generate a custom profile score

### Database Storage

* Store analyzed profiles in MySQL
* Prevent duplicate records using unique username constraint
* Automatically update existing profiles using Sequelize upsert()

### API Endpoints

* Analyze a GitHub profile
* Fetch all analyzed profiles
* Fetch a specific analyzed profile

---

## Tech Stack

### Backend

* Node.js
* Express.js

### Database

* MySQL
* Sequelize ORM

### Third Party API

* GitHub REST API

---

## Project Structure

```text
github-profile-analyzer/
│
├── src/
│   ├── configs/
│   │   └── db.js
│   │
│   ├── database/
│   │   └── GithubProfile.js
│   │
│   ├── controllers/
│   │   └── githubController.js
│   │
│   ├── services/
│   │   └── githubService.js
│   │
│   └── routes/
│       └── githubRoutes.js
│
├── .env
├── index.js
├── package.json
└── README.md
```

---

## Database Schema

### github_profiles

| Column            | Type     |
| ----------------- | -------- |
| id                | INT      |
| username          | VARCHAR  |
| name              | VARCHAR  |
| public_repos      | INT      |
| followers         | INT      |
| following         | INT      |
| account_age_days  | INT      |
| total_stars       | INT      |
| profile_score     | INT      |
| most_starred_repo | VARCHAR  |
| profile_url       | VARCHAR  |
| createdAt         | DATETIME |
| updatedAt         | DATETIME |

---

## Profile Score Calculation

The profile score is calculated using the following formula:

```text
Profile Score =
(Followers × 3)
+ (Public Repositories × 2)
+ (Total Stars × 5)
```

This score provides a simple indicator of GitHub profile activity and popularity.

---

## Application Flow

### Analyze Profile Flow

```text
Client Request
      │
      ▼
GET /api/analyze/:username
      │
      ▼
Controller
      │
      ▼
GitHub Service
      │
      ├── Fetch User Data
      │
      ├── Fetch Repositories
      │
      ├── Calculate Insights
      │
      └── Return Analysis
      │
      ▼
Database (MySQL)
      │
      └── Upsert Profile
      │
      ▼
JSON Response
```

---

## Database Flow

```text
Profile Exists?
      │
      ├── No
      │     ▼
      │  Insert Record
      │
      └── Yes
            ▼
       Update Existing Record
```

Using Sequelize's upsert() ensures that duplicate usernames are never stored.

---

## API Endpoints

### Analyze GitHub Profile

```http
GET /api/analyze/:username
```

Example:

```http
GET /api/analyze/octocat
```

Response:

```json
{
  "username": "octocat",
  "followers": 1000,
  "public_repos": 50,
  "total_stars": 250,
  "profile_score": 2350
}
```

---

### Get All Profiles

```http
GET /api/profiles
```

Returns all analyzed profiles stored in the database.

---

### Get Single Profile

```http
GET /api/profiles/:username
```

Example:

```http
GET /api/profiles/octocat
```

Returns a specific analyzed profile.

---

## Environment Variables

Create a .env file in the project root:

```env
PORT=3000

DB_HOST=your_host
DB_PORT=3306
DB_NAME=your_database_name
DB_USER=your_database_user
DB_PASSWORD=your_database_password
```

---

## Installation

### Clone Repository

```bash
git clone 
```

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a .env file and add database credentials.

### Start Development Server

```bash
npm run dev
```

### Start Production Server

```bash
npm start
```

---

## API Testing

The APIs can be tested using:

* Postman
* Thunder Client
* Hoppscotch
* Browser (for GET requests)

---

## Improvements Added

In addition to the assignment requirements, the following enhancements were implemented:

* Total stars calculation
* Most starred repository detection
* Account age calculation
* Profile score calculation
* Automatic profile updates using upsert()
* Sequelize ORM integration
* Layered architecture (Routes → Controllers → Services → Database)

---

## Future Enhancements

* Authentication and rate limiting
* GitHub contribution analysis
* Repository language statistics
* Top profiles leaderboard
* Caching using Redis
* API documentation using Swagger

---

## Author

Developed by Md Arif Ansari

Assignment Submission for Node.js Backend Developer Internship.
