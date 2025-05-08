const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const QRCode = require('qrcode');
const express = require('express');
const path = require('path');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
	default: PRINCE_JUNIOR,
	useMultiFileAuthState,
	jidNormalizedUser,
	Browsers,
	delay,
	makeInMemoryStore,
} = require("@whiskeysockets/baileys");

function removeFile(FilePath) {
	if (!fs.existsSync(FilePath)) return false;
	fs.rmSync(FilePath, {
		recursive: true,
		force: true
	})
};
const {
	readFile
} = require("node:fs/promises")
router.get('/', async (req, res) => {
	const id = makeid();
	async function PRINCE_JUNIOR_V2_QR_CODE() {
		const {
			state,
			saveCreds
		} = await useMultiFileAuthState('./temp/' + id)
		try {
			let Qr_Code_By_Prince_Junior = Junior_Tech({
				auth: state,
				printQRInTerminal: false,
				logger: pino({
					level: "silent"
				}),
				browser: Browsers.macOS("Desktop"),
			});

			Qr_Code_By_Prince_Junior_Tech.ev.on('creds.update', saveCreds)
			Qr_Code_By_Prince_Junior_Tech.ev.on("connection.update", async (s) => {
				const {
					connection,
					lastDisconnect,
					qr
				} = s;
				if (qr) await res.end(await QRCode.toBuffer(qr));
				if (connection == "open") {
					await delay(5000);
					let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
					await delay(800);
				   let b64data = Buffer.from(data).toString('base64');
				   let session = await Qr_Code_By_Prince_Junior_Tech.sendMessage(Qr_Code_By_Prince_junior_Tech.user.id, { text: '' + b64data });
	
				   let PRINCE_JUNIOR_V2_TEXT = `
*_Session Connected By Prince junior Tech_*
*_Made With 🤍_*
______________________________________
╔════◇
║ *『AMAZING YOU'VE CHOSEN PRINCE JUNIOR V2』*
║ _You Have Completed the First Step to Deploy a Whatsapp Bot._
╚════════════════════════╝
╔═════◇
║  『••• 𝗩𝗶𝘀𝗶𝘁 𝗙𝗼𝗿 𝗛𝗲𝗹𝗽 •••』
║
║❒ *Owner:* _https://wa.me/254723245807/message/Hello Junior_
║❒ *Repo:* _https://github.com/Nyanuga/prince-junior-v2
║❒ *WaGroup:* _https://chat.whatsapp.com/LLx80jCw3fsDm94T3hePE7_
║❒ *WaChannel:* _https://whatsapp.com/channel/0029Vb5U5AI3wtb8r6Gbex2p_
║❒ *Plugins:* _https://github.com/Nyanuga 
╚════════════════════════╝
_____________________________________
	
_Don't Forget To Give Star To My Repo_`
	 await Qr_Code_By_Prince_Junior_Tech.sendMessage(Qr_Code_By_Prince_Junior_Tech.user.id,{text:PRINCE_JUNIOR_V1_TEXT},{quoted:session})



					await delay(100);
					await Qr_Code_By_prince_junior_Tech.ws.close();
					return await removeFile("temp/" + id);
				} else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
					await delay(10000);
					PRINCE_JUNIOR_V2_QR_CODE();
				}
			});
		} catch (err) {
			if (!res.headersSent) {
				await res.json({
					code: "Service is Currently Unavailable"
				});
			}
			console.log(err);
			await removeFile("temp/" + id);
		}
	}
	return await PRINCE_JUNIOR_V2_QR_CODE()
});
module.exports = router
