import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class CockpitComponent {

  @Output()
  serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();

  @Output("bpCreated")
  blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();

  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContent', { static: true }) serverContentInput: ElementRef;

  onAddServer(nameInput: string) {
    this.serverCreated.emit({
      serverName: nameInput,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(nameInput: string) {
    this.blueprintCreated.emit({
      serverName: nameInput,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }
}
