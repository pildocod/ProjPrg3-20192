import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientOperationsService } from '../client-operations.service';

declare const showUpdatedMessageModal: any;

@Component({
  selector: 'app-client-editor',
  templateUrl: './client-editor.component.html',
  styleUrls: ['./client-editor.component.css']
})
export class ClientEditorComponent implements OnInit {
  client = {
    id: null,
    name: null,
    email: null,
    phone: null
  }
  constructor(private route: ActivatedRoute, private clientService: ClientOperationsService) { }
  id = null;

  getUrlParameter = (parameterName) => {
    return this.route.snapshot.paramMap.get(parameterName);
  }

  ngOnInit(): void {
    let theId = this.getUrlParameter("clientId");
    let clientFound = this.clientService.searchClient(theId);
    this.client.id = theId;
    this.client.name = clientFound.name;
    this.client.email = clientFound.email;
    this.client.phone = clientFound.phone;
  }

  updateClient() {
    if (this.client.id != null) {
      let updated = this.clientService.updateClient(this.client);
      if (updated) {
        showUpdatedMessageModal("Información cliente actualizado!");
      } else {
        showUpdatedMessageModal("Información cliente no actualizado!");
      }
    }
  }
}
