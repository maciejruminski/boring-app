# Boring App

Simple application, created for mobile devices, that allows you to search for interesting places within your area using Google Map and a few filters. To use it, just enter your email (it is not stored anywhere), then enter the one-time password that will come to it.

After that, you just need to adjust the filters and that is all! Choose the place you like or if you are not sure, please use the button to select random location. Additionaly, you can save your favourite places.

You can use the application here [bore-app.herokuapp.com](https://bore-app.herokuapp.com). If the application has not been used for some time, the first launch may take longer. This is the mechanism used by Heroku to save resources.

# Technologies

While creating the application, I wanted to improve my skills. The project is based on React with TypeScript. For a few small tests I used a Cypress library. The application uses a couple Google APIs. Places API to show different places using filters, Maps API to show Google Map and Directions API to show route from our position to desired place.

When in comes to styling, I used Styled Components.

To make the app more useful, I added language switcher so you can choose between Polish and English. I used the i18next library for this.

Additionaly, I made it as a PWA so it can be saved on mobile.

I'm not Back End Developer but I decided that solid project should have at least a tiny back-end. It was also an opportunity to learn something new. I used the Express library with TypeScript, wrote a few endpoints for the previously mentioned Google API. Additionaly, to store somewhere a data related to recently used filters, as well as saved places, I used a Google Spreadsheet API. When the user enters a valid one-time password, the hash is created and saved in Local Storage and Google Spreadsheet. Thanks to that I can connect the user with some informations and at the same time not to store any sensitive data such as e-mail.

