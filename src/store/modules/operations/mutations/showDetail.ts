import IState from '@/interfaces/IState';
import Operation from '@/data/models/Operation';

export default (state: IState, payload: Operation): void => {
    state.operation = payload;
}
