import cron from "cron";
import https from "https";


const cronJob = new cron.CronJob("*/14 * * * *", () => {
    https
       .get(`${process.env.API_URL}/api/health`, (res) => {
         if (res.statusCode !== 200) {
           console.error(`Cron job failed with status code: ${res.statusCode}`);
         }
         res.on("data", (chunk) => {
           console.log(`Cron job response: ${chunk}`);
         });
       })
});

export default cronJob;