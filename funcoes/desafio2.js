function calculaRankin(win, loose){
        
    
        let vitorias = win - loose;

        switch (true) {
            case vitorias < 0:
            console.log("O herói não possui vitórias e está no nível Ferro");
            break;         
            case vitorias >= 1 && vitorias <= 10:
            console.log("O Herói tem saldo de vitórias de " + vitorias + " e está no nível Ferro");
            break;
            case vitorias >= 11 && vitorias <= 20:
            console.log("O Herói tem saldo de vitórias de " + vitorias + " e está no nível Bronze");
            break;
            case vitorias >= 21 && vitorias <= 50:
            console.log("O Herói tem saldo de vitórias de " + vitorias + " e está no nível Prata");
            break;
            case vitorias >= 51 && vitorias <= 80:
            console.log("O Herói tem saldo de vitórias de " + vitorias + " e está no nível Ouro");
            break;
            case vitorias >= 81 && vitorias <= 90:
            console.log("O Herói tem saldo de vitórias de " + vitorias + " e está no nível Diamante");
            break;
            case vitorias >= 91 && vitorias <= 100:
            console.log("O Herói tem saldo de vitórias de " + vitorias + " e está no nível Lendário");
            break;
            case vitorias >= 101:
            console.log("O Herói tem saldo de vitórias de " + vitorias + " e está no nível Imortal");
            break;
        }
}

calculaRankin(2,1)