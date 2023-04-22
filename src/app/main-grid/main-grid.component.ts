import { Component } from '@angular/core';
import { GuiColumn } from '@generic-ui/ngx-grid';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-main-grid',
  templateUrl: './main-grid.component.html',
  styleUrls: ['./main-grid.component.css']
})
export class MainGridComponent {
  loading = true;

  source: Array<any> = [];

  columns: Array<GuiColumn> = [
    {
      header: 'Modelo',
      field: 'name',
      type: 'string'
    },
    {
      header: 'Memória',
      field: 'memory',
      type: 'number'
    },
    {
      header: 'Acessórios',
      field: 'acessories',
      type: 'string'
    },
    {
      header: 'Status',
      field: 'status',
      type: 'string'
    },
    {
      header: 'Preço de custo',
      field: 'costPrice',
      type: 'number'
    },
    {
      header: 'Vendido por',
      field: 'soldPrice',
      type: 'number'
    },
  ];

  constructor(private readonly httpClient: HttpClient) {
	}

  ngOnInit() {
		this.httpClient
			.get('https://localhost:7037/Products/Smartphones')
			.subscribe((data: any) => {
				this.source = data;
				this.loading = false;
			});
	}
}
