import { ConfigService } from './config.service';
import { Component, OnInit, Input } from '@angular/core';
import { Config } from './config';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {
  configService: ConfigService;
  @Input() config: Config;

  @Input() nameHero: string = 'Superman'

  constructor() { }

  ngOnInit() {
  }

  showConfig() {
    this.configService.getConfig()
      .subscribe((data: Config) => this.config = {
        heroesUrl: data['heroesUrl'],
        textfile: data['textfile']
      });
  }
}
