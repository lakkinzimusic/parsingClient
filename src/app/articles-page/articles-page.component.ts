import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ChildMessageRenderer} from './child-message-renderer.component';

@Component({
    selector: 'app-articles-page',
    templateUrl: './articles-page.component.html',
    styleUrls: ['./articles-page.component.sass']
})
export class ArticlesPageComponent implements OnInit {
    title = 'parsingClient';
    articles = [];
    parsers = [];
    tags = [];
    modal_article = '';
    article_visible = false;
    columnArticles = [
        {field: 'header'},
        {field: 'domen'},
        {field: 'date'},
        {
            headerName: "Child/Parent",
            cellRenderer: "childMessageRenderer",
            width: 180
        }
    ];
    context = { componentParent: this };
    frameworkComponents = {
        childMessageRenderer: ChildMessageRenderer
    };
    columnTags = [
        {field: 'tag'},
    ];

    constructor(private http: HttpClient) {

    }

    ngOnInit() {
        this.http.get('http://localhost:3001').subscribe((response: any) => {
                this.articles = response;
            }
        );
        this.http.get('http://localhost:3001/get_all_parsers').subscribe((parsers: any) => {
                for (const parser in parsers) {
                    this.parsers.push(parsers[parser]);
                }
            }
        );
    }

    parse() {
        this.http.get('http://localhost:3001/parsing').subscribe((response: any) => {
                this.articles = response;
            }
        );
    }
    open_article(id) {
        this.http.post('http://localhost:3001/open_article', {id: id}).subscribe((response: any) => {
                this.modal_article = response;
                this.article_visible = true;
            }
        );
    }


    clean_db() {
        this.http.get('http://localhost:3001/clean_db').subscribe((response: any) => {
                this.articles = response;
            }
        );
    }

    change_parser_activity(parser) {
        this.http.post('http://localhost:3001/change_parser_activity', parser).subscribe((responseParser: any) => {
                this.parsers.forEach(item => {
                    if (item.KEY === responseParser.KEY) {
                        item.active = !item.active;
                    }
                });
            }
        );
    }
}
