//JSON - JavaScript Object Notation
// chave e valor com o objetivo de transferir dados
let invoice = {
	name: "felipe",
    age: 28,
    products: {
    	0: ["mouse 2xwm", 29.90],
        1: ["Teclado mecânico", 129.99],
        2: ["Monitor", "899.99"],
        3: ["TV 100 polegadas", "10000.90"]
    },
    taxes: "98.90"
}

generateInvoice(invoice) //chama da função



function generateInvoice(invoice){                   // função recebe o objeto como parâmtero                                       
	console.log(`O comprador é ${invoice.name}`)     // acessamos os atributos do objeto ${}                          
    console.log(`A idade é ${invoice.age}`)          //                       
    console.log("------------")
    
    for(let index in invoice.products){               //for in é usado exclusivamente para percorrer objetos                   
    	let [productName, productPrice] = invoice.products[index] //desestruturação: sabendo que cada index do objeto contém um array com dois valores, desestruturamos em duas variáveis
        console.log(`- ${productName}: R$ ${productPrice}`) //então acessamos as variáveis que acabamos de criar.
    }
    
    
}