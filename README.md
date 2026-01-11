# FeedbackFortify-Empowering-Verified-User-Feedback

## Overview

The FeedbackFortify project is a web application designed to handle user inquiries securely by verifying their phone number through an OTP (One-Time Password) system. The application uses Firebase for backend services, including authentication and database storage. Users can submit their name, query, and phone number, after which they receive an OTP to verify their identity. Once verified, their inquiry is saved to the Firebase Realtime Database, and they are notified that they will be contacted within a specified time frame.

## Main Features

User Inquiry Submission: Users can submit their name, query, and phone number through a form.
OTP Verification: The application sends an OTP to the user's phone number to verify their identity.
Firebase Realtime Database: Verified inquiries are saved to the Firebase Realtime Database.
User Notification: Users are alerted to the status of their inquiry submission and OTP verification.

## EnApp.js

The EnApp.js file is the main component of the application. It includes form inputs for the user's name, query, and phone number. It also handles the OTP sending and verification process using Firebase Authentication. After successful verification, the user's inquiry is saved to the Firebase Realtime Database, and they are alerted that they will be contacted shortly.

## Setup and Installation

To clone the repository and install dependencies for this project, follow these steps:
Clone the repository:
git clone <https://github.com/YashGothi/FeedbackFortify-Empowering-Verified-User-Feedback.git>

Navigate to the project directory:
cd <enapp>

Install the required dependencies:
npm install

Start the development server:
npm start

Open the application in your web browser at http://localhost:3000.

## Firebase Configuration

The firebaseConfig object in the EnApp.js file contains the Firebase project configuration. This configuration must be set up with your Firebase project details for the application to connect to Firebase services.

## Dependencies

Firebase SDK: Used for authentication and database services.
React: A JavaScript library for building user interfaces.

## Usage

Upon loading the application, users are given a form to fill out their inquiry details. After submitting their phone number, they receive an OTP and must enter it to verify their identity. Once verified, their inquiry is saved, and they receive a notification.


Contact 
Your Name - yashgothi14@gmail.com

Project Link: https://github.com/YashGothi/FeedbackFortify-Empowering-Verified-User-Feedback
## Conclusion

The FeedbackFortify-Empowering-Verified-User-Feedback project showcases a practical implementation of user verification using OTPs and Firebase's robust backend services. It provides a secure and efficient way for users to submit inquiries and for administrators to collect and manage these submissions.
