export class Items{
    public id:number;
    public category:string;
    public description:string;
    public price:number;
    public imagePath:string;


    constructor(category:string, desc:string, price:number, imagePath:string, 
        id?:number){
        this.category=category;
        this.description=desc;
        this.price=price;
        this.imagePath=imagePath;
        this.id=id!;
    }

   
}