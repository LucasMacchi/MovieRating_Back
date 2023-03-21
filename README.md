# MovieRating_Back
Backend of Movie reviews app

https://rapidapi.com/apidojo/api/flixster/

Routes:

Movie Routes:
    - /:name --> this will bring movies matching the name searched
    - /detail/:id --> this will bring the details of the movie


Profile Routes:
    -/create ---> This route will create a new user, encrypting the password.
    -/pass-validate ---> This route will validate the password for an specific account, 
                        it will return either false or true
