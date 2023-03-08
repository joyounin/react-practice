import React from 'react';

function App() {
  /*
    리액트 컴포넌트는 단일 루트 노드만 랜더링 할 수 있다.
    
    오류:
      <h2>01</h2>
      <p>JSX Tutorial - HTML과 차이점</p>

    이유:
      변환되는 코드
      React.createElement('div', null, React.createElement('h2', null, '01'), null, React.createElement('o', null, 'JSX....'))
   */
  return (
    <div>
      <h2>02</h2>
      <p>JSX Tutorial - HTML과 차이점</p>
    </div>
  );
}

export default App;
