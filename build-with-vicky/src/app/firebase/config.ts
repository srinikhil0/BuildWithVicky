// Import the functions you need from the SDKs you need
import { initializeApp, getApps, FirebaseApp } from "firebase/app";
import { getAnalytics, isSupported, Analytics } from "firebase/analytics";

// Check if environment variables are loaded properly
const checkEnvVariables = () => {
  const requiredVars = [
    'NEXT_PUBLIC_FIREBASE_API_KEY',
    'NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN',
    'NEXT_PUBLIC_FIREBASE_PROJECT_ID',
    'NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET',
    'NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID',
    'NEXT_PUBLIC_FIREBASE_APP_ID',
    'NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID'
  ];
  
  const missingVars = requiredVars.filter(varName => !process.env[varName]);
  
  if (missingVars.length > 0) {
    console.warn('Missing environment variables:', missingVars);
    return false;
  }
  
  return true;
};

// Check environment variables and log the result
const envVarsLoaded = checkEnvVariables();
console.log('Environment variables loaded successfully:', envVarsLoaded);

// Your web app's Firebase configuration
// All values are loaded from environment variables for security
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || '',
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || '',
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || '',
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || '',
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || '',
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || '',
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || ''
};

// Log config for debugging (without sensitive values)
console.log('Firebase config loaded with projectId:', firebaseConfig.projectId);

// Initialize Firebase only if we have the required configuration
let app: FirebaseApp | null = null;
let analytics: Analytics | null = null;

// Only initialize if we have the minimum required configuration
if (firebaseConfig.projectId) {
  try {
    app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
    
    // Only initialize analytics on the client side and if it's supported
    const initializeAnalytics = async () => {
      if (typeof window !== 'undefined' && app) {
        try {
          const isAnalyticsSupported = await isSupported();
          if (isAnalyticsSupported) {
            analytics = getAnalytics(app);
            console.log('Firebase Analytics initialized successfully');
          } else {
            console.log('Firebase Analytics is not supported in this environment');
          }
        } catch (error) {
          console.error("Analytics initialization failed:", error);
        }
      }
    };

    // Call the async function
    initializeAnalytics();
  } catch (error) {
    console.error("Firebase initialization error:", error);
  }
} else {
  console.error("Firebase initialization skipped: Missing required configuration");
}

export { app, analytics }; 