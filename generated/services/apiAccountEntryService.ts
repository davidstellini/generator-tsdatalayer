import {List, Service} from "tsmvc";

import {inject} from "inversify";
import {Promise} from "es6-promise";

//Current Import + Linked
import {apiAccount} from "../models/apiAccount";
import {apiAccountDataRepository} from "../data/apiAccountDataRepository";
import {apiAccountEntry} from "../models/apiAccountEntry";
import {apiAccountEntryDataRepository} from "../data/apiAccountEntryDataRepository";


@inject('apiAccount', 'apiAccountEntry')
export class apiAccountEntryService implements Service {

constructor(
	public apiAccountDataLayer : apiAccountDataRepository,
	public apiAccountEntryDataLayer : apiAccountEntryDataRepository){}


find(modelID : string) : Promise<apiAccountEntry> {
  return this.apiAccountEntryDataLayer.find(modelID);
}

findAll() : Promise<List<apiAccountEntry>> {
  return this.apiAccountEntryDataLayer.findAll();
}

findAllWith(query : string) : Promise<List<apiAccountEntry>> {
  return this.apiAccountEntryDataLayer.findAllWith(query);
}

addItem(modelItem : apiAccountEntry) : Promise<apiAccountEntry> {
  return this.apiAccountEntryDataLayer.addItem(modelItem);
}

removeItem(modelID : string) : Promise<apiAccountEntry> {
  return this.apiAccountEntryDataLayer.removeItem(modelID);
}


saveItem(modelItem : apiAccountEntry, modelId : string) : Promise<apiAccountEntry> {
  return this.apiAccountEntryDataLayer.saveItem(modelItem, modelId);
}


  getAccount(modelItem : apiAccountEntry) : Promise<apiAccount> {
    return this.apiAccountEntryDataLayer.getAccount(modelItem);
  }
}
