# AxentedFrontEndChallenge

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.0.

Steps to run the project:
 - run command 'npm install' to install all dependencies
 - run command 'npm start' to load client server

If there is no registered blogger, the client loads the default values of the following information:

```js
{
  bloggers: [
    {
      id: "1",
      name: "Juan Perez",
      website: "juanperez.io",
      picture_url: "https://placekitten.com/200/300",
      email: "conact@juanperez.io",
      friends: []
    },
    {
      id: "2",
      name: "Amano Pikamee",
      website: "pikamee.io",
      picture_url: "https://placekitten.com/200/300",
      email: "contact@pikamee.io",
      friends: ["1"]
    },
    {
    id: "3",
    name: "Tony Stark",
    website: "tonystark.io",
    picture_url: "https://placekitten.com/200/300",
    email: "contact@tonystark.io",
    friends: ["1", "2"] #list of member_id
    }
  ]
}
```
