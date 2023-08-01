import {Component, Input} from '@angular/core';
import {ComponentBase} from "../component-base";

@Component({
  selector: 'app-component-template',
  templateUrl: './component-template.component.html',
  styleUrls: ['./component-template.component.scss']
})
export class ComponentTemplateComponent implements ComponentBase{

  @Input() data:any;

}
