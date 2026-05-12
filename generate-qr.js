import QRCode from 'qrcode'
import { writeFileSync } from 'fs'
import { resolve } from 'path'

const url = 'https://giova144-git.github.io/Meet_And_Greet_Codea-/'
const outputPath = resolve('qr-registro.png')

await QRCode.toFile(outputPath, url, {
  type: 'png',
  width: 600,
  margin: 2,
  color: {
    dark: '#000000',
    light: '#ffffff',
  },
  errorCorrectionLevel: 'H',
})

console.log(`QR generado: ${outputPath}`)
