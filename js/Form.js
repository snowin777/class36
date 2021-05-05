class Form{

    constructor(){
         
    }

    display(){

        var title = createElement('h2');
        title.html("multiplayer car game");
        title.position(130,0);

        var input = createInput("name");
        var button = createButton('play');

        input.position(130,160);
        button.position(250,200);

        button.mousePressed(function()
        {
            input.hide();
            button.hide();

            var name = input.value();

            var greetting = createElement('h3');
            greetting.html("hello, welcome player "+name);
            greetting.position(130,160);
             
        });
    }
}