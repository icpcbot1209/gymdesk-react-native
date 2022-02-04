// import { CLIENT_ID } from '@env';
import { AuthConfiguration, authorize } from 'react-native-app-auth';

// function generateVerifier() {
//   const array = new Uint32Array(28);
//   window.crypto.getRandomValues(array);

//   return Array.from(array, (item) => `0${item.toString(16)}`.substr(-2)).join('');
// }

// async function generateChallenge(verifier: string) {
//   function sha256(plain: string) {
//     const encoder = new TextEncoder();
//     const data = encoder.encode(plain);

//     return window.crypto.subtle.digest('SHA-256', data);
//   }

//   const hashed = await sha256(verifier);

//   return base64URLEncode(hashed);
// }

// const base64URLEncode = (str: ArrayBuffer) => {
//   const param = new Uint8Array(str);
//   var array = [];

//   for (var i = 0; i < param.byteLength; i++) {
//     array[i] = param[i];
//   }

//   return btoa(String.fromCharCode.apply(null, array)).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+\$/, '');
// };
// const buildAuthorizeEndpointAndRedirect = async () => {
//   const host = 'https://gymdesk.com/mobile/authorize';
//   const clientId = 'gymdeskapp';
//   const redirectUri = 'https://gymdesk.com/mobile/authorize';
//   // const scope = 'specific,scopes,for,app';
//   const state = 'xyz';
//   const verifier = generateVerifier();
//   const challenge = await generateChallenge(verifier);

//   // Build endpoint
//   const endpoint = `${host}?response_type=code&client_id=${clientId}&state=${state}&redirect_uri=${redirectUri}&code_challenge=${challenge}&code_challenge_method=S256`;
//   console.log(endpoint);
//   // Set verifier to local storage
//   localStorage.setItem('verifier', verifier);
//   // Redirect to authentication server's login page
//   window.location.href = endpoint;
// };

// async function getToken(verifier: string) {
//   const host = 'https://gymdesk.com/mobile/authorize';
//   const clientId = 'gymdeskapp';
//   const redirectUri = 'https://gymdesk.com/mobile/authorize';
//   const grantType = 'authorization_code';

//   // Get code from query params
//   const urlParams = new URLSearchParams(window.location.search);
//   const code = urlParams.get('code');

//   // Build params to send to token endpoint
//   const params = `client_id=${clientId}&grant_type=${grantType}&code_verifier=${verifier}&redirect_uri=${redirectUri}&code=${code}`;

//   // Make a POST request
//   try {
//     const response = await fetch(host, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/x-www-form-urlencoded',
//       },
//       body: params,
//     });
//     const data = await response.json();

//     // Token
//     console.log(data);
//   } catch (e) {
//     console.log(e);
//   }
// }

// export const endpoitAndRediect = async () => {
//   await buildAuthorizeEndpointAndRedirect();

//   // const str = JSON.stringify(localStorage.getItem('verifier'));
//   // const verifier = JSON.parse(str);
//   // await getToken(verifier);
// };

const config: AuthConfiguration = {
  issuer: 'https://gymdesk.com/mobile/authorize',
  clientId: 'gymdeskapp',
  redirectUrl: 'http://localhost:19006/',
  additionalParameters: {},
  scopes: ['openid', 'profile', 'email', 'offline_access'],
};

export const handleAuthorize = async () => {
  try {
    const result = await authorize(config);
    console.log('result: ', result);
    alert(result);
  } catch (error) {
    console.error(error);
  }
};
