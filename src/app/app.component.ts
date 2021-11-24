import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import Quill from 'quill';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {

  form: FormGroup;
  html: string;

  quillConfig={
     toolbar: {
       container: [
         ['bold', 'italic', 'underline', 'strike'],
         [{ 'size': ['xsmall', 'small', 'medium', 'large', 'xlarge']}],
         [{ 'align': [] }],
         ['clean'],                    
         ['link'],
       ],
     },
  }

  constructor(){}

  ngOnInit() {
    this.form = new FormGroup({
      'text': new FormControl('<p><strong>Hello</strong> World!</p>')
    });
  }

  onContentChanged = (event) =>{
    //console.log(event.html);
  }

  public logValue(): void {
    const element = document.querySelector('.ql-editor');
    this.html = element.innerHTML;
  }

  public logForm(): void {
    setTimeout(() => {
    console.log(this.form);
    console.log(`DIRTY: ${this.form.dirty}`);
    console.log(`TOUCHED: ${this.form.touched}`);
    });
  }

  public blur(): void {
    console.log('blur');
  }

  public onSelectionChanged(): void {
    console.log('onSelectionChanged');
  }
}
