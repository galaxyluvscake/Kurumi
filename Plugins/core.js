const fs = require("fs");
const axios = require("axios");
const path = require("path");
let mergedCommands = [
  "hi",
  "hello",
  "alive",
  "help",
  "h",
  "menu",
  "sc",
  "support",
  "supportgc",
  "script",
  "rank",
];

module.exports = {
  name: "others",
  alias: [...mergedCommands],
  uniquecommands: ["sc", "support"],
  description: "All miscleaneous commands",
  start: async (Atlas, m, { pushName, prefix, inputCMD, doReact }) => {
    let pic = fs.readFileSync("./Assets/Atlas.jpg");
    switch (inputCMD) {
      case "script":
      case "sc":
        await doReact("🧣");
        let repoInfo = await axios.get(
          "https://api.github.com/repos/FantoX001/Atlas-MD"
        );
        let repo = repoInfo.data;
        let txt = `            🧣 *${botName}'s Script* 🧣\n\n*🎀 Total Forks:* ${
          repo.forks_count
        }\n*⭐ Total Stars:* ${repo.stargazers_count}\n*📜 License:* ${
          repo.license.name
        }\n*📁 Repo Size:* ${(repo.size / 1024).toFixed(
          2
        )} MB\n*📅 Last Updated:* ${repo.updated_at}\n\n*🔗 Repo Link:* ${
          repo.html_url
        }\n\n❝ Dont forget to give a Star ⭐ to the repo. It's made with restless hardwork by *Team ATLAS*. ❞\n\n*©️ Team ATLAS- 2023*`;
        Atlas.sendMessage(m.from, { image: pic, caption: txt }, { quoted: m });
        break;

      case "hi":
      case "hello":
      case "alive":
        await doReact: ("🧣");
    start: async(Atlas, m,{pushName,prefix}) => {
        const pad = (s) => (s < 10 ? "0" : "") + s;
        const formatTime = (seconds) => {
        const hours = Math.floor(seconds / (60 * 60));
        const minutes = Math.floor((seconds % (60 * 60)) / 60);
        const secs = Math.floor(seconds % 60);
        return time = `${pad(hours)}:${pad(minutes)}:${pad(secs)}`;
        };
        const uptime = () => formatTime(process.uptime());
        let txt2 = `\nKonichiwa *${pushName}* senpai, I am *${botName}* bot. Type *${prefix}help* to get my full command list.\n\n_🧩 Server Uptime:_ *${uptime()}*\n_🎀 Status:_ *Operational*\n`
        Atlas.sendMessage(m.from, { image: {url:botImage1}, caption: txt2 }, { quoted: m });
        }
        break;


      case "support":
      case "supportgc":
        await doReact("🔰");
        let txt3 = `              🧣 *Support Group* 🧣\n\n*${botName}* is an open source project, and we are always happy to help you.\n\n*Link:* ${suppL}\n\n*Note:* Please don't spam in the group, and don't message *Admins directly* without permission. Ask for help inside *Group*.\n\n*Thanks for using Atlas.*`;
        Atlas.sendMessage(m.from, { image: pic, caption: txt3 }, { quoted: m });
        break;

      case "rank":
        await doReact("✅");
        const canvacord=require('canvacord')
const {fetchBuffer}=require("../../lib/Function")
module.exports=
    start: async(Atlas, m,{text,pushName,sender}) => {
        const userq = await Levels.fetch(m.sender, "bot");
const levelRole = userq.level
var role = 'Citizen'
if (levelRole <= 2) {
 var role = 'Beginner'
} else if (levelRole <= 4) {
 var role = 'Fiend'
} else if (levelRole <= 6) {
 var role = 'Hellion'
}else if (levelRole <= 8) {
 var role = 'Abomination'
}else if (levelRole <= 10) {
 var role = 'Demon' 
}else if (levelRole <= 12) {
 var role = 'Archdemon'
} else if (levelRole <= 14) {
 var role = 'Infernal Lord'
} else if (levelRole <= 16) {
 var role = 'Demon King'
} else if (levelRole <= 18) {
 var role = 'Demon Emperor'
} else if (levelRole <= 20) {
 var role = 'Dark Lord'
} else if (levelRole <= 22) {
 var role = 'Shadow Emperor'
} else if (levelRole <= 24) {
 var role = 'Hellfire Emperor'
} else if (levelRole <= 26) {
 var role = 'Demon Overlord'
} else if (levelRole <= 28) {
 var role = 'Devil King'
} else if (levelRole <= 30) {
 var role = 'Underworld Emperor'
} else if (levelRole <= 32) {
 var role = 'Prince of Darkness'
} else if (levelRole <= 34) {
 var role = 'Lord of the Underworld'
} else if (levelRole <= 36) {
 var role = 'Demon Lord Supreme'
} else if (levelRole <= 38) {
 var role = 'Master of the Inferno'
} else if (levelRole <= 40) {
 var role = 'Emperor of the Dark Realms'
} else if (levelRole <= 42) {
 var role = 'Lord of the Flames'
} else if (levelRole <= 44) {
 var role = 'Shadow Lord'
} else if (levelRole <= 46) {
 var role = 'Devil Emperor'
} else if (levelRole <= 48) {
 var role = 'Demon General'
}else if (levelRole <= 50) {
 var role = 'Devil King Supreme'
}else if (levelRole <= 52) {
 var role = 'Inferno Lord'
}else if (levelRole <= 54) {
 var role = 'Demon Warlord'
}else if (levelRole <= 56) {
 var role = 'Supereme'
}else if (levelRole <= 58) {
 var role = 'Emperor'
}else if (levelRole <= 60) {
 var role = 'Yaksa'
}else if (levelRole <= 62) {
 var role = 'Ancient Vampire'
}else if (levelRole <= 64) {
 var role = 'Hellfire King'
}else if (levelRole <= 66) {
 var role = 'Supreme Demon Lord'
}else if (levelRole <= 68) {
 var role = 'Revered Ruler'
}else if (levelRole <= 70) {
 var role = 'Divine Ruler'
}else if (levelRole <= 72) {
 var role = 'Eternal Ruler'
}else if (levelRole <= 74) {
 var role = 'Prime'
}else if (levelRole <= 76) {
 var role = 'Prime Lord'
}else if (levelRole <= 78) {
 var role = 'The Prime Emperor'
}else if (levelRole <= 80) {
 var role = 'The Original'
}else if (levelRole <= 100) {
 var role = ' High Level Bitch'
}
		let disc = m.sender.substring(3, 7)
			let textr = "";
            if (pushName) {
             textr += `*${pushName}#${disc}'s* Exp\n\n`
			} else {
				textr += `*${m.sender}#${disc}'s* Exp\n\n`
			}
			textr += `*🎯️XP*: ${userq.xp} / ${Levels.xpFor(userq.level + 1)}\n*❤️Level*: ${userq.level}\n*🔮️Role*: ${role}`

			try {
                    ppuser = await Atlas.profilePictureUrl(m.sender, 'image')
                } catch {
                    pppuser = 'https://www.linkpicture.com/q/IMG-20220118-WA0387.png'
                    ppuser=await fetchBuffer(pppuser)

                }
                const randomHexs = `#${(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')}`
                const randomHex = `#${(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')}`
                const randomHexz = `#${(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')}`

			                const rank = new canvacord.Rank()
                    .setAvatar(ppuser)
                    .setLevel(userq.level)
                    .setLevelColor(randomHexs, randomHex)
                    .setCurrentXP(userq.xp)
                    .setOverlay(randomHex, 100, false)
                    .setRequiredXP(Levels.xpFor(userq.level + 1))
                    .setProgressBar(randomHexs, 'COLOR')
				    .setRank(0, role, false)
                    .setBackground('COLOR', randomHexz)
                    .setUsername(pushName)
                    .setDiscriminator(disc)
                rank.build().then(async(data)=>{
					Atlas.sendMessage(m.from,{image:data,caption:textr},{quoted:m})
  })

    }
}

    break;
    
      case "help":
      case "h":
      case "menu":
        await doReact("☃️");
        await Atlas.sendPresenceUpdate("composing", m.from);
        function readUniqueCommands(dirPath) {
          const allCommands = [];

          const files = fs.readdirSync(dirPath);

          for (const file of files) {
            const filePath = path.join(dirPath, file);
            const stat = fs.statSync(filePath);

            if (stat.isDirectory()) {
              const subCommands = readUniqueCommands(filePath);
              allCommands.push(...subCommands);
            } else if (stat.isFile() && file.endsWith(".js")) {
              const command = require(filePath);

              if (Array.isArray(command.uniquecommands)) {
                const subArray = [file, ...command.uniquecommands];
                allCommands.push(subArray);
              }
            }
          }

          return allCommands;
        }

        function formatCommands(allCommands) {
          let formatted = "";

          for (const [file, ...commands] of allCommands) {
            const capitalizedFile =
              file.replace(".js", "").charAt(0).toUpperCase() +
              file.replace(".js", "").slice(1);

            formatted += `╟   🏮 *${capitalizedFile}* 🏮   ╢\n\n`;
            //formatted += `\`\`\`${commands.join("\n")}\`\`\`\n\n\n`;
            // Adding a - before each command
            formatted += `\`\`\`${commands
              .map((cmd) => `⥼   ${prefix + cmd}`)
              .join("\n")}\`\`\`\n\n\n`;
          }

          return formatted.trim();
        }

        const pluginsDir = path.join(process.cwd(), "Plugins");

        const allCommands = readUniqueCommands(pluginsDir);
        const formattedCommands = formatCommands(allCommands);
        var helpText = `\nKonnichiwa *${pushName}* Senpai,\n\nI am *${botName}*.\n\n*🔖 My Prefix is:*  ${prefix}\n\n${formattedCommands}\n\n\n*©️ Team ATLAS- 2023*`;
        await Atlas.sendMessage(
          m.from,
          { video: { url: botVideo }, gifPlayback: true, caption: helpText },
          { quoted: m }
        );

        break;
        default:
        break;
    }
  },
};
