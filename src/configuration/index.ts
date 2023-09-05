const brandConfig = require(`../brands/${process.env.VERSION}`).default;

const config = {
   ...brandConfig,
   logo: `/${process.env.VERSION}_logo.png`,
}
export default config;
