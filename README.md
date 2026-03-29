# Playwright API Testing

This repository demonstrates **API testing using Playwright**, covering setup, sending requests, validating responses, performing assertions, and structuring tests for maintainability. Demo scenarios are included for practical learning.

---

## 📌 Topics Covered

- Introduction to API testing with Playwright  
- Setting up Playwright for API testing  
- Sending GET, POST, PUT, DELETE requests  
- Handling request headers, parameters, and payloads  
- Validating responses and performing assertions  
- Using environment variables for test configuration  
- Structuring tests for maintainability and scalability  
- Demo API testing scenarios

---

## 🛠 Technologies Used

- **Playwright**  
- **JavaScript / TypeScript**  
- **Node.js**  
- **REST APIs / JSON**

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/playwright-api-testing.git
cd playwright-api-testing
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Install Playwright browsers
```bash
npx playwright install
```

---

## ▶️ Running API Tests

Run all API tests:
```bash
npx playwright test
```

Run a specific test file:
```bash
npx playwright test tests/sampleApiTest.spec.js
```

---

## 📂 Project Structure

```
playwright-api-testing
│
├── tests
│   └── sampleApiTest.spec.js
│
├── helpers
│   └── apiClient.js
│
├── playwright.config.js
│
└── package.json
```

---

## 🤝 Contributions

Contributions, suggestions, and improvements are welcome. Feel free to fork the repository and submit a pull request.

---

## ⭐ Support

If this repository helps you, give it a ⭐ to support the project!
