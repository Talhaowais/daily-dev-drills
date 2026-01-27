const btn = document.querySelectorAll('.button');
const body = document.querySelector('body');

btn.forEach(function(btn){
    console.log(btn);
    btn.addEventListener('click', function (e) {
       //console.log(e);
        //console.log(e.target);


        //by using if statements
        // if(e.target.id === 'grey'){
        //     body.style.backgroundColor = e.target.id;
        // }
        // if(e.target.id === 'white'){
        //     body.style.backgroundColor = e.target.id;
        // }
        // if(e.target.id === 'blue'){
        //     body.style.backgroundColor = e.target.id;
        // }
        // if(e.target.id === 'yellow'){
        //     body.style.backgroundColor = e.target.id;
        // }


        //by using switch statements
        switch(e.target.id){
            case 'grey':
                body.style.backgroundColor = e.target.id;
                break;
            case 'white':
                body.style.backgroundColor = e.target.id;
                break;
            case 'blue':
                body.style.backgroundColor = e.target.id;
                break;
            case 'yellow':
                body.style.backgroundColor = e.target.id;
        }
        
    })

});