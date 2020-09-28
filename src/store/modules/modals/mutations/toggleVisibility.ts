import IState from '@/interfaces/IState';

export default (state: IState, payload: boolean): void => {
    state.showModal = !state.showModal;
}
