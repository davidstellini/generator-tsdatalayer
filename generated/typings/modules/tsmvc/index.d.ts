// Generated by typings
// Source: node_modules/tsmvc/lib/classes/helper/ApiParser.d.ts
declare module '~tsmvc/lib/classes/helper/ApiParser' {
import { List } from '~tsmvc/lib/classes/helper/List';
import { Parser } from '~tsmvc/lib/classes/helper/Parser';
export class ApiParser<T> implements Parser<T> {
    Parse(objType: {
        new (): T;
    }, json: any): T;
    ParseList(objType: {
        new (): T;
    }, jsonString: string): List<T>;
}
}
declare module 'tsmvc/lib/classes/helper/ApiParser' {
import alias = require('~tsmvc/lib/classes/helper/ApiParser');
export = alias;
}

// Generated by typings
// Source: node_modules/tsmvc/lib/classes/helper/Parser.d.ts
declare module '~tsmvc/lib/classes/helper/Parser' {
import { List } from '~tsmvc/lib/classes/helper/List';
export interface Parser<T> {
    ParseList(objType: {
        new (): T;
    }, jsonString: string): List<T>;
    Parse(objType: {
        new (): T;
    }, json: any): any;
}
}
declare module 'tsmvc/lib/classes/helper/Parser' {
import alias = require('~tsmvc/lib/classes/helper/Parser');
export = alias;
}

// Generated by typings
// Source: node_modules/tsmvc/lib/classes/helper/ApiRepository.d.ts
declare module '~tsmvc/lib/classes/helper/ApiRepository' {
import { Model } from '~tsmvc/lib/interfaces/model/Model';
import { List } from '~tsmvc/lib/classes/helper/List';
import { DataRepository } from '~tsmvc/lib/interfaces/data/DataRepository';
import { Promise } from '~tsmvc~es6-promise';
import { ApiRequestDecorator } from '~tsmvc/lib/classes/helper/ApiRequestDecorator';
import { Parser } from '~tsmvc/lib/classes/helper/Parser';
export abstract class ApiRepository<T extends Model> implements DataRepository<T> {
    requestDecorator: ApiRequestDecorator;
    parser: Parser<T>;
    abstract getModelType(): {
        new (): any;
    };
    abstract getUrl(): string;
    exists(modelID: string): Promise<boolean>;
    getRange(modelIDList: List<string>): Promise<List<T>>;
    count(): number;
    findAllWith(query: string): Promise<List<T>>;
    buildReqOptions(requestType: string, url: string, model: any): any;
    buildRequestAndParseAsT<T>(url: string, requestType: string, model: T, parser: Parser<T>): Promise<T>;
    buildRequestAndParseAsTList<T extends Model>(url: string, requestType: string, model: T, parser: Parser<T>): Promise<List<T>>;
    /** Makes a request. If model is not null, it will pass it to the request
    as JSON. It will parse the response using the parser function provided,
    encapsulated in a promise. Uses default item parser. */
    buildRequestAndParseAsModel(url: string, requestType: string, model: any): Promise<T>;
    buildRequestAndParseAsModelList(url: string, requestType: string, model: any): Promise<List<T>>;
    find(modelID: string): Promise<T>;
    findAll(): Promise<List<T>>;
    addItem(modelItem: T): Promise<T>;
    removeItem(modelID: string): Promise<T>;
    saveItem(modelItem: T, modelID: string): Promise<T>;
}
}
declare module 'tsmvc/lib/classes/helper/ApiRepository' {
import alias = require('~tsmvc/lib/classes/helper/ApiRepository');
export = alias;
}

// Generated by typings
// Source: node_modules/tsmvc/lib/classes/helper/ApiRequestDecorator.d.ts
declare module '~tsmvc/lib/classes/helper/ApiRequestDecorator' {
export interface ApiRequestDecorator {
    decorateRequest(request: any): any;
}
}
declare module 'tsmvc/lib/classes/helper/ApiRequestDecorator' {
import alias = require('~tsmvc/lib/classes/helper/ApiRequestDecorator');
export = alias;
}

// Generated by typings
// Source: node_modules/tsmvc/lib/classes/helper/List.d.ts
declare module '~tsmvc/lib/classes/helper/List' {
export class List<T> {
    private items;
    constructor();
    size(): number;
    add(value: T): void;
    get(index: number): T;
    first(): T;
    last(): T;
    getArray(): Array<T>;
}
}
declare module 'tsmvc/lib/classes/helper/List' {
import alias = require('~tsmvc/lib/classes/helper/List');
export = alias;
}

// Generated by typings
// Source: https://raw.githubusercontent.com/typed-typings/npm-es6-promise/fb04188767acfec1defd054fc8024fafa5cd4de7/dist/es6-promise.d.ts
declare module '~tsmvc~es6-promise/dist/es6-promise' {
export interface Thenable <R> {
  then <U> (onFulfilled?: (value: R) => U | Thenable<U>, onRejected?: (error: any) => U | Thenable<U>): Thenable<U>;
  then <U> (onFulfilled?: (value: R) => U | Thenable<U>, onRejected?: (error: any) => void): Thenable<U>;
}

export class Promise <R> implements Thenable <R> {
  /**
   * If you call resolve in the body of the callback passed to the constructor,
   * your promise is fulfilled with result object passed to resolve.
   * If you call reject your promise is rejected with the object passed to resolve.
   * For consistency and debugging (eg stack traces), obj should be an instanceof Error.
   * Any errors thrown in the constructor callback will be implicitly passed to reject().
   */
  constructor (callback: (resolve : (value?: R | Thenable<R>) => void, reject: (error?: any) => void) => void);

  /**
   * onFulfilled is called when/if "promise" resolves. onRejected is called when/if "promise" rejects.
   * Both are optional, if either/both are omitted the next onFulfilled/onRejected in the chain is called.
   * Both callbacks have a single parameter , the fulfillment value or rejection reason.
   * "then" returns a new promise equivalent to the value you return from onFulfilled/onRejected after being passed through Promise.resolve.
   * If an error is thrown in the callback, the returned promise rejects with that error.
   *
   * @param onFulfilled called when/if "promise" resolves
   * @param onRejected called when/if "promise" rejects
   */
  then <U> (onFulfilled?: (value: R) => U | Thenable<U>, onRejected?: (error: any) => U | Thenable<U>): Promise<U>;
  then <U> (onFulfilled?: (value: R) => U | Thenable<U>, onRejected?: (error: any) => void): Promise<U>;

  /**
   * Sugar for promise.then(undefined, onRejected)
   *
   * @param onRejected called when/if "promise" rejects
   */
  catch <U> (onRejected?: (error: any) => U | Thenable<U>): Promise<U>;

  /**
   * Make a new promise from the thenable.
   * A thenable is promise-like in as far as it has a "then" method.
   */
  static resolve (): Promise<void>;
  static resolve <R> (value: R | Thenable<R>): Promise<R>;

  /**
   * Make a promise that rejects to obj. For consistency and debugging (eg stack traces), obj should be an instanceof Error
   */
  static reject <R> (error: any): Promise<R>;

  /**
   * Make a promise that fulfills when every item in the array fulfills, and rejects if (and when) any item rejects.
   * the array passed to all can be a mixture of promise-like objects and other objects.
   * The fulfillment value is an array (in order) of fulfillment values. The rejection value is the first rejection value.
   */
  static all<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(values: [T1 | Thenable<T1>, T2 | Thenable<T2>, T3 | Thenable<T3>, T4 | Thenable <T4>, T5 | Thenable<T5>, T6 | Thenable<T6>, T7 | Thenable<T7>, T8 | Thenable<T8>, T9 | Thenable<T9>, T10 | Thenable<T10>]): Promise<[T1, T2, T3, T4, T5, T6, T7, T8, T9, T10]>;
  static all<T1, T2, T3, T4, T5, T6, T7, T8, T9>(values: [T1 | Thenable<T1>, T2 | Thenable<T2>, T3 | Thenable<T3>, T4 | Thenable <T4>, T5 | Thenable<T5>, T6 | Thenable<T6>, T7 | Thenable<T7>, T8 | Thenable<T8>, T9 | Thenable<T9>]): Promise<[T1, T2, T3, T4, T5, T6, T7, T8, T9]>;
  static all<T1, T2, T3, T4, T5, T6, T7, T8>(values: [T1 | Thenable<T1>, T2 | Thenable<T2>, T3 | Thenable<T3>, T4 | Thenable <T4>, T5 | Thenable<T5>, T6 | Thenable<T6>, T7 | Thenable<T7>, T8 | Thenable<T8>]): Promise<[T1, T2, T3, T4, T5, T6, T7, T8]>;
  static all<T1, T2, T3, T4, T5, T6, T7>(values: [T1 | Thenable<T1>, T2 | Thenable<T2>, T3 | Thenable<T3>, T4 | Thenable <T4>, T5 | Thenable<T5>, T6 | Thenable<T6>, T7 | Thenable<T7>]): Promise<[T1, T2, T3, T4, T5, T6, T7]>;
  static all<T1, T2, T3, T4, T5, T6>(values: [T1 | Thenable<T1>, T2 | Thenable<T2>, T3 | Thenable<T3>, T4 | Thenable <T4>, T5 | Thenable<T5>, T6 | Thenable<T6>]): Promise<[T1, T2, T3, T4, T5, T6]>;
  static all<T1, T2, T3, T4, T5>(values: [T1 | Thenable<T1>, T2 | Thenable<T2>, T3 | Thenable<T3>, T4 | Thenable <T4>, T5 | Thenable<T5>]): Promise<[T1, T2, T3, T4, T5]>;
  static all<T1, T2, T3, T4>(values: [T1 | Thenable<T1>, T2 | Thenable<T2>, T3 | Thenable<T3>, T4 | Thenable <T4>]): Promise<[T1, T2, T3, T4]>;
  static all<T1, T2, T3>(values: [T1 | Thenable<T1>, T2 | Thenable<T2>, T3 | Thenable<T3>]): Promise<[T1, T2, T3]>;
  static all<T1, T2>(values: [T1 | Thenable<T1>, T2 | Thenable<T2>]): Promise<[T1, T2]>;
  static all<T1>(values: [T1 | Thenable<T1>]): Promise<[T1]>;
  static all<TAll>(values: Array<TAll | Thenable<TAll>>): Promise<TAll[]>;

  /**
   * Make a Promise that fulfills when any item fulfills, and rejects if any item rejects.
   */
  static race <R> (promises: (R | Thenable<R>)[]): Promise<R>;
}

/**
 * The polyfill method will patch the global environment (in this case to the Promise name) when called.
 */
export function polyfill (): void;
}
declare module '~tsmvc~es6-promise' {
import alias = require('~tsmvc~es6-promise/dist/es6-promise');
export = alias;
}

// Generated by typings
// Source: node_modules/tsmvc/lib/interfaces/data/DataRepository.d.ts
declare module '~tsmvc/lib/interfaces/data/DataRepository' {
import { Model } from '~tsmvc/lib/interfaces/model/Model';
import { List } from '~tsmvc/lib/classes/helper/List';
import { Promise } from '~tsmvc~es6-promise';
export interface DataRepository<T extends Model> {
    getModelType(): {
        new (): any;
    };
    find(modelID: string): Promise<T>;
    exists(modelID: string): Promise<boolean>;
    findAll(): Promise<List<T>>;
    findAllWith(query: string): Promise<List<T>>;
    getRange(modelIDList: List<string>): Promise<List<T>>;
    count(): number;
    addItem(modelItem: T): Promise<T>;
    removeItem(modelID: string): Promise<T>;
    saveItem(modelItem: T, modelID: string): Promise<T>;
}
}
declare module 'tsmvc/lib/interfaces/data/DataRepository' {
import alias = require('~tsmvc/lib/interfaces/data/DataRepository');
export = alias;
}

// Generated by typings
// Source: node_modules/tsmvc/lib/interfaces/model/Serializable.d.ts
declare module '~tsmvc/lib/interfaces/model/Serializable' {
export abstract class Serializable {
    readInto(obj: any): void;
    stringify(): string;
}
}
declare module 'tsmvc/lib/interfaces/model/Serializable' {
import alias = require('~tsmvc/lib/interfaces/model/Serializable');
export = alias;
}

// Generated by typings
// Source: node_modules/tsmvc/lib/interfaces/model/Model.d.ts
declare module '~tsmvc/lib/interfaces/model/Model' {
import { Serializable } from '~tsmvc/lib/interfaces/model/Serializable';
export abstract class Model extends Serializable {
    getIndex(): string;
}
export function indexKey(target: any, name: any): void;
}
declare module 'tsmvc/lib/interfaces/model/Model' {
import alias = require('~tsmvc/lib/interfaces/model/Model');
export = alias;
}

// Generated by typings
// Source: node_modules/tsmvc/lib/interfaces/service/Service.d.ts
declare module '~tsmvc/lib/interfaces/service/Service' {
export interface Service {
}
}
declare module 'tsmvc/lib/interfaces/service/Service' {
import alias = require('~tsmvc/lib/interfaces/service/Service');
export = alias;
}

// Generated by typings
// Source: node_modules/tsmvc/lib/index.d.ts
declare module '~tsmvc/lib/index' {
export * from '~tsmvc/lib/classes/helper/ApiParser';
export * from '~tsmvc/lib/classes/helper/Parser';
export * from '~tsmvc/lib/classes/helper/ApiRepository';
export * from '~tsmvc/lib/classes/helper/ApiRequestDecorator';
export * from '~tsmvc/lib/classes/helper/List';
export * from '~tsmvc/lib/interfaces/data/DataRepository';
export * from '~tsmvc/lib/interfaces/model/Model';
export * from '~tsmvc/lib/interfaces/service/Service';
}
declare module 'tsmvc/lib/index' {
import alias = require('~tsmvc/lib/index');
export = alias;
}
declare module 'tsmvc' {
import alias = require('~tsmvc/lib/index');
export = alias;
}
