import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Firebaseの初期化
// !getApps().lengthで既存のFirebaseアプリが初期化されているかどうかを確認します。
// 既存のFirebaseアプリがない場合は指定された設定で新しいFirebaseアプリを初期化します。
// 既存のFirebaseアプリがある場合はそのアプリを取得します。
export const firebaseApp = !getApps().length ? initializeApp(firebaseConfig) : getApp()

export const auth = getAuth();
