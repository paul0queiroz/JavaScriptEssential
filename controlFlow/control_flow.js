let userRole = "admin";
let acessLevel;

if(userRole === "admin") {
    acessLevel = "Full acessa granted";
} else if (userRole === "manager"){
    acessLevel = "Limited acess granted";
} else {
    acessLevel = "No acess granted";
}

console.log("Acess level: ", acessLevel);

//Definindo variáveis e instruções if…else aninhadas para isLoggedIn e userMessage

let isLoggedIN = true;
let userMessage;

if (isLoggedIN) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "welcome, User";
    }
} else {
    userMessage = "Please log in to acess the system.";
}

//Definindo variáveis e declaração switch para userType e userCategory

let userType = "subscriber";
let userCategory;

switch (userType) {
    case "admin":
        userType = "Administrator";
        break;
    case "manager":
        userType = "Manager";
        break;
    case "subscriber":
        userType = "Subscriber";
    default:
        userType = "Unknown"; 
}

// Uso de Ternary operator para isAuthenticated e checar o status do isAuthenticated
let isAuthenticated = true;
let authenticatedStatus = isAuthenticated ? "Authenticated" : "Is not Authenticated";
// Imprimindo o valor da checagem de status do usuário.
console.log("Your authentication status are: ",authenticatedStatus);