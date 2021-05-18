class Platform{
    constructor(x, y, width, height){
        this.x = 0;
        this.y = 0;
        this.width = 0;
        this.height = 0;
    }
    display(){
        fill(0,0,0)
        rect(this.x, this.y, this.width, this.height);
      };
    }