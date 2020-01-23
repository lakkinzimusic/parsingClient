import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormControl, FormGroup, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
    selector: 'app-tags-page',
    templateUrl: './tags-page.component.html',
    styleUrls: ['./tags-page.component.sass']
})
export class TagsPageComponent implements OnInit {
    tags = [];
    form: FormGroup


    constructor(private http: HttpClient) {
    }

    ngOnInit() {
        this.form = new FormGroup({
            tag: new FormControl('', [
                Validators.required,
            ]),
        });
        this.http.get('http://localhost:3001').subscribe((response: any) => {
                this.tags = response.tags;
            }
        );
    }

    submit(tag) {
        this.http.post('http://localhost:3001/tags', tag).subscribe((response: any) => {
                console.log(response);
            }
        );
        if (this.form.valid) {
            console.log(this.form);
            const formData = {...this.form.value}
            console.log(formData);
            this.form.reset();
        }
    }
}
