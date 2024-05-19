import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rich-editor-demo';

  quillForm : UntypedFormGroup;
  textAreaContent: string = 'Default Content';
  editable: boolean;

  constructor(private builder: UntypedFormBuilder) {
    
  }

  ngOnInit(): void {
    this.quillForm = this.builder.group({
      quillContent: ['Default Content']
    })
  }

  toggleEdit() {
    this.editable = !this.editable;
  }

  quillSubmit() {
    console.log("Quill Content: ", this.quillForm.value.quillContent)
  }

  changeQuillContent() {
    this.textAreaContent = 'Opeth are a Swedish progressive metal band from Stockholm, formed in 1990. The band incorporates folk, blues, classical, and jazz elements into its usually lengthy compositions, as well as strong influences from death metal, especially in their early works. Songs may include acoustic guitar passages, Mellotrons, death growls, and strong dynamic shifts.';

    this.quillForm.controls['quillContent'].setValue('Opeth are a Swedish progressive metal band from Stockholm, formed in 1990. The band incorporates folk, blues, classical, and jazz elements into its usually lengthy compositions, as well as strong influences from death metal, especially in their early works. Songs may include acoustic guitar passages, Mellotrons, death growls, and strong dynamic shifts.');
  }

}
