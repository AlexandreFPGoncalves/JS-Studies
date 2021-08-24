//criar algo que separa o endereço e guarda as partes numa Array
//split

const breakAddress = url => {
  let data, protocol, domain, extension; //Variaveis

  data = url.split("://"); //Corta o url no :// e cria uma Array de 2 elementos
    protocol = data[0]; //protocol = https
  data = data[1].split(".com"); //Corta o segundo elemento em .com e cria uma Array de 2 elementos
    domain = data[0]; // domain = gmail
  data = data[1].split("/"); //corta o segundo elemento na primeira / e cria uma ARray de 2 elementos
     extension = data[1]; //extension = mail
  
  if(extension === undefined){
    return[protocol,domain]
  }else return[protocol, domain, extension]
    }
    
console.log(breakAddress("https://gmail.com/mail/u/#inbox"));
//output : [https, gmail, mail]