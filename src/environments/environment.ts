// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDE7ZLcKyC1XThBbBqGh-jQY8eIzqbnjbU",
    authDomain: "playsport2-54f2b.firebaseapp.com",
    databaseURL: "https://playsport2-54f2b.firebaseio.com",
    projectId: "playsport2-54f2b",
    storageBucket: "playsport2-54f2b.appspot.com",
    messagingSenderId: "683842388779"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

2
3
4
5
6
7
8
9
10
11