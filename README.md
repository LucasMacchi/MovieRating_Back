# MovieRating_Back
Backend of Movie reviews app

https://rapidapi.com/apidojo/api/flixster/

Routes:

Movie Routes:
    - /:name --> this will bring movies matching the name searched
    - /detail/:id --> this will bring the details of the movie


Profile Routes:
    -/create ---> This route will create a new user, encrypting the password and send a email with a verification code.

    -/pass-validate ---> This route will validate the password for an specific account, it will return either false or true
    
    -/validate-user ---> This route will validate the user using a code sent to the email

    -/patch-user ---> This route will change user username and sent an email informing about the change

    -/:id ---> This route will return an user, the id can be either the email or the id of the user
