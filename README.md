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

    -/like ---> This route will "like" a review, it needs the userID and the reviewID from the body

    -/unlike ---> This route will "unlike" a review, it needs the userID and the reviewID from the body

Review Routes:
    -/create ---> This route will create a new Review

    -/:id ---> This route will return reviews, if you use type "m" use the id of a movie, "u" user id, "r" review id
    
    -DEL /delete-review ---> This route will delete a review

    -PATCH /:id ----> This route will modify the review

Authentication Routes: 
    - GET /test ---> test of authenticatior

    - GET /cookies ---> check current cookies

    - POST /login ---> Verifies user data and create a session id and cookies

    - DELETE /logout ---> With the user id, it deletes the session registry

Admin Routes:

    - PATCH /admin-user ---> This route will make a user admin by its id

    - DEL /delete-review/:id ---> This route will delete a review only using its id

    