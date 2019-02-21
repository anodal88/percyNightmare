This is a proof of concept of how to integrate Percy and Nightmare Js

###### STEPS TO TEST #######

1. Go to https://percy.io/login and login to your account  
2. Create a new project  
3. Copy the PERCY_TOKEN of the project created and export it in your environment as a var <b>export PERCY_TOKEN="<TOKEN_OBTAINED_FROM_PERCY>"</b>
4. Create an organization in the top right menu at your account icon
5. Go to the organization settings install GitHub
6. Link your percy organization with the repo that hold the project you want
7. git clone https://github.com/anodal88/percy-poc.git this is a publi project folder created just to intend serve as a demo
8. npm install 
9. In order to upload the pictures taken during your test excecution please be sure to export the PERCY_TOKEN (STEP 3)
10. to see how it works open one the html files inside of the folder pages and make a ui change
11. And excecute `npm run test` to excute all the tests
12. Go to your percy account and you should see a build with the screenshot taken
13. To change the target of your tests go and edit `environment.js` file and edit the baseUrl attribute