// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBZaQN5w1q6T-dQOpD5etdTMBazQBbRsII",
    authDomain: "aymenmyloginapp.firebaseapp.com",
    projectId: "aymenmyloginapp",
    storageBucket: "aymenmyloginapp.appspot.com",
    messagingSenderId: "501173291476",
    appId: "1:501173291476:web:365b779a729e3e41a62e41",
    measurementId: "G-BPM4B8V43D"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// Helper function to get authentication error messages
function getAuthErrorMessage(errorCode) {
    const messages = {
        'auth/invalid-email': 'بريد إلكتروني غير صحيح',
        'auth/user-disabled': 'هذا الحساب معطل',
        'auth/user-not-found': 'لا يوجد حساب بهذا البريد',
        'auth/wrong-password': 'كلمة المرور غير صحيحة',
        'auth/email-already-in-use': 'البريد الإلكتروني مستخدم بالفعل',
        'auth/weak-password': 'كلمة المرور ضعيفة (يجب 6 أحرف على الأقل)',
        'auth/operation-not-allowed': 'عملية غير مسموح بها',
        'auth/too-many-requests': 'محاولات كثيرة جداً، يرجى المحاولة لاحقاً'
    };
    
    return messages[errorCode] || 'حدث خطأ غير متوقع، يرجى المحاولة لاحقاً';
}

// Helper function to show alerts
function showAlert(message, type, parentElement) {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type}`;
    alertDiv.textContent = message;
    
    parentElement.prepend(alertDiv);
    
    setTimeout(() => {
        alertDiv.remove();
    }, 5000);
}