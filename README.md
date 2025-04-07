
# CampusEats – Food Delivery App for Campus

CampusEats is a full-stack food delivery application designed specifically for university campuses. It allows students to order food from various on-campus vendors with ease, offering a seamless and efficient digital alternative to traditional ordering systems.

## Features

- *User Authentication*: Sign up and login functionality using localStorage for frontend session management.
- *Dynamic Menu*: Fully categorized food items with real-time pricing and quantity-based total calculation.
- *Cart System*: Add/remove items, view cart summary, and update quantities dynamically using JavaScript.
- *Vendor Integration*: Menu and order management for vendors like Snapeats, Quench, Southern Stories, and Hotspot.
- *Backend Functionality*: Node.js and MongoDB handle orders, user data, and communication between frontend and vendors.
- *Database Management*: Vendor menus and item prices are stored and managed using MySQL.

## Tech Stack

- *Frontend*: HTML, CSS, JavaScript
- *Backend*: Node.js, Express.js
- *Databases*: MongoDB (for orders & users), MySQL (for vendor menu data)
- *Others*: Python (for potential scripting/automation tasks)

## Project Structure

CampusEats/ │ ├── client/               # Frontend files (HTML, CSS, JS) │   ├── index.html │   ├── login.html │   ├── menu.html │   └── styles/ │ ├── server/               # Backend files (Node.js + Express) │   ├── app.js │   ├── routes/ │   ├── controllers/ │   └── models/ │ ├── db/                   # MySQL schemas, MongoDB configs │   ├── mysql/ │   └── mongo/ │ └── README.md             # Project documentation

## How to Run

1. *Clone the repository*  
   ```bash
   git clone https://github.com/your-username/CampusEats.git
   cd CampusEats

2. Install backend dependencies

cd server
npm install


3. Start backend server

node app.js


4. Open client/index.html in your browser to test the frontend.



> Ensure MongoDB and MySQL are installed and configured on your system.



Future Scope

Real-time order tracking for users and vendors

Admin panel for menu and restaurant management

Mobile app integration using React Native or Flutter

Payment gateway integration (Razorpay/UPI)


License

This project is open-source and available under the MIT License.


Contributors:

Pragya (Developer)
Samarth (Developer)
Daksh Jain (Developer)
Rishabh Jalori (Developer)

