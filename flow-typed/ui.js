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

type GenericActionCreator<T, P> = (payload: P) => GenericAction<T, P>;

declare type Action<P> = GenericAction<string, P>;

declare type PActionCreator<P> = ActionCreator<Action<P>, P>
