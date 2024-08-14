# 🧘 Mindful Flow

**Mindful Flow** is your ultimate companion for a peaceful and focused mind. Whether you're looking to practice meditation, engage with daily affirmations, or simply carve out some time for mindfulness, this app is designed to guide you on your journey to inner peace.

## 🌟 Features

- **Meditation Sessions**: Explore a variety of guided meditation sessions tailored to different needs and time frames.
- **Daily Affirmations**: Boost your positivity and self-esteem with daily affirmations categorized by themes like positivity, success, and reducing anxiety.
- **Customizable Duration**: Adjust the duration of your meditation sessions according to your schedule and preferences.
- **Beautiful Imagery**: Immerse yourself in serene landscapes that accompany each meditation session.

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or later)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [Git](https://git-scm.com/)

### Installation

1. **Clone the repository**:

   ```bash
   git clone git@github.com:Ousman37/mindful-flow.git
   cd mindful-flow

2. Install dependencies:

  ```bash
  npm install

3. Start the development server:

 npx start expo -c

 This will start the Expo development server, and you can run the app on your Android/iOS emulator or directly on your device via the Expo Go app.

### Running on iOS
To run the app on iOS, ensure you have Xcode installed on your Mac. Then, run:

npm run ios

### Development 🛠️ 

## Project Structure

- **app/: Contains the main application code, organized into screens**:
- **(modal)/: Contains modal screens like adjust-meditation-duration.tsx.**
- **(tabs)/: Houses the tab-based navigation screens such as affirmations and meditate.**
- **index.tsx: The main entry screen of the app.**
- **assets/: Includes all images, fonts, and other static resources:**
- **affirmation-images/: Images used in affirmation screens.**
- **meditation-images/: Images used in meditation screens.**
- **fonts/: Custom fonts used throughout the app.**
- **audio/: Audio files for guided meditation.**
- **components/: Reusable components used throughout the app:**
- **AppGradient.tsx: Component for gradient backgrounds.**
- **CustomButton.tsx: Reusable button component.**
- **GuidedAffirmationsGallery.tsx: Component for displaying affirmation galleries.**
- **constants/: Stores configuration files, color schemes, and other constants.**
- **context/: Contains context providers for state management across the app:**
- **context/: Contains context providers for state management across the app:**
- **TimerContext.tsx: Context for managing meditation timer duration.**
- **hooks/: Custom hooks to enhance functionality.**
- **models/: Data models used in the app.**
- **scripts/: Utility scripts for project maintenance.**

### Key Technologies
- React Native: Core framework for building mobile apps.
- Expo: Framework and platform for universal React applications.
- Tailwind CSS with NativeWind: Utility-first CSS framework for styling.

### Contributing
We welcome contributions from the community! If you'd like to contribute:

1. Fork the repository.
2. Create a new branch (git checkout -b feature/my-feature).
3. Make your changes and commit them (git commit -m 'Add my feature').
4. Push to the branch (git push origin feature/my-feature).
5. Open a Pull Request.

### 📜 License
This project is licensed under the MIT License. See the LICENSE file for details

### 💬 Get in Touch
Feel free to reach out if you have any questions or suggestions! Connect with us on GitHub.

---
Enjoy your journey to mindfulness with **Mindful Flow**! 🌿
