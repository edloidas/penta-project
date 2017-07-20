//
// webpack
//
declare var module: {
  hot : {
    accept(path: string, callback: () => void): void;
  };
};

//
// Actions
//
type GenericAction<T, P> = {
  type: T;
  payload: P;
}

type GenericActionCreator<T, P> = (payload: P, ...rest: any[]) => GenericAction<T, P>;

declare type PAction<P> = GenericAction<string, P>;

// declare type PActionCreator<P> = ActionCreator<Action<P>, P>;
declare type PActionCreator<P> = GenericActionCreator<string, P>;
