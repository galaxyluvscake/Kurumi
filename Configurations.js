require("dotenv").config();

let gg = process.env.MODS;
if (!gg) {
  gg = "22548132639";   // You can replace this number with yours //
}


global.owner = gg.split("22548132639, 237658679320, 212774518801");
global.mongodb = process.env.MONGODB || "mongodb+srv://atlas:blin6@cluster0.3pfvqv5.mongodb.net/?retryWrites=true&w=majority";
global.sessionId = process.env.SESSION_ID || "amb117415";
global.prefa = process.env.PREFIX || "!";
global.tenorApiKey = process.env.TENOR_API_KEY || "AIzaSyCyouca1_KKy4W_MG1xsPzuku5oa8W358c";
global.packname = process.env.PACKNAME || `meme`;
global.author = process.env.AUTHOR || "nigger";
global.port = process.env.PORT || "10000";
global.openAiAPI = process.env.OPENAI_API || "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";
global.owner = gg.split("22548132639, 237658679320, 212774518801");

module.exports = {
  mongodb: global.mongodb,
};
