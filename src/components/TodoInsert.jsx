const TodoInsert = ()=>{
    return(

<form>
    {/* 리액트에서는 for 가 아닌 htmlfor */}
    <label className="sr-only" htmlFor="new">새 일정</label>
    <input type="text" id="new" autoFocus placeholder="새 일정을 입력하세요." autoComplete="off"/>
    <button type="button">추가</button>
</form>

    );
}
export default TodoInsert;