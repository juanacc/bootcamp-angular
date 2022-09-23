import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input('srvElement') element: { type: string, name: string, content: string };
  @ViewChild('heading', { static: true }) header: ElementRef;
  @ContentChild('contentParagraph', { static: true }) paragraph: ElementRef;

  constructor() {
    console.log('CONSTRUCTOR');
  }

  ngOnInit(): void {
    console.log('NG ON INIT');
    console.log('Text content:' + this.header.nativeElement.textContent);
    console.log('Text content paragraph:' + this.paragraph.nativeElement.textContent);
  }

  ngOnChanges(changes: SimpleChanges) { //es el unnico que recibe un argumento
    console.log('NG ON CHANGE', changes);
  }

  ngDoCheck(): void {
    console.log('NG DO CHECK');
  }

  ngAfterContentInit(): void {
    console.log('NG AFTER CONTENT INIT');
    console.log('Text content paragraph:' + this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked(): void {
    console.log('NG AFTER CONTENT CHECKED');
  }

  ngAfterViewInit(): void {
    console.log('NG AFTER VIEW INIT');
    console.log('Text content:' + this.header.nativeElement.textContent);
  }

  ngAfterViewChecked(): void {
    console.log('NG AFTER VIEW CHECKED');
  }

  ngOnDestroy(): void {
    console.log('ON DESTROY');
  }

}
