class Form{
    constructor(){

    }
    display(){
        var title=createElement('h2');
        title.html("Car Racing Game",);
        title.position(200,80);
        var input=createInput('NAME');
        var button=createButton('PLAY');
        var greeting=createElement('h3');
        input.position(200,160);
        button.position(250,200);
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name=input.value();
            playerCount=playerCount+1;
            player.update(name);
            player.updateCount(playerCount);
            greeting.html("HELLO!!"+name);
            greeting.position(200,200);
        })
    }
}