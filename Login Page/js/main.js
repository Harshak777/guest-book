const myform = document.getElementsByClassName('login100-form validate-form')[0];

myform.addEventListener('submit', onsubmit);

async function login(){
    await wallet.requestSignIn(null, "near-api-js client-side challenge");
}

function onsubmit(button1){
    button1.preventDefault();
    if (wallet.isSignedIn()==true){
        //Passthrough to next page
        window.open('https://1234-bc91611f-4939-41f4-ad10-adf3735939c5.ws-us02.gitpod.io/')
    }
    else{
        //Proceed to testnet login page
        login()
    }
};