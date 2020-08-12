const Discord = require("discord.js")
const client = new Discord.Client()
const token = ""

client.on("ready", () => {
	console.log(`Logged in as ${client.user.tag}!`)
})

client.on("message", msg => {
	if (msg.content === "unban") {
		msg.guild
			.fetchBans()
			.then(bans => {
				bans.forEach(ban => {
					msg.guild.members.unban(ban.user.id)
				})
			})
			.then(() => msg.reply("Unbanned all users."))
			.catch(e => console.log(e))
	}
})

client.login(token)
