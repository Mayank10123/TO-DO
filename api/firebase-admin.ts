import admin from 'firebase-admin';

// Check for required environment variables
const projectId = process.env.FIREBASE_PROJECT_ID;
const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n');
const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;

console.log('\n=== 🔥 Firebase Admin Initialization ===');
console.log('Environment Variables:');
console.log('✓ Project ID:', projectId ? '✅ Set' : '❌ Missing');
console.log('✓ Client Email:', clientEmail ? '✅ Set' : '❌ Missing');
console.log('✓ Private Key:', privateKey ? `✅ Set (${privateKey.length} chars)` : '❌ Missing');

if (privateKey) {
  console.log('  Key format check:');
  console.log('  - Starts with "-----BEGIN":', privateKey.includes('-----BEGIN') ? '✅' : '❌');
  console.log('  - Contains newlines:', privateKey.includes('\\n') ? '✅' : '❌');
}

// Initialize Firebase Admin SDK
const serviceAccount = {
  projectId,
  privateKey,
  clientEmail,
};

try {
  if (!admin.apps.length) {
    console.log('\n📊 Initializing new Firebase Admin app...');
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount as any),
      projectId,
    });
    console.log('✅ Firebase Admin initialized successfully!\n');
  } else {
    console.log('✅ Firebase Admin already initialized\n');
  }
} catch (error: any) {
  console.error('❌ Firebase Admin initialization error:', error.message);
  console.error('Error details:', error);
  console.error('Service Account Check:');
  console.error('  - projectId:', projectId ? 'set' : 'missing');
  console.error('  - clientEmail:', clientEmail ? 'set' : 'missing');
  console.error('  - privateKey:', privateKey ? 'set' : 'missing');
}

export const db = admin.firestore();
export const authInstance = admin.auth();

// Export function for compatibility
export const initializeAuth = () => {
  try {
    return {
      auth: admin.auth(),
      db: admin.firestore(),
    };
  } catch (error: any) {
    console.error('❌ Error getting Firebase instances:', error.message);
    throw error;
  }
};

export default admin;
