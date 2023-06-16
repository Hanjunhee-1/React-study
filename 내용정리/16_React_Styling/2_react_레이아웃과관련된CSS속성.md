# 🔔 CSS 속성

- `display`

    - 레이아웃에서 가장 중요한 속성이라고 볼 수 있습니다. 대표적으로는 아래와 같은 값들이 존재합니다.

        1. `none`: element 를 화면에서 숨기기 위해 사용합니다. 
        
        2. `block`: element 를 블록 단위로 배치하기 위해 사용합니다.

        3. `inline`: element 를 라인 안에 넣기 위해 사용합니다.

        4. `flex`: element 를 블록 레벨의 flex container 로 표시하기 위해 사용합니다. 보통 정렬과 관련된 스타일을 구현하기 위해 많이 사용합니다. <br/><br/><br/><br/>


- `visibility`

    - element 를 화면에서 보여주거나 감추기 위해 사용합니다. 대표적으로는 아래와 같은 값들이 존재합니다.

        1. `visible`: element 를 화면에 보이게 합니다.

        2. `hidden`: element 를 화면에 안보이게 감춥니다. display: none; 과 헷갈릴 수 있는데 hidden 은 element 를 안보이게만 하고 화면에서의 영역은 그대로 차지합니다. <br/><br/><br/><br/>


- `position`

    - element 를 어디에 위치시킬 것인지 정의하기 위해 사용합니다. 대표적으로는 아래와 같은 값들이 존재합니다. 

        1. `static`: 기본값으로 element 를 원래의 순서대로 위치시킵니다.

        2. `fixed`: element 를 브라우저 window 에 상대적으로 위치시킵니다.

        3. `relative`: element 를 보통의 위치에 상대적으로 위치시킵니다. 

        4. `absolute`: element 를 절대적 위치에 위치시킵니다.<br/><br/><br/><br/>

    
- 길이와 관련된 속성들

    - `width`, `height`, `min-width`, `max-width`, `min-height`, `max-height` 등등이 있습니다. <br/><br/><br/><br/>


- `flexbox`

    - `flexbox` 는 정렬을 위해 사용하는 것으로 크게 `flex container` 와 `flex item` 으로 나뉩니다.

    - `flex item` 은 `flex container` 에 속하고 `flex container` 는 여러 개의 `flex item` 을 가질 수 있습니다.

    - flex container 로 지정해주기 위해서는 `display: flex;` 를 써주어야 합니다. <br/><br/><br/><br/>


- `flex-direction`

    - flex item 을 어떤 식으로 정렬해줄지 결정하기 위해 사용합니다. 대표적으로는 아래와 같은 값들이 있습니다. 

        1. `row`: 기본값이며 아이템을 row 를 따라 가로 순서대로 왼쪽부터 배치합니다.

        2. `column`: 아이템을 column 을 따라 세로 순서대로 위쪽부터 배치합니다.

        3. `row-reverse`: 아이템을 row 의 역방향으로 오른쪽부터 배치합니다.

        4. `column-reverse`: 아이템을 column 의 역방향으로 아래쪽부터 배치합니다. <br/><br/><br/><br/>


- `align-items`

    - `flex` 와 관련된 속성입니다. container 내부에서 item 을 어떻게 정렬할지 결정합니다. 대표적으로는 아래와 같은 값들이 있습니다. 

        1. `stretch`: 기본값으로서 item 을 늘려서 container 를 가득 채웁니다.

        2. `flex-start`: cross axis 의 시작 지점으로 item 을 정렬합니다. 

        3. `center`: cross axis 의 중앙으로 item 을 정렬합니다.

        4. `flex-end`: cross axis 의 끝 지점으로 item 을 정렬합니다.

        5. `baseline`: item 을 baseline 을 기준으로 정렬합니다. <br/><br/><br/><br/>


- `justify-content`

    - `flex` 와 관련된 속성입니다. container 내부에서 item 들을 어떻게 나란히 맞출 것인지를 결정합니다. 대표적으로는 아래와 같은 값들이 있습니다. 

        1. `flex-start`: main axis 의 시작 지점으로 item 을 맞춥니다.

        2. `center`: main axis 의 중앙으로 item 을 맞춥니다.

        3. `flex-end`: main axis 의 끝 지점으로 item 을 맞춥니다.

        4. `space-between`: main axis 를 기준으로 첫 item 은 시작 지점에 맞추고 마지막 item 은 끝 지점에 맞추며, 중간에 있는 item 들 사이의 간격이 일정하게 되도록 맞춥니다.

        5. `space-around`: main axis 를 기준으로 각 item 의 주변 간격을 동일하게 맞춥니다. 