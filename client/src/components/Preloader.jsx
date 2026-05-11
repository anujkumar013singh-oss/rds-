import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

export default function Preloader({ onComplete }) {
  const counter3Ref = useRef(null)
  const counter1Ref = useRef(null)
  const counter2Ref = useRef(null)
  const [counter3Numbers, setCounter3Numbers] = useState([])

  useEffect(() => {
    // Generate numbers for counter-3
    const numbers = []
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 10; j++) {
        numbers.push(j)
      }
    }
    numbers.push(0)
    setCounter3Numbers(numbers)

    // Wait for DOM to be ready
    const timer = setTimeout(() => {
      const counter3 = counter3Ref.current
      const counter1 = counter1Ref.current
      const counter2 = counter2Ref.current

      if (counter3 && counter1 && counter2) {
        function animate(counter, duration, delay = 0) {
          const numHeight = counter.querySelector('.num').clientHeight
          const totalDistance = (counter.querySelectorAll('.num').length - 1) * numHeight
          gsap.to(counter, {
            y: -totalDistance,
            duration: duration,
            delay: delay,
            ease: 'power2.inOut',
          })
        }

        animate(counter3, 1.7)
        animate(counter2, 1.9)
        animate(counter1, 0.7, 1.25)
      }
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      // Digit animations
      gsap.to('.digit', {
        top: '-150px',
        stagger: {
          amount: 0.08,
        },
        delay: 1.88,
        duration: 0.32,
        ease: 'power4.inOut',
      })

      // Loader animations
      gsap.from('.loader-1', {
        width: 0,
        duration: 1.88,
        ease: 'power2.inOut',
      })

      gsap.from('.loader-2', {
        width: 0,
        delay: 0.6,
        duration: 0.63,
        ease: 'power2.inOut',
      })

      gsap.to('.loader', {
        background: 'none',
        delay: 1.88,
        duration: 0.03,
      })

      gsap.to('.loader-1', {
        rotate: 90,
        y: -50,
        duration: 0.15,
        delay: 1.88,
      })

      gsap.to('.loader-2', { x: -75, y: 75, duration: 0.15 }, '<')

      gsap.to('.loader', {
        scale: 40,
        duration: 0.32,
        delay: 2.2,
        ease: 'power2.inOut',
      })

      gsap.to('.loader', {
        rotate: 45,
        y: 500,
        x: 2000,
        duration: 0.32,
        delay: 2.2,
        ease: 'power2.inOut',
      })

      gsap.to('.loading-screen', {
        opacity: 0,
        duration: 0.15,
        delay: 2.35,
        ease: 'power1.inOut',
        onComplete: () => {
          if (onComplete) onComplete()
        },
      })
    }, 100)

    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <>
      <div className="loading-screen">
        <div className="loader">
          <div className="loader-1 bar"></div>
          <div className="loader-2 bar"></div>
        </div>
        <div className="counter">
          <div className="counter-1 digit" ref={counter1Ref}>
            <div className="num">0</div>
            <div className="num num1offset1">1</div>
          </div>
          <div className="counter-2 digit" ref={counter2Ref}>
            <div className="num">0</div>
            <div className="num num1offset2">1</div>
            <div className="num">2</div>
            <div className="num">3</div>
            <div className="num">4</div>
            <div className="num">5</div>
            <div className="num">6</div>
            <div className="num">7</div>
            <div className="num">8</div>
            <div className="num">9</div>
            <div className="num">0</div>
          </div>
          <div className="counter-3 digit" ref={counter3Ref}>
            <div className="num">0</div>
            {counter3Numbers.map((num, index) => (
              <div key={index} className="num">{num}</div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .loading-screen {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #000;
          color: #fff;
          z-index: 9999;
        }

        .counter {
          position: fixed;
          left: 50px;
          bottom: 50px;
          display: flex;
          height: 100px;
          font-size: 100px;
          line-height: 102px;
          clip-path: polygon(0 0, 100% 0, 100% 100px, 0 100px);
          font-weight: 400;
        }

        .counter-1,
        .counter-2,
        .counter-3 {
          position: relative;
          top: -15px;
        }

        .num1offset1 {
          position: relative;
          right: -25px;
        }

        .num1offset2 {
          position: relative;
          right: -10px;
        }

        .loader {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 300px;
          height: 50px;
          transform: translate(-50%, -50%);
          display: flex;
          background: rgb(80, 80, 80);
        }

        .loader-1 {
          position: relative;
          background: #fff;
          width: 200px;
        }

        .loader-2 {
          position: relative;
          width: 100px;
          background: #fff;
        }

        .bar {
          height: 50px;
        }
      `}</style>
    </>
  )
}
