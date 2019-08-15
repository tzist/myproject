const loggerMiddleware = store => next => action => {
    /* 미들웨어 내용 */

    // 현재 스토어 상태 값 기록
    console.log('현재 상태', store.getState());
    // 액션 기록
    console.log('액션', action);

    // 액션을 다음 미들웨어 또는 리듀서로 넘깁니다.
    // 액션을 무시하려면 next를 호출하지 않고 return 하면 됩니다.
    // 또는 액션 정보를 가로채서 수정한 후 리듀서로 전달할 수도 있습니다.
    const result = next(action);

    // 액션 처리 후의 스토어 상태를 기록합니다.
    console.log('다음 상태', store.getState());
    console.log('\n'); // 기록 구분을 위한 빈 줄 프린트

    // 여기에서 반환하는 값은 store.dispatch(ACTION_TYPE)했을 때 결과로 설정합니다.
    return result;
}

export default loggerMiddleware;