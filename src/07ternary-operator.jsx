var authenticated = true;

function renderApp(){
    console.log("I'm going to render the app.");
}

function renderLogin(){
    console.log("I'm going to render the login page.");
}

authenticated ? renderApp() : renderLogin();

authenticated = false;

authenticated ? renderApp() : renderLogin();