import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var $:any;
declare var moment:any;

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit,AfterViewInit {

  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit(): void {
    $(function() {
      'use strict';
      
      // Date Range Picker
      $(function() {
         var start = moment().subtract(29, 'days');
         var end = moment();
         function cb(start, end) {
             $('#dateRange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
         }
         $('#dateRange').daterangepicker({
             startDate: start,
             endDate: end,
             ranges: {
                'Today': [moment(), moment()],
                'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                'Last 7 Days': [moment().subtract(6, 'days'), moment()],
                'Last 30 Days': [moment().subtract(29, 'days'), moment()],
                'This Month': [moment().startOf('month'), moment().endOf('month')],
                'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
             }
         }, cb);
         cb(start, end);
     });
     });
  }
}
