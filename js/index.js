var qoute=document.getElementById('quote');

var qoutesList=[
    
    
    '“So many books, so little time.” ― Frank Zappa',
   '“You know you are in love when you can not fall asleep because reality is finally better than your dreams.” ― Dr. Seuss',
  '“You only live once, but if you do it right, once is enough.” ― Mae West',
   '“If you tell the truth, you do not have to remember anything.” ― Mark Twain',
   '“A friend is someone who knows all about you and still loves you.” ― Elbert Hubbard',
   '“We accept the love we think we deserve.” ― Stephen Chbosky, The Perks of Being a Wallflower',
'“I am selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can not handle me at my worst then you sure as hell do not deserve me at my best.” ― Marilyn Monroe',
'“You have gotta dance like there is nobody watching,Love like you will never be hurt,Sing like there is nobody listening,And live like it is heaven on earth.” ― William W. Purkey',
'“If you want to know what a man is like, take a good look at how he treats his inferiors, not his equals.” ― J.K. Rowling, Harry Potter and the Goblet of Fire',
'“Don’t walk in front of me… I may not follow Don’t walk behind me… I may not lead Walk beside me… just be my friend” ― Albert Camus'

]
var check=[];
var selectedQoute;
function generateQuote(){
    if(check.length===qoutesList.length){
        check=[];
    }
    do{selectedQoute=qoutesList[Math.trunc(Math.random() * qoutesList.length)];


    }while(check.indexOf(selectedQoute) !== -1)
console.log(selectedQoute)
check.push(selectedQoute);
qoute.innerHTML=selectedQoute;
}