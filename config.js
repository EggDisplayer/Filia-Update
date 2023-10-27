import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

// Owner
global.owner = [
['628975626924', 'Zeltoria', true],
]
global.mods = []
global.prems = []
// Info
global.nomorwa = '628975626924'
global.packname = 'Filia by'
global.author = '© SenR'
global.namebot = '​Filia'
global.wm = '© Filia By SenR'
global.stickpack = 'Filia by'
global.stickauth = '© SenR'
global.fotonya = 'https://sendeyo.com/get/d/939e13bbe0'
// Link Sosmed
global.sig = 'None'
global.sgh = 'None'
global.sgc = 'None'
// Donasi
global.psaweria = 'None'
global.ptrakterr = 'None'
global.povo = 'Chat Ownerku'
// Info Wait
global.wait = '_Sedang Di Proses, Mohon Tunggu_....'
global.eror = 'Terjadi Kesalahan Coba Lagi Nanti!'
global.multiplier = 69 
// Apikey
global.rose = 'apikey' //api.itsrose.life
global.xyro = 'apikey'// api.xyroinee.xyz
// Catatan : Jika Mau Work Fiturnya
// Masukan Apikeymu
// Gapunya Apikey? Ya Daftar
// Daftar Ke Website Tersebut Untuk
// Mendapatkan Apikey Kamu
global.APIs = {
    xyro: "https://api.xyroinee.xyz",
    popcat : 'https://api.popcat.xyz'
}

/*Apikey*/
global.APIKeys = {
    "https://api.xyroinee.xyz": "6MKJuStxcW",
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
