# 🔔 섭씨온도와 화씨온도 표시하기

- 이번에는 Shared State 를 활용하여 섭씨온도와 화씨온도를 표시해주는 컴포넌트를 만들어볼 것입니다.

- 사용자에게 온도를 입력받는 컴포넌트를 만들어줍니다.
    ```js
        // TemperatureInput.jsx
        const scaleNames = {
            c: '섭씨',
            f: '화씨',
        };

        export default function TemperatureInput(props) {
            const handleChange = (event) => {
                props.onTemperatureChange(event.target.value);
            };

            return (
                <fieldset>
                    <legend>
                        온도를 입력해주세요(단위:{scaleNames[props.scale]}):
                    </legend>
                    <input value={props.temperature} onChange={handleChange} />
                </fieldset>
            )
        }
    ```
    - scaleNames 는 섭씨 혹은 화씨로 입력받는 칸을 나눠주기 위해 만들어주었습니다.
    - 위의 코드에서 Shared State 가 사용될 곳은 handleChange 함수 부분입니다. 상위 컴포넌트에서 공유해준 함수를 활용하여 값이 바뀔때마다 하위 컴포넌트에서도 값이 변할 수 있게 해주는 부분입니다. <br/><br/><br/>

- 물이 끓는지에 대한 여부와 온도를 각 단위에 맞추어 변환해주는 컴포넌트를 만들어줍니다.
    ```js
        // Calculator.jsx
        import { useState } from "react";
        import TemperatureInput from "./TemperatureInput";

        function BoilingVerdict(props) {
            if (props.celius >= 100) {
                return <p>물이 끓습니다.</p>
            }
            return <p>물이 끓지 않습니다.</p>
        }

        function toCelius(fahrenheit) {
            return((fahrenheit - 32) * 5) / 9;
        }

        function toFahrenheit(celius) {
            return (celius * 9) / 5 + 32;
        }

        function tryConvert(temperature, convert) {
            const input = parseFloat(temperature);
            
            if (Number.isNaN(input)) {
                return '';
            }

            const output = convert(input);
            const rounded = Math.round(output * 1000) / 1000;
            return rounded.toString();
        }


        export default function Calculator(props) {
            const [temperature, setTemperature] = useState('');
            const [scale, setScale] = useState('c');

            const handleCeliusChange = (temperature) => {
                setTemperature(temperature);
                setScale('c');
            }

            const handleFahrenheitChange = (temperature) => {
                setTemperature(temperature);
                setScale('f');
            }

            const celius = scale === 'f' ? tryConvert(temperature, toCelius) : temperature;
            const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

            return (
                <div>
                    <TemperatureInput 
                        scale='c'
                        temperature={celius}
                        onTemperatureChange={handleCeliusChange}
                    />
                    <TemperatureInput 
                        scale='f'
                        temperature={fahrenheit}
                        onTemperatureChange={handleFahrenheitChange}
                    />
                    <BoilingVerdict celius={parseFloat(celius)}/>
                </div>
            )
        }
    ```
    - 코드가 길어서 좀 어려워보이지만 전체적인 흐름은 다음과 같습니다.
        
        1. TemperatureInput 컴포넌트의 내용이 렌더링됩니다.
        2. 사용자는 섭씨온도 또는 화씨온도를 입력합니다.

            - 섭씨온도를 표시해주는 곳은 TemperatureInput 컴포넌트에 props 로 scale, temperature, onTemperatureChange 를 넘겨줍니다.
            - 만약 사용자가 섭씨온도를 입력했다면 TemperatureInput 컴포넌트의 onChange 관련 함수가 실행됩니다.
            - onTemperatureChange 함수가 실행될 것인데 섭씨온도를 입력하는 곳은 handleCeliusChange 함수가 들어있으므로 해당 함수가 실행되는 것입니다.
            - 현재 temperature 변수에는 섭씨온도에 대한 정보가 들어있으므로 celius 변수에는 temperature 의 정보가 그대로 들어가고 fahrenheit 변수에는 tryConvert 함수의 결과가 들어가게 됩니다. 
            - 위의 과정을 거쳐 총 2개의 TemperatureInput 컴포넌트에는 각각 섭씨온도와 화씨온도를 표시해줄 수 있게 됩니다. 
        
        3. 물이 끓는지 안끓는지에 대한 여부는 BoilingVerdict 컴포넌트를 통해 알 수 있습니다. 