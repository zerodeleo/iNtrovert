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
## iNtrovert-step-1
- Project setup done
    - Server connected to database
    - Automatic deploy via heroku
    - Users route configured
    - Calls from FE to BE working

# client is running on localhost:3000
# server is running on localhost:4000
# fakeGoogleApi is running on localhost:5001
# fakeBestTimeApi is running on localhost:5002