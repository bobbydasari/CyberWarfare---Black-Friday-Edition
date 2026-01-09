# CyberWarfare --- Black Friday Edition

A premium mini-course subscription application built for the CyberWarfare Black Friday sale. This application allows users to browse courses, apply exclusive promo codes, and subscribe to courses using Razorpay integration.

## 🚀 Live Demo

[View Live Application](https://cyberwarfare-mini-course.vercel.app/)

# Mini Course Subscription Application (Black Friday Edition)

A full-stack web application that allows users to sign in, browse courses, and subscribe to free or paid courses using a mock Black Friday promo code. The application demonstrates authentication, subscription logic, and end-to-end deployment without real payment integration.

---

## 🚀 Features

- User authentication using JWT (mock users)
- Browse available courses (free & paid)
- Course detail page with subscription logic
- Black Friday promo code support for paid courses
- View subscribed courses in “My Courses”
- Protected routes using authentication middleware
- Clean and responsive UI

---

## 🔐 Dummy Login Credentials

Use any of the following test users to log in:

- Email: `testuser1@gmail.com`
- Password: `password`

- Email: `testuser2@gmail.com`
- Password: `password`

- Email: `testuser3@gmail.com`
- Password: `password`

## 🛠 Tech Stack

- **Frontend:** React with [Next.js](https://nextjs.org/) (App Router)
- **Styling:** Vanilla CSS & React Bootstrap
- **Backend:** Node.js (Next.js API Routes)
- **Database:** MongoDB (via Mongoose)
- **Authentication:** JWT (JSON Web Tokens)
- **Payments:** Razorpay Gateway Integration with testkey
- **Hosting:** Vercel

---

## 🎓 Course Subscription Logic

### Free Courses

- Can be subscribed instantly
- No promo code required

### Paid Courses

- Promo code input required
- Valid Black Friday promo code:

BFSALE25 - 50% Discount

- Applies **50% discount** on the course price
- Payment is fully mock-based (no real payment gateway)

---

## 📄 Pages Implemented

- Signup / Login
- Home (Courses List)
- Course Details
- My Courses

---

## 🗂️ Database Schema (Overview)

### Users

- id
- name
- email
- password (hashed)

### Courses

- id
- title
- description
- price (0 = free)
- image (optional)

### Subscriptions

- id
- userId
- courseId
- pricePaid
- subscribedAt

---

## 🛠️ Local Setup Instructions

### 1️⃣ Clone the Repository

````bash
git clone <your-repo-url>
cd mini-course-subscription


## ⚙️ Local Development Setup

Follow these steps to get the project running locally:

### 1. Clone the repository

```bash
git clone https://github.com/bobbydasari/CyberWarfare---Black-Friday-Edition.git
cd CyberWarfare---Black-Friday-Edition
````

### 2. Install dependencies

```bash
npm install
```

### 3. Environment Variables

Create a `.env.local` file in the root directory and add the following:

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
NEXT_PUBLIC_RAZORPAY_KEY_ID=your_razorpay_key_id
```

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📦 Deployment

The application is optimized for deployment on **Vercel**.

1. Push your code to GitHub.
2. Connect your repository to Vercel.
3. Add the environment variables in the Vercel dashboard.
4. Deploy!

## 📸 Screenshots

|                Signup Page                |               Courses List               |
| :---------------------------------------: | :--------------------------------------: |
| ![Signup](/public/screenshots/signup.png) | ![Courses](/public/screenshots/web9.png) |

|              Course Detail              |                 My Courses                  |
| :-------------------------------------: | :-----------------------------------------: |
| ![Detail](/public/screenshots/web8.png) | ![My Courses](/public/screenshots/web3.png) |

_(Note: Please ensure the `public/screenshots` directory exists and contains the relevant images.)_

## 📝 Submission Details

- **Task:** mini course subscription app
- **Theme:** Black-Friday Edition
- **Repo:** [GitHub Repository](https://github.com/bobbydasari/CyberWarfare---Black-Friday-Edition)
