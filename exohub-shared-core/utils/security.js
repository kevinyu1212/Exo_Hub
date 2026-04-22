import CryptoJS from 'crypto-js';

// 데이터 암호화 (로컬 스토리지 저장 시 사용)
const SECRET_KEY = process.env.NEXT_PUBLIC_CRYPTO_KEY || 'exohub-secret-default';

export const security = {
  encrypt: (data) => {
    return CryptoJS.AES.encrypt(JSON.stringify(data), SECRET_KEY).toString();
  },
  decrypt: (cipherText) => {
    const bytes = CryptoJS.AES.decrypt(cipherText, SECRET_KEY);
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  },
  // XSS 방지를 위한 HTML 이스케이프
  sanitize: (str) => {
    return str.replace(/[&<>"']/g, (m) => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[m]));
  }
};
