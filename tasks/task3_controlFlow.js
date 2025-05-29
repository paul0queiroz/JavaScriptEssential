// . Suponha que uma organização organize um programa de "Serviços Dietéticos" para fornecer dietas a seus funcionários e clientes, com base no peso e na rotina
// diária de uma pessoa. Você precisa criar um código baseado em autorização para fornecer acesso às pessoas com base em seus papéis na organização, como
// funcionários, membros inscritos nos "Serviços Dietéticos" e assinantes.

const Hello = "Seja Bem Vindo ao Serviços Dietéticos.";
console.log(Hello);

let userType = "Membro Inscrito";
let userMessage;

if (userType === "Funcionário") {
  userMessage = "tem acesso aos Serviços Dietéticos.";
} else if (userType === "Membro Inscrito") {
  userMessage =
    "Você tem acesso total aos Serviços Dietéticos e pode interagir com um nutricionista.";
} else if (userType === "Assinante") {
  userMessage = "tem acesso parcial aos Serviços Dietéticos.";
} else {
  userMessage = "precisa ser assinante para ter acesso aos nossos serviços.";
}

let outputMessage = `Você é ${userType} e ${userMessage}`;
console.log(outputMessage);

// switch (userType) {
//   case "Funcionario":
//     userType = "Funcionário";
//     break;
//   case "Assinante":
//     userType = "Assinante";
//     break;
//   case "Membro Inscrito":
//     userType = "Membro";
//     break;
//   default:
//     userType = "Unknown";
//
