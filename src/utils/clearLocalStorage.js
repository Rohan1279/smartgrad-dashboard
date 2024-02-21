export const clearLocalStorage = () => {
  const keys = ["user", "token", "show_daily_reward"];
  keys.forEach((key) => {
    localStorage.removeItem(key);
  });
  return;
};
