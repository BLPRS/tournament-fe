import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class ProfileComponent implements OnInit {

title: String
firstName: String
lastName: String
email: String
username: String
userpassword: String

  constructor() { }

  ngOnInit(): void {
  }


  showComplete: boolean = false;  

    //ITEMS FOR Profile
    private profileList = new ListOfProfile
    ("Username",
      [
        // new itemsForProfile("FirstName","LastName","email","User"),
       
      ]
    );
  
    //NOT USE
    // get username(): string {    
    //   return this.tournyList.user;
    // }  
  
    get getItems(): itemsForProfile[] {    
      return this.profileList.items.filter( item =>  this.showComplete || !item.isDelete);
    }
  
    //NOT USE
    // get itemCount(): number {
    //   return this.getItems.length;
    // }
  
    /*Function Add Profile*/
    addNewItem(FirstName: string,LastName: string,email: string ,username: string){
      if(FirstName!= ""){
        this.profileList.addItem(FirstName,LastName,email,username);
      }
    }
  }
  
  
  export class ListOfProfile {
      
    constructor(public user: string, private itemsForTourny: itemsForProfile[] = []) {
    }
  
    get items(): itemsForProfile[] {        
        return this.itemsForTourny;
    }
    
    addItem(FirstName: string,LastName: string,email: string ,username: string) {
        this.itemsForTourny.push(new itemsForProfile(FirstName,LastName, email,username));
    }
  }
  
  export class itemsForProfile{
      
    task: string;
    task2: string;
    task3: string;
    task4: string;
    isDelete: boolean;
  
    constructor(taskVal: string,taskVal2: string,taskVal3: string,taskVal4: string, deleteVal: boolean = false){
        this.task = taskVal;
        this.task2 = taskVal2;
        this.task3 = taskVal3;
        this.task4 = taskVal4;
        this.isDelete = deleteVal;
    }

}
