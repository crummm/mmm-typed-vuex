import BaseAppStore from '@/store/BaseAppStore.module';
import AppStore from '@/store/AppStore.module';
import AppStoreHelper from '@/store/AppStoreHelper';
import { ActionContext } from 'vuex';

export default class CounterStore extends BaseAppStore {
  // state property typings
  public get count(): number { return this.state().CounterStore.count; }
  public set count(value: number) { value = value; }

  // typed mutations commits, actions dispatches, and getter accessors
  public commitDecrement(payload: number) { return this.commit('commitDecrement', payload); }
  public commitIncrement(payload: number) { return this.commit('commitIncrement', payload); }
  public dispatchDecrement(payload: number) { return this.dispatch('dispatchDecrement', payload); }
  public getCountX10(): number { return this.get('getCountX10'); }

  constructor(parentModule: BaseAppStore) {
    super('CounterStore', parentModule);

    this.setOptions(
      // this should be familiar...it's what you've already been doing (no magic here)
      {
        namespaced: true,
        state: {
          count: 0,
        },
        mutations: {
          commitIncrement(state: CounterStore, payload: number) {
            state.count -= payload;
          },
          commitDecrement(state: CounterStore, payload: number) {
            state.count += payload;
          },
        },
        actions: {
          dispatchDecrement: (context: ActionContext<CounterStore, AppStore>, payload: number) => {
            this.commitDecrement(payload);
            // dispatch to another module
            AppStoreHelper.dispatchChange('-');
          },
        },
        getters: {
          getCountX10: (state: CounterStore, getters: any): number => {
            return state.count * 10;
          },
        },
      },
    );
  }
}
