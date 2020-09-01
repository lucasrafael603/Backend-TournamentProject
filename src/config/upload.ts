import multer from 'multer'
import path from 'path'
import crypto from 'crypto'

//__dirname refere-se ao diretorio que o arquivo atual esta
const tmpFolder = path.resolve(__dirname,'..', '..', 'tmp')

///Estes configurações definem o local de armazenamento e o padrão dos nomes dos arquivos
export default {

  directory: tmpFolder,
  storage: multer.diskStorage({
  
    destination: tmpFolder,

    
    filename: (request, file, callback) => {

      const fileHash = crypto.randomBytes(10).toString('hex')
      const fileName = `${fileHash}-${file.originalname}`

      return callback(null, fileName)
    }
  })

}