import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {FormControl, FormGroup, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';


// export interface Todo {
//     complited: boolean
//     title: string
//     id?: number
// }

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
        this.http.get('http://localhost:3001/tags').subscribe((response: any) => {
                this.tags = response;
            }
        );
    }

    submit() {
        const tag = this.form.get('tag').value;
        this.http.post('http://localhost:3001/tags/post', {tag: tag}).subscribe((response: any) => {
                console.log(response)
                this.tags.push(response);
            }
        );
        if (this.form.valid) {
            console.log(this.form);
            const formData = {...this.form.value}
            console.log(formData);
            this.form.reset();
        }
    }

    deleteTag(tag) {
        this.http.post('http://localhost:3001/tags/delete', {tag: tag}).subscribe((response: any) => {
                this.tags = this.tags.filter(item => item !== response);
            }
        );
    }
}
