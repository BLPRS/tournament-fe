import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-tournament',
  templateUrl: './add-tournament.component.html',
  styleUrls: ['./add-tournament.component.css']
})
export class AddTournamentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showComplete: boolean = false;  

  //ITEMS FOR TOURNAMENT_NAME
  private tournyList = new ListOfTourny
  ("Username",
    [
      new ItemTourny("Tekken Tournament","Try-Out Tekken 8 Matchup\n[GT:Double Tournament,GF:Single Elimination,NP:10 players]","2021-05-11"),
      new ItemTourny("GTA 5v5 Men's Basketball","Greater Ontario young-adults basketball\n[GT:Single Tournament,GF:Round Robin,NP:26 players]","2022-09-22"),
      new ItemTourny("War On Mobile Legend","Bring the chaos, play with WARZ_MOB [GT:Multiple Tournament,GF:Double Elimination,NP:6 players]","2022-10-8"),
    ]
  );

  //NOT USE
  get username(): string {    
    return this.tournyList.user;
  }  

  get getItems(): ItemTourny[] {    
    return this.tournyList.items.filter( item =>  this.showComplete || !item.isComplete);
    //return this.tournyList.items;
  }

  //NOT USE
  get itemCount(): number {
    return this.getItems.length;
  }

  /*function to add items*/
  addNewItem(newItem: string, newItem2: string,sDate: string){
    if(newItem != ""){
      this.tournyList.addItem(newItem,newItem2,sDate);
    }
  }
}


export class ListOfTourny {
    
  constructor(public user: string, private itemsForTourny: ItemTourny[] = []) {
  }

  get items(): ItemTourny[] {        
      return this.itemsForTourny;
  }
  
  addItem(task: string,task2: string,sDate: string) {
      this.itemsForTourny.push(new ItemTourny(task,task2,sDate));
  }
}

export class ItemTourny{
    
  task: string;
  task2: string;
  startDate: string | undefined;
  isComplete: boolean;

  constructor(taskVal: string,taskVal2: string,startDate: string, completeVal: boolean = false){
      this.task = taskVal;
      this.task2 = taskVal2;
      this.startDate = startDate;
      this.isComplete = completeVal;
  }
}