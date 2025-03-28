# Job Management Microservice

This microservice handles job listings and application counts. It provides endpoints for retrieving all jobs, adding a new job, and applying to a job.

## Endpoints

### 1. Get All Jobs

**Endpoint:** `GET /jobs`

**Description:** Retrieves a list of all jobs in the database.

**Response:**
```json
[
    {
        "id": 1,
        "name": "Software Engineer",
        "role": "Frontend Developer",
        "company": "Tech Co",
        "application_count": 5
    },
    {
        "id": 2,
        "name": "Data Scientist",
        "role": "Data Analyst",
        "company": "Data Inc",
        "application_count": 2
    }
]
```

### 2. Add a New Job

**Endpoint:** `POST /jobs`

**Description:** Adds a new job listing to the database.

**Request Body:**
```json
{
    "name": "Product Manager",
    "role": "Manager",
    "company": "Business Corp"
}
```

**Response:**
```json
{
    "message": "Job added successfully!"
}
```

### 3. Apply to a Job

**Endpoint:** `POST /jobs/apply`

**Description:** Increments the application count for a specific job.

**Request Body:**
```json
{
    "jobId": 1
}
```

**Response:**
```json
{
    "message": "Application count updated successfully"
}
```

### Error Responses

- **500 Internal Server Error:** Indicates an error occurred on the server.
- **404 Not Found:** Indicates that the specified job was not found.

## Setup Instructions

1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm start
   ```

Make sure to set up your database connection properly in your application before starting the server.

## Dummy Data

For testing purposes, you can use the following dummy data in your database:

**Jobs Table:**
| id | name                | role                | company        | application_count |
|----|---------------------|---------------------|----------------|--------------------|
| 1  | Software Engineer    | Frontend Developer   | Tech Co        | 5                  |
| 2  | Data Scientist       | Data Analyst         | Data Inc       | 2                  |
| 3  | Product Manager      | Manager              | Business Corp  | 0                  |

Feel free to modify this dummy data to suit your testing needs!

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.