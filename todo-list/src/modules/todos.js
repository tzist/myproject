import { Map, List } from 'immutable';
import { handleActions, createAction } from 'redux-actions';

const INSERT = 'todos/INSERT';
const TOGGLE = 'todos/TOGGLE';
const REMOVE = 'todos/REMOVE';

export const insert = createAction(INSERT);
export const toggle = createAction(TOGGLE);
export const remove = createAction(REMOVE);

const initialState = List([
    Map({
        id: 0,
        text: '리액트 공부하기',
        done: true
    }),
    Map({
        id: 1,
        text: '컴포넌트 스타일링 해보기',
        done: false
    })
]);

export default handleActions({
    [INSERT]: (state, action) => {
        const { id, text, done } = action.payload;

        return state.push(Map({
            id,
            text,
            done
        }));
    },
    [TOGGLE]: (state, action) => {
        const { payload: id } = action;
        // = const id = action.payload;
        /*
            비구조화 할당으로 id 레퍼런스에 action.payload 값을 넣습니다.
            이 작업이 필수는 아니지만, 나중에 이 코드를 보았을 때 여기에서 payload가
            어떤 값을 의미하는지 쉽게 이해할 수 있습니다.
        */
       const index = state.findIndex(todo => todo.get('id') === id);
        return state.updateIn([index, 'done'], done => !done);
        /*
            updateIn을 사용하지 않는다면 다음과 같이 작성할 수도 있습니다.
            return state.setIn([index, 'done'], !state.getIn([index, 'done']));
        */   
    },
    [REMOVE]: (state, action) => {
        const { payload: id } = action;
        const index = state.findIndex(todo => todo.get('id') === id);
        console.log(id + ', ' + index);
        return state.delete(index);
    }
}, initialState)