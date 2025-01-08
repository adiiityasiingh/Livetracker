# Live Location Tracker

This repository contains a **Live Location Tracker** built with **Node.js** and **Socket.IO**. Multiple users can connect, share their live locations, and view each other's location details in real-time.

<img src= "https://i.ibb.co/fpHVhQG/Screenshot-2024-12-31-235017.png">

## Features
- Real-time location sharing between multiple users.
- Logs display user details: **User ID**, **Longitude**, **Latitude**.
- Location data is updated every **5 seconds**.

## Installation

Follow these steps to set up and run the project locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/adiiityasiingh/livetracker.git
   cd live-location-tracker
   ```

2. **Install dependencies:**
   ```bash
   npm install
   npm i socket.io
   ```

3. **Run the server:**
   ```bash
   node live.js
   ```

4. **Access the Application:**
   - Open your browser and navigate to `http://localhost:3003`

## Logs
Location details such as **User ID**, **Longitude**, and **Latitude** will be displayed in the server logs.

<img src = "https://i.ibb.co/FDThYmf/Screenshot-2024-12-31-234532.png" alt="Screenshot-2024-12-31-234532">

## Technology Stack
- **Node.js**
- **Socket.IO**

## How it Works
- Each connected user shares their location every **5 seconds**.
- Server logs display live updates for each user's location.
- All connected users can view each other's live locations in real-time.

## Contributing
Feel free to submit pull requests or report issues.

## License
This project is licensed under the **MIT License**.

---

Happy Tracking! 🚀🌍
