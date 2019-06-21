declare interface IDraftState {
    isChecked: boolean;
    content: string;
}

declare interface IStoreState {
    route: {
        location: Location
    }
    draft: IDraftState
}