import React from 'react';

function MyComponent(props) {
    return (
        <div>
            <h4>=====안녕하세요=====</h4>
        </div>
    )
}

/*2.비구조화 할당기법
function MyComponent({name, age}) {
    return (
        <div>
            안녕하세요 나의 이름은 {name}입니다.<br />
            나이는 {age}살 입니다.
        </div>
    )
}
*/

/*3.props 값이 없을 경우 디폴트값 설정
function MyComponent({name="강감찬", age="11"}) {
    return (
        <div>
            안녕하세요 나의 이름은 {name}입니다.<br />
            나이는 {age}살 입니다.
        </div>
    )
}
*/


export default MyComponent;