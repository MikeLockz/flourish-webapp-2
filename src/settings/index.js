export default {
  apiUrl: "http://localhost:9000/"
};

const siteConfig = {
  siteName: "Flourish",
  siteIcon: "ion-flash",
  footerText: ""
};
const themeConfig = {
  topbar: "themedefault",
  sidebar: "themedefault",
  layout: "themedefault",
  theme: "themedefault"
};
const language = "english";

const jwtConfig = {
  fetchUrl: "https://api-staging.flourishsystems.com/",
  secretKey: "secretKey"
};

export { siteConfig, language, themeConfig, jwtConfig };
