import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    CockpitComponent,
    ServerElementComponent
  ]
})
export class DatabindingComponent {

  serverElements = [
    {
      type: 'server',
      name: 'Testserver 1',
      content: 'content'
    }
  ];

  onServerAdded(serverData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(serverData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onChangesFirst() {
    if (this.serverElements?.length) {
      this.serverElements[0].name = "Name changes";
    }
  }    
  

  onDestroyFirst() {
    this.serverElements.splice(0, 1);
  }
}
