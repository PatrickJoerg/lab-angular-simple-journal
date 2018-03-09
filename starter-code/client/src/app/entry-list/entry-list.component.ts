import { Component, OnInit } from "@angular/core";
import { JournalService } from '../services/journal.service'

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css'],
  providers: [JournalService]  
})
export class EntryListComponent implements OnInit {
  journalList: Array<Object>

  constructor(private journals:JournalService) { }

  ngOnInit() {
  console.log("argh");
  this.journals.getAllEntries()
  .subscribe(response=>{
    this.journalList=response})
  console.log(this.journalList);
  }
}
