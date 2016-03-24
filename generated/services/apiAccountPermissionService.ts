import {List, Service} from "tsmvc";

import {inject} from "inversify";
import {Promise} from "es6-promise";

//Current Import + Linked
import {apiAccountRule} from "../models/apiAccountRule";
import {apiAccountRuleDataRepository} from "../data/apiAccountRuleDataRepository";
import {apiAccount} from "../models/apiAccount";
import {apiAccountDataRepository} from "../data/apiAccountDataRepository";
import {apiAccountPermission} from "../models/apiAccountPermission";
import {apiAccountPermissionDataRepository} from "../data/apiAccountPermissionDataRepository";


@inject('apiAccountRule', 'apiAccount', 'apiAccountPermission')
export class apiAccountPermissionService implements Service {

constructor(
	public apiAccountRuleDataLayer : apiAccountRuleDataRepository,
	public apiAccountDataLayer : apiAccountDataRepository,
	public apiAccountPermissionDataLayer : apiAccountPermissionDataRepository){}


find(modelID : string) : Promise<apiAccountPermission> {
  return this.apiAccountPermissionDataLayer.find(modelID);
}

findAll() : Promise<List<apiAccountPermission>> {
  return this.apiAccountPermissionDataLayer.findAll();
}

findAllWith(query : string) : Promise<List<apiAccountPermission>> {
  return this.apiAccountPermissionDataLayer.findAllWith(query);
}

addItem(modelItem : apiAccountPermission) : Promise<apiAccountPermission> {
  return this.apiAccountPermissionDataLayer.addItem(modelItem);
}

removeItem(modelID : string) : Promise<apiAccountPermission> {
  return this.apiAccountPermissionDataLayer.removeItem(modelID);
}


saveItem(modelItem : apiAccountPermission, modelId : string) : Promise<apiAccountPermission> {
  return this.apiAccountPermissionDataLayer.saveItem(modelItem, modelId);
}


  getAccountRule(modelItem : apiAccountPermission) : Promise<apiAccountRule> {
    return this.apiAccountPermissionDataLayer.getAccountRule(modelItem);
  }
  getAccount(modelItem : apiAccountPermission) : Promise<apiAccount> {
    return this.apiAccountPermissionDataLayer.getAccount(modelItem);
  }
}
