
## 사이트 보며 효과 공부하기 📚
[https://minhpham.design/]

#### 설치해야할 라이브러리
npm i sass    
npm i gsap   
npm i framer-motion   

## 사용한 효과 (css)

mask 효과

클리핑마스크 mask-image: url('../public/mask.svg');   
마스크 위치값 mask-position: 50%;   
마스크 크기 mask-size: 50px;   
mask-repeat: no-repeat;   

움직이게 하는 효과 적용   
animate={{   
    WebkitMaskPosition: `${x}px ${y}px`,   
}}   

조금 더 스무스하게 적용   
transition={{ type: "tween", ease: "backOut", duration: 0.5 }}   
      
app.js
```js
<motion.div
            className='project__mask'
            animate={{
              WebkitMaskPosition: `${x}px ${y}px`,
            }}
            transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
          >
            "어려움은 극복해 나가는 것이다."<br />라는 말을 항상 기억합니다.
          </motion.div>
```
마우스 가운데 배치   
WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,   

```js
          <motion.div
            className='project__mask'
            animate={{
              WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
              WebkitMaskSize: `${size}px`,
            }}
            transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
          >
            <p onMouseEnter={() => { setIsHovered(true) }}
              onMouseLeave={() => { setIsHovered(false) }}>"어려움은 극복해 나가는 것이다."<br />라는 말을 항상 <span>기억합니다.</span> </p>
          </motion.div>
```

마우스 오버시 사이즈 커지는 효과 적용   
```
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMouse();
  const size = isHovered ? 500 : 50;

 <p onMouseEnter={() => { setIsHovered(true) }}
    onMouseLeave={() => { setIsHovered(false) }}>
```


useRef = id값 가져오는 것.
const section2Ref = useRef(null);