import {Component, OnInit, ViewChild, Input} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-widget-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  displayedColumns: string[];
  dataSource;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  @Input() data: PeriodicElement[] = [];

  constructor() { }

  ngOnInit() {
    this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
    this.dataSource = new MatTableDataSource<PeriodicElement>(this.data);
    this.dataSource.paginator = this.paginator;
  }

}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

