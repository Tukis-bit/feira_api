import filmeController from "./controller/feiraController.js"

export default function adicionaRotas(api){
  api.use(filmeController);
}