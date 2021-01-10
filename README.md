# Welcome to Petful!

Hello!

Petful is a webapp to simulate the adoption process for pets using a first-in, first-out system that showcases the functions of linked lists and queues!

### Petful is a pet adoption webapp using the following technologies:

Client: Node.js, coupled with React for responsive web design.

Server: Node.js with Express.js.

Petful allows a user to enter a queue and wait in line to adopt a pet. While waiting, the user can watch other peoples' names move through the queue, with each one adopting a pet as they reach the top. When it's their turn, the user can choose between the next available cat or dog in their respective queues.

Read on for more information, as well as instructions for deploying this app.


## Useful Links

Petful was designed function as a client dependent on an API server, and as such, requires both ends to be completely functional. Here are the links to the repositories, and a live version of the app:

Petful Client Repository: https://github.com/howe-jm/petful-client

Petful API Repository: https://github.com/howe-jm/petful-server

Live App: https://petful-client-three.vercel.app/

## Petful Client

### How To Use Petful

1. When you're ready to adopt a pet, enter your name in to the text input box and click the "Find Your New Best Friend" button.

2. Click the button when prompted to enter the queue.

3. Wait until it's your turn in the queue. While you wait, you will be able to see other users adopting pets as their turn comes up.

4. When it's your turn, click on the appropriate button below the cat or dog listed to make your adoption choice.


## Petful API

This is the API for the Petful pet adoption app.

## Petful API Endpoints
### /people

GET - Will retrieve the next person in the queue.

POST - Will add a new person to the end of the queue. This used to ensure that there are always five people in the queue.

### /people/all

GET - Will retrieve all people currently in the queue to adopt a pet.

### /pets

GET - Will retrieve the next pets (both dog and cat) in the queue.

DELETE - Will remove the person at the top of the queue, and the pet of the chosen type (supplied as a string variable as either 'dog' or 'cat'). This function is used to remove a person and pet from the queue once they've been matched.

### /allpets

GET - Will return all pets in the queue. While

### /return

POST - Will return a pet to the back of the queue. This is used to preserve the pets list so that the simulated adoption service does not run out of pets to match with people.

### Set up

#### To deploy locally for development

1. Clone this repository to your local machine and change to its directory: `git clone URL/SSH petful-server && cd $_`
2. Make a fresh start of the git history for this project with `rm -rf .git && git init`
3. Install the node dependencies `npm install`
4. Run the server in development mode (nodemon) with `npm run dev`


## Deploying the API

This API is currently set up to be deployed to Heroku. To do so, follow these steps:

1. Create a new repo on Heroku for the API by running: `heroku create`
2. Deploy the API to Heroku with `npm run deploy`
3. Verify that the API is running using the provided URL and Postman.
