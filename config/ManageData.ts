export const manageUserExpiration = () => {
  if (typeof window === "undefined") return;

  const userData = localStorage.getItem("strimzUser");

  if (userData) {
    try {
      const parsedData = JSON.parse(userData);
      const currentTime = new Date().getTime();

      // Check if the user data has an expiration timestamp
      if (parsedData.expiration && currentTime > parsedData.expiration) {
        localStorage.removeItem("strimzUser");
      }
    } catch (error) {
      console.error("Failed to parse user data:", error);
      localStorage.removeItem("strimzUser");
    }
  }
};

//setting user with expiration
export const setUserWithExpiration = (
  user: object,
  expirationHours: number
) => {
  const expirationTime =
    new Date().getTime() + expirationHours * 60 * 60 * 1000;

  const userDataWithExpiration = {
    ...user,
    expiration: expirationTime,
  };

  localStorage.setItem("strimzUser", JSON.stringify(userDataWithExpiration));
};
