import { Component } from '@angular/core';
import { ClientOperationsService } from '../client-operations.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent {
  clientListData = [];
  constructor(private clientService: ClientOperationsService) {
    this.clientListData = this.clientService.getClientListData();
  }
}
