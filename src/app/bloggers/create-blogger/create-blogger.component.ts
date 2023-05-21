import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Blogger } from '../blogger';

@Component({
  selector: 'app-create-blogger',
  templateUrl: './create-blogger.component.html',
  styleUrls: ['./create-blogger.component.scss'],
})
export class CreateBloggerComponent implements OnInit {
  form: FormGroup;

  constructor(
    public modal: NgbActiveModal,
    private readonly formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.setForm();
  }

  setForm() {
    this.form = this.formBuilder.group({
      name: [null, [Validators.required]],
      website: [null, [Validators.required]],
      picture_url: [null, [Validators.required]],
      picture_urlV: [false, [Validators.requiredTrue]],
      email: [null, [Validators.required, Validators.email]],
    });
    
    this.form.get('picture_url')?.valueChanges.subscribe(async (result)=> {
      this.form.get('picture_urlV')?.patchValue(this.UR_exists(result))
    });
  }

  confirm() {
    if (this.form.valid) {
      const blogger: Blogger = {
        id: new Date().getTime().toString(),
        name: this.form.getRawValue().name,
        website: this.form.getRawValue().website,
        picture_url: this.form.getRawValue().picture_url,
        email: this.form.getRawValue().email,
        friends: []
      }
      this.modal.close(blogger);
    } else {
      // this.modal.dismiss(null);
    }
  }

  cancel() {
    this.modal.dismiss(null);
  }

  private UR_exists(url: string){
    const http = new XMLHttpRequest();
    try {
      http.open('HEAD', url, false);
      http.send();
      return http.status!=404;
    } catch (error) {
      return false;
    }
 }
}
