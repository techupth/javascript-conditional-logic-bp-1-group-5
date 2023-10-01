let favoriteBooks = [];
function addFavoriteBook(bookName) {
  // Start coding here !
  if (bookName.includes("Beauty")) {
    favoriteBooks.push(bookName); 
  }
}
// <*parameter*>.includes("คำหรืออะไรที่จะหา")
// <*Array*>.push(*อะไรที่จะเพิ่ม*)


// Example case
addFavoriteBook("Let Me Tell You What I Mean");
addFavoriteBook("Life Among the Terranauts");
addFavoriteBook("The Beauty of Living Twice");
addFavoriteBook("Black Beauty");
addFavoriteBook("Monstrous Beauty");

console.log(favoriteBooks);

// <Array>.push จะเป็นคำสั่งที่เพิ่ม Value เข้าไปในลำดับท้ายสุดใน Array
// เพิ่ม Value เข้าไปในลำดับแรกสุดของ Array ก็สามารถทำได้โดยใช้คำสั่ง Array.unshift()

