import { Config } from './config';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ConfigService {
    configUrl: string = 'assets/config.json';

    constructor(private http: HttpClient) { }

    getConfig() {
        return this.http.get<Config>(this.configUrl);
    }
}