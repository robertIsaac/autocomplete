import { Component, OnInit } from '@angular/core';
import { SuggestionService } from '../services/suggestion.service';

@Component({
  selector: 'app-autocomplete-example',
  templateUrl: './autocomplete-example.component.html',
  styleUrls: ['./autocomplete-example.component.scss']
})
export class AutocompleteExampleComponent implements OnInit {

  text: string;

  results: string[];

  constructor(
    protected suggestionService: SuggestionService
  ) {
  }

  ngOnInit() {
  }

  search() {
    this.suggestionService.getResults().subscribe(data => {
      this.results = data;
    });
  }

}
