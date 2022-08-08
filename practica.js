
// Mostrar el cuadrado de cada número del 1 al 9

for (let i = 1; i < 10; i++) {
    let resultado = i * i;
    console.log(`${i} x ${i} = ` + resultado);
  }


// Distinguir entre par o impar

  for (let a = 0; a < 100; a++) {
        if  (a % 2 != 0) {
        console.log(a + " es impar");
    } else {
        console.log(a + " es par");
      }
  }
    


//While loop solo mostrando multiplos de 5 
let n = 0;
while (n < 50) {
    
    n++;
    if (n % 5 != 0) {
        continue
    }
    console.log(n)
}