let string="";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{

        // Jaise he operation krne ke baad = ko press kiya output mel jayege
        if(e.target.innerHTML == '='){
            string = eval(string);
            document.querySelector('input').value=string;    //String into number
        }

        // Agar koye AC button pr click karega to sb earase hojaye ga
        else if(e.target.innerHTML == 'AC'){
            string = "";
            document.querySelector('input').value=string;    //String Earase
        }

        // Operation hoo raha hai
        else{
            console.log(e.target);
            string = string + e.target.innerHTML;
            document.querySelector('input').value=string;    //String into number
        }
    })
})