import dotenv from 'dotenv';

dotenv.config();

export default {
    MONGODB_URL: process.env.MONGODB_URL,
    JTW_SECRET: process.env.JTW_SECRET
};
