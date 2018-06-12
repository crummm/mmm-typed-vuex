export declare class StoreModule {
    static rootStore: any;
    moduleNamespace: string;
    parentModule: StoreModule;
    store: any;
    state: any;
    protected _modulePathCacheMap: {
        [path: string]: string;
    };
    constructor();
    init(store: any): void;
    setOptions(options: any): void;
    getModulePath(module: StoreModule, path?: string): string;
    commit(mutationName: string, payload?: any, options?: any): any;
    dispatch(actionName: string, payload?: any, options?: any): any;
    get(getterName: string): any;
    protected _processModulePath(module: StoreModule, path?: string): string;
}
