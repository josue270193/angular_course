import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {

  @Output()
  serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();

  @Output("bpCreated")
  blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();

  newServerName = '';
  newServerContent = '';

  onAddServer(nameInput: string, contentInput: string) {
    this.serverCreated.emit({
      serverName: nameInput,
      serverContent: contentInput
    });    
  }

  onAddBlueprint(nameInput: string, contentInput: string) {
    this.blueprintCreated.emit({
      serverName: nameInput,
      serverContent: contentInput
    });
  }
}
