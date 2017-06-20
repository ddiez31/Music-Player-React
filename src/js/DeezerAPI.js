import base64 from '../../node_modules/base-64' // importez la dépendance tout juste installée

const rootEndpoint = 'https://connect.deezer.com/oauth/auth.php?app_id=YOUR_APP_ID&redirect_uri=YOUR_REDIRECT_URI&perms=basic_access'
// pour simplifier la compréhension de ce tuto, nous renseignons la clé API "en dur"
// ne faites jamais cela au sein de vos projets (voir http://12factor.net/fr/config)
const ApiKey = '240202'
// const password = '' 
const authBase64 = base64.encode(`${ApiKey}`)

const headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Authorization': `Basic ${authBase64}` // HTTP basic auth
}

// retourne une recette de bière au hasard
export const getRandomBrewdog = () =>
  fetch(`${rootEndpoint}/`, { headers })
    .then(({status, json}) => {
      if (status !== 200) throw new Error(`API answered with status code ${status}`) // gestion du status code HTTP
      else return json() // on parse la réponse en JSON
    })