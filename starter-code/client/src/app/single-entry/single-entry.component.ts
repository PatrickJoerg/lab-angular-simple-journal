import { Component, OnInit } from "@angular/core";
import { JournalService } from '../services/journal.service';
import { ActivatedRoute } from "@angular/router"

@Component({
  selector: 'app-entry-list',
  templateUrl: './single-entry.component.html',
  styleUrls: ['./single-entry.component.css'],
  providers: [JournalService]
})
export class SingleEntryComponent implements OnInit {
  paramId: any;
  journalList: Array<Object>;
  originalEntry: any;

  constructor(
    private journals:JournalService,
    private route:ActivatedRoute
  ) { }


  // ngOnInit() {
  //   //const paramId = +this.route.snapshot.params['id'];
  //   this.route.params.subscribe(params => this.paramId= params['id']);
  //   this.originalEntry = this.journals.getSingle(this.paramId);
  //   console.log(this.paramId);
  //   console.log(this.originalEntry.name);
  // }}




  ngOnInit() {
    //const paramId = +this.route.snapshot.params['id'];
    this.route.params
      .subscribe(params => this.journals.getSingle(params['id'])
        .subscribe(response => this.originalEntry= response)
      )
  }}

