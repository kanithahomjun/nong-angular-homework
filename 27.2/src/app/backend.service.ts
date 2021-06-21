import { Injectable } from '@angular/core';
import { Dataabout, Datacontact, Dataportfolio, Dataskill } from './models/data';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor() { }

  getDataabout(): Dataabout[] {
    return [{
      name:"Kanitha Homjun",
      nickname:"Nong",
      age:21,
      height:167,
      weight:54
    }];
    }
  getDataportfolio(): Dataportfolio[] {
      return [{
        header:"No Portfolio",
      }];
      }
  getDataskill(): Dataskill[]{
    return [{
      skill:"Musical skills : No"
    },
    {
      skill:"Sports skills : VBL"
    },
    {
      skill:"Computer skills : Good"
    },
  ];
  }
  getDatacontact(): Datacontact[] {
    return [{
      facebook:"KK",
      email:"kanithahomjun@gmail.com",
      line:"KK",
      tel:"xxxxxxx"
    }];
    }
}
