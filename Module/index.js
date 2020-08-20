

// var myModule = (function() {
//
//     let memes = ['cats', 'doge', 'harambe'];
//
//     let getMemes = function() {
//         return memes;
//     };
//
//     return {
//         getMemes: getMemes
//     };
//
// })();
//
//
// console.log(myModule.getMemes());
// // [ 'cats', 'doge', 'harambe' ]
// console.log(myModule.memes); //  undefined
class Medium {
  constructor() {
    this.author = 'Artem Deikun';
    this.domain = 'artem.today';
    this.iterator = 1;
  }
  post(title, content) {
    console.log(`Title: ${title} ID: ${this.iterator++}`);
    console.log(`${content} by ${this.author}, ${this.domain}`);
  }
  comment(id, message, user) {
    if (user == undefined) {
      user = this.author;
    };
    console.log(`Comment ${id} post. ${message}`);
    console.log(`by ${user}`);
  }
}