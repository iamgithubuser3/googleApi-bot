const { Telegraf } = require("telegraf");
const bot = new Telegraf("");
const vision = require('@google-cloud/vision');
const client = new vision.ImageAnnotatorClient();


let url

bot.on("message", async (ctx) => {
    file = ctx.message.photo[ctx.message.photo.length - 1];
    url = await ctx.telegram.getFileLink(file.file_id);
    console.log(url)
})

bot.launch(console.log("started"));

