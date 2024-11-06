  // цикл for
 
  for (let i = 0; i < 10; i++) {
    console.log("i", i);
      }
    
      // i ++ iнкремент - додавання
     // ++і декремент - віднімання
    
    for (let i= 0; i <= 0; i++) {
        alert(i)
    }
    0 < 0
    
     function summ(number){
    
        let i = 0;
        while (i < 4) {
            console.log(i); 0, 1, 2, 3
            i++
        }
     }
    
     // Цикл for для виведення парних і непарних чисел
    
     for (let i = 0; i < 10; i++) {
         if (i % 2 === 0) {
             console.log(`Парні: ${i}`);
         } else {
             console.log(`Непарні: ${i}`);
         }
     }
    
     let i = 0;
    
     while (i < 10) {
         if (i % 2 === 0) {
             console.log(i);
         }
         i++;
     }
    
    
 
 //

 function NumbersDo(number) {
     if (typeof number !== "number") {
         console.error("Має бути числом!");
         return;
     }
     let i = 0;
     do {
         console.log(i);
         i++;
     } while (i < number);
 }

 NumbersDo(5);
 NumbersDo("hello");
