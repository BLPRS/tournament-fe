import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //NOT USE
  title = 'BLPRS';

  //NOT USE
  showComplete: boolean = false;  

  //ITEMS FOR TOURNAMENT_NAME
  private tournyList = new ListOfTourny
  ("Username",
    [
      new ItemTourny("Tekken Tournament","Try-Out Tekken 8 Matchup",false),
      new ItemTourny("GTA 5v5 Men's Basketball","Greater Ontario young-adults basketball"),
      new ItemTourny("War On Mobile Legend","Bring the chaos, play with WARZ_MOB"),
    ]
  );

  //NOT USE
  // get username(): string {    
  //   return this.tournyList.user;
  // }  

  get getItems(): ItemTourny[] {    
    return this.tournyList.items.filter( item =>  this.showComplete || !item.isComplete);
  }

  //NOT USE
  // get itemCount(): number {
  //   return this.getItems.length;
  // }

  /*function to add items*/
  addNewItem(newItem: string, newItem2: string){
    if(newItem != ""){
      this.tournyList.addItem(newItem,newItem2);
    }
  }
}


export class ListOfTourny {
    
  constructor(public user: string, private itemsForTourny: ItemTourny[] = []) {
  }

  get items(): ItemTourny[] {        
      return this.itemsForTourny;
  }
  
  addItem(task: string,task2: string) {
      this.itemsForTourny.push(new ItemTourny(task,task2));
  }
}

export class ItemTourny{
    
  task: string;
  task2: string;
  isComplete: boolean;

  constructor(taskVal: string,taskVal2: string, completeVal: boolean = false){
      this.task = taskVal;
      this.task2 = taskVal2;
      this.isComplete = completeVal;
  }
}