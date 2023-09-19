const brandConfig = require(`../brands/${process.env.NEXT_PUBLIC_VERSION || 'default'}`).default;

const config = {
   ...brandConfig,
   logo: `/${process.env.NEXT_PUBLIC_VERSION || 'default'}_logo.png`,
};

export default config;
