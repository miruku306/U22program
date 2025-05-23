// characterAssets.ts
export const characterAssets = {
  yandere: {
    text: (task: string) => `ねぇ…なんで「${task}」まだやってないの…？私、寂しいよ？🥺`,
    imageUrl: "https://your-domain.com/images/yandere.jpg"
  },
  military: {
    text: (task: string) => `任務「${task}」、まだ終わってないぞ。気を抜くな。`,
    imageUrl: "https://your-domain.com/images/military.jpg"
  },
  gal: {
    text: (task: string) => `ウケる〜まだ「${task}」やってないの？💅 はよやりな〜！`,
    imageUrl: "https://your-domain.com/images/gal.jpg"
  },
};
