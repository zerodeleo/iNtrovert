lear
# Zerodeleo

## 1. Setting up mongodb
- Login to mongodb atlas
- Create new project
- Create new cluster
    - Make sure to name cluster before creating it
    - Add authentication to .env file
        - <code>ATLAS_URI="the URI you get when clicking connect after cluster is created"</code>
    - Add 0.0.0.0 IP Address access 
- Connect cluster    
## 2. Setting up heroku
- Login to heroku
- Create app
- Connect to GitHub
- Enable automatic deploys
- Add .env ariables to heroku config vars

# BRANCHES
## 1. watcha-step-1
- ### Project setup
    - #### BE
        - **Simple express server**
            - MongoDB connection
            - Simple API route with post and get
                - <code>api/:uid</code>
    - #### FE
        - **Simple component with buttons**
            - the get button
                - *gets a collection from db*
                    - <code>api/:uid</code>
            - the post button
                - *posts a collection to db*
                    - <code>api/:uid</code>
    - #### UTILS
        - Heroku deployment              
## 2. watcha-step-2
- ### Project setup
    - #### BE
        - **Simple express server**
            - MongoDB connection
            - Simple API route with post and get
                - <code>api/:uid</code>
    - #### FE
        - **Simple SignIn component with user inputs**
            - the submit button
                - *posts a collection to db*
                    - <code>api/:uid</code>
        - **Redux as state management**            
    - #### UTILS
        - Heroku deployment     
        - ESlint         
        - Redux
## 3. watcha-step-3
- ### Project setup
    - #### BE
        - **Simple express server**
            - MongoDB connection
            - API route with post and get
                - <code>api/API_KEY/:uid</code>
                    - **post**
                        - creates user with email
                        - checks if user exists
                    - **get**
                        - gets the user    
    - #### FE
        - **SpeakWithDataBase component**
            - the submit button
                - *posts a collection to db*
                    - <code>api/API_KEY/:uid</code>
        - **Redux as state management**            
    - #### UTILS
        - Heroku deployment     
        - ESlint  
        - Redux       
## 4. watcha-step-4
- ### Project setup
    - #### BE
        - **Simple express server**
            - MongoDB connection
            - API route with post and get
                - <code>api/API_KEY/:uid</code>
                    - **post**
                        - creates user with username
                        - checks if user exists
                    - **get**
                        - gets the user    
    - #### FE
        - **SignUp and SignedIn component**
            - the submit button
                - *posts a collection to db*
                    - <code>api/API_KEY/:uid</code>
                - *navigates depending on state*
                    - If logged in navigated to SignedIn if not SignUp    
        - **Redux as state management**            
    - #### UTILS
        - Heroku deployment     
        - ESlint         
        - Redux
## 5. watcha-step-5
- ### Added styles to watcha-step-4 and NavBar
- ### User is able to:
    - **Enter with name**
    - **Input watcha**
    - **See other who has the same watcha**
## 6. watcha-step-6
- ### Some retouches of step 5
## 7. watcha-step-7
- ### User is able to:
    - **Enter with name**
    - **Input watcha**
    - **Enter chat with other users that has the same watcha**
    - **Chat with those users**
## 8. watcha-step-8
- ### step 7 now works in deployment
## 9. watcha-step-9
- ### User is able to:
    - **Enter with name**
        - *If localstorage has uid, user jumps directly to input watcha*
    - **Input watcha**
    - **Enter chat with other users that has the same watcha**
    - **Chat with those users**
## 10. watcha-step-10
- ### Fixed dash to navigate to chat instead of toggle
## 11. watcha-step-11
- ### User is able to:
    - **Enter with name**
        - *If localstorage has uid, user jumps directly to input watcha*
    - **Input watcha**
    - **Edit Watcha**
    - **Enter chat with other users that has the same watcha**
    - **Chat with those users**
## 12. watcha-step-12
- ### Fixed scroll in chat, navbar not visible in chat etc.
## 13. watcha-step-13
- ### Error handling with Error component, also checking inputs with regex
## 14. watcha-step-14
- ### Fixed date format in chat msg
## 15. watcha-step-15
- ### Fixed problem with routing in server 
    - *production mode was sent to the wrong build path*
## 16. watcha-step-16
- ### Fixed media styling