Ejercicio 2
Diferencia Absoluta entre las Sumas de las Diagonales de una Matriz Cuadrada
Dada una matriz cuadrada (un arreglo bidimensional de tamaño n×nn×n), escribe una función que calcule la diferencia absoluta entre las sumas de sus dos diagonales principales.
lenguajes (python, javascript, el que mas prefieras)
Descripción:

Diagonal Primaria (Diagonal Principal): Es la diagonal que va desde la esquina superior izquierda a la esquina inferior derecha. Por ejemplo, en la matriz:
 [11, 2, 4]
 [4, 5, 6]
 [10, 8, -12]

 
 Los elementos de esta diagonal son: 11, 5, -12.
Diagonal Secundaria: Es la diagonal que va desde la esquina superior derecha a la esquina inferior izquierda. En el ejemplo anterior, los elementos son: 4, 5, 10.
Diferencia Absoluta: La función debe calcular la suma de los elementos de cada diagonal y luego retornar el valor absoluto de la diferencia entre estas dos sumas. En el ejemplo:
Suma de la diagonal principal: 11+5+(−12)=4.
Suma de la diagonal secundaria: 4+5+10=19.
Diferencia absoluta: [4−19]=15.

Entrada:

Un arreglo bidimensional (lista de listas) arr que representa una matriz cuadrada de enteros. Por ejemplo:
  
  arr = [
      [11, 2, 4],
      [4, 5, 6],
      [10, 8, -12]
  ]
  

Salida:

Un entero que representa la diferencia absoluta entre las sumas de las dos diagonales. Para el ejemplo, la salida sería 15.
