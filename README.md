# Foreign Admits API

A backend service for a Foreign Admits financial services platform where students can apply for loans at multiple universities and choose multiple banks for each university.

## Base URL

```
https://foreign-admits-api.onrender.com/
```

## Tech Stack

- **Language:** TypeScript (Node.js)
- **Framework:** Express.js
- **Database:** MongoDB (Atlas)
- **ODM:** Mongoose

## Features

1. Students can select multiple universities.
2. For each selected university, students can choose multiple banks.
3. RESTful API design for easy integration.

## Project Structure

```
foreign-admits-api/
├── src/
│   ├── controllers/       # Contains route handler logic
│   ├── models/            # Mongoose schemas
│   ├── routes/            # API route definitions
│   ├── utils/             # Utility functions
│   └── index.ts           # Entry point of the application
├── dist/                  # Compiled JavaScript files
├── .env                   # Environment variables
├── nodemon.json           # Nodemon configuration
├── tsconfig.json          # TypeScript configuration
├── package.json           # Project dependencies and scripts
```

## Setup and Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Chavan-Ajay/foreign-admits-api.git
   cd foreign-admits-api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables in a `.env` file:
   ```env
   PORT=5000
   MONGO_URI=<your-mongodb-connection-string>
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Build the project:
   ```bash
   npm run build
   ```

6. Start the production server:
   ```bash
   npm start
   ```

## API Endpoints

### **Universities**

#### 1. Get All Universities
**Endpoint:**
```
GET /api/universities
```

**Response:**
```json
[
  {
    "_id": "<university_id>",
    "name": "Harvard University"
  }
]
```

#### 2. Add a New University
**Endpoint:**
```
POST /api/universities
```

**Request Body:**
```json
{
  "name": "New University"
}
```

**Response:**
```json
{
  "_id": "<university_id>",
  "name": "New University"
}
```

### **Banks**

#### 1. Get All Banks
**Endpoint:**
```
GET /api/banks
```

**Response:**
```json
[
  {
    "_id": "<bank_id>",
    "name": "State Bank of India"
  }
]
```

#### 2. Add a New Bank
**Endpoint:**
```
POST /api/banks
```

**Request Body:**
```json
{
  "name": "New Bank"
}
```

**Response:**
```json
{
  "_id": "<bank_id>",
  "name": "New Bank"
}
```

### **Student Selection**

#### 1. Add a University and Banks for a Student
**Endpoint:**
```
POST /api/students/:studentId/selections
```

**Request Body:**
```json
{
  "universityId": "<university_id>",
  "bankIds": ["<bank_id1>", "<bank_id2>"]
}
```

**Response:**
```json
{
  "_id": "<selection_id>",
  "studentId": "<student_id>",
  "universityId": "<university_id>",
  "bankIds": ["<bank_id1>", "<bank_id2>"]
}
```

#### 2. Get All Selections for a Student
**Endpoint:**
```
GET /api/students/:studentId/selections
```

**Response:**
```json
[
  {
    "_id": "<selection_id>",
    "university": {
      "_id": "<university_id>",
      "name": "Harvard University"
    },
    "banks": [
      {
        "_id": "<bank_id1>",
        "name": "State Bank of India"
      },
      {
        "_id": "<bank_id2>",
        "name": "ICICI Bank"
      }
    ]
  }
]
```

## Testing Steps (Using Postman)

1. **Setup Environment:**
   - Create a new Postman environment.
   - Add the following variables:
     - `base_url`: `https://foreign-admits-api.onrender.com`

2. **Test Endpoints:**
   - **Get All Universities:**
     - Method: `GET`
     - URL: `{{base_url}}/api/universities`
   - **Add a New University:**
     - Method: `POST`
     - URL: `{{base_url}}/api/universities`
     - Body (JSON): `{ "name": "Test University" }`
   - **Get All Banks:**
     - Method: `GET`
     - URL: `{{base_url}}/api/banks`
   - **Add a New Bank:**
     - Method: `POST`
     - URL: `{{base_url}}/api/banks`
     - Body (JSON): `{ "name": "Test Bank" }`
   - **Add a University and Banks for a Student:**
     - Method: `POST`
     - URL: `{{base_url}}/api/students/:studentId/selections`
     - Body (JSON): `{ "universityId": "<university_id>", "bankIds": ["<bank_id1>", "<bank_id2>"] }`
   - **Get All Selections for a Student:**
     - Method: `GET`
     - URL: `{{base_url}}/api/students/:studentId/selections`


