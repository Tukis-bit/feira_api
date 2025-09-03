import filmeController from "./controller/feiraController.js"
import senhaController from './controller/senhaController.js'

export default function adicionaRotas(api){
  api.use(filmeController);
  api.use(senhaController);
} 