// liff.ts
import liff from '@line/liff';

export const initLiff = async () => {
  await liff.init({ liffId: 'YOUR_LIFF_ID' });
  if (!liff.isLoggedIn()) {
    liff.login();
  }
  return liff.getProfile(); // LINEユーザー情報を取得
};
