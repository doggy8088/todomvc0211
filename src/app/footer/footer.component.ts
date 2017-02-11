import {Input, Output, EventEmitter, Component,  OnInit} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input() todos: any[];

  @Output() clearCompleted = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  get active_items() {
    return this.todos.filter(v => !v.done).length;
  }

  btnClear() {
    this.clearCompleted.emit();
  }
}
