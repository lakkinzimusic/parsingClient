import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'parsingClient';
  articles = [];
  tags = [];
  columnArticles = [
    {field: 'header' },
    {field: 'domen' },
    {field: 'date'}
  ];

  columnTags = [
    {field: 'tag' },
  ];

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get('http://localhost:3001').subscribe((response: any) => {
        // let datad = JSON.parse(data);
        console.log(response.tags)
        this.articles = response.articles;
        this.tags = response.tags;
      }
    );
  }


}
