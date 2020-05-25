// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = 'y9ht1adt9j'
export const apiEndpoint = `https://${apiId}.execute-api.eu-west-2.amazonaws.com/dev`

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map
   domain: 'sup99.auth0.com',            // Auth0 domain
   clientId: 'N2G6GSpBuXnzNsS7fShi6FGCAT0wtjmr',          // Auth0 client id
   callbackUrl: 'http://localhost:3000/callback'
}