/**
 * Exo-Notice: 특정 기간 동안 팝업 다시 보지 않기 등 제어
 */
export const noticeManager = {
  shouldShow: (id) => {
    const expire = localStorage.getItem(\
otice_hide_\\);
    if (!expire) return true;
    return Date.now() > parseInt(expire);
  },
  hideForDay: (id, days = 1) => {
    const expireTime = Date.now() + (days * 24 * 60 * 60 * 1000);
    localStorage.setItem(\
otice_hide_\\, expireTime.toString());
  }
};
