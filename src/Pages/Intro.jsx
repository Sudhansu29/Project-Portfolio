import { useEffect, useRef, useState } from "react";
import Navbar from "../Components/Navbar";

function Intro() {
  const [isJumping, setIsJumping] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);

  const [score, setScore] = useState(0);

  const [highScore, setHighScore] = useState(
    Number(localStorage.getItem("dinoHighScore")) || 0
  );

  const [gameSpeed, setGameSpeed] = useState(6);
  const [cactusPosition, setCactusPosition] = useState(100);
  const [cloudPosition, setCloudPosition] = useState(100);

  const dinoRef = useRef(null);
  const cactusRef = useRef(null);

  // Jump
  const jump = () => {
    if (isGameOver || isJumping) {
      return;
    }

    setIsJumping(true);

    setTimeout(() => {
      setIsJumping(false);
    }, 700);
  };

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (event) => {
      // Space / Arrow Up = Jump
      if (
        event.code === "Space" ||
        event.code === "ArrowUp"
      ) {
        event.preventDefault();

        jump();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isJumping, isGameOver]);

  // Cactus movement
  useEffect(() => {
    if (isGameOver) {
      return;
    }

    const cactusTimer = setInterval(() => {
      setCactusPosition((position) => {
        if (position <= -10) {
          return 100;
        }

        return position - gameSpeed / 10;
      });
    }, 30);

    return () => {
      clearInterval(cactusTimer);
    };
  }, [gameSpeed, isGameOver]);

  // Cloud movement
  useEffect(() => {
    if (isGameOver) {
      return;
    }

    const cloudTimer = setInterval(() => {
      setCloudPosition((position) => {
        if (position <= -15) {
          return 100;
        }

        return position - 0.15;
      });
    }, 30);

    return () => {
      clearInterval(cloudTimer);
    };
  }, [isGameOver]);

  // Score
  useEffect(() => {
    if (isGameOver) {
      return;
    }

    const scoreTimer = setInterval(() => {
      setScore((currentScore) => {
        const newScore = currentScore + 1;

        // Increase speed every 500 points
        if (newScore % 500 === 0) {
          setGameSpeed((speed) =>
            Math.min(speed + 1, 12)
          );
        }

        return newScore;
      });
    }, 100);

    return () => {
      clearInterval(scoreTimer);
    };
  }, [isGameOver]);

  // Collision detection
  useEffect(() => {
    if (isGameOver) {
      return;
    }

    const collisionTimer = setInterval(() => {
      if (
        !dinoRef.current ||
        !cactusRef.current
      ) {
        return;
      }

      const dino =
        dinoRef.current.getBoundingClientRect();

      const cactus =
        cactusRef.current.getBoundingClientRect();

      const collision =
        dino.left < cactus.right - 10 &&
        dino.right > cactus.left + 10 &&
        dino.bottom > cactus.top + 10;

      if (collision) {
        setIsGameOver(true);

        setHighScore((currentHighScore) => {
          const newHighScore = Math.max(
            currentHighScore,
            score
          );

          localStorage.setItem(
            "dinoHighScore",
            newHighScore
          );

          return newHighScore;
        });
      }
    }, 20);

    return () => {
      clearInterval(collisionTimer);
    };
  }, [isGameOver, score]);

  // Restart game
  const restartGame = () => {
    setIsGameOver(false);
    setIsJumping(false);
    setScore(0);
    setGameSpeed(6);
    setCactusPosition(100);
    setCloudPosition(100);
  };

  // Click game area to jump
  const handleGameClick = () => {
    if (!isGameOver) {
      jump();
    }
  };

  // Day / Night mode
  const isNight =
    Math.floor(score / 1000) % 2 === 1;

  return (
    <div
      className={`
        h-screen
        overflow-hidden
        transition-colors
        duration-1000
        ${
          isNight
            ? "bg-slate-950 text-white"
            : "bg-slate-100 text-slate-900"
        }
      `}
    >
      <Navbar />

      <main
        className="
          h-[calc(100vh-64px)]
          flex
          flex-col
          items-center
          justify-center
          px-3
          sm:px-5
          pt-8
          sm:pt-10
        "
      >
        {/* Dino Runner Heading */}
        <div
          className="
            flex
            items-center
            justify-center
            gap-3
            mb-2
          "
        >
          <span className="text-4xl sm:text-5xl">
            🦖
          </span>

          <h1
            className="
              text-2xl
              sm:text-3xl
              md:text-4xl
              font-bold
            "
          >
            Dino Runner
          </h1>
        </div>

        {/* Score */}
        <div
          className="
            flex
            items-center
            justify-center
            gap-6
            sm:gap-10
            mb-3
            font-mono
            text-sm
            sm:text-base
            md:text-lg
          "
        >
          <div>
            Score:{" "}
            <span className="font-bold">
              {String(score).padStart(5, "0")}
            </span>
          </div>

          <div>
            High Score:{" "}
            <span className="font-bold">
              {String(highScore).padStart(5, "0")}
            </span>
          </div>
        </div>

        {/* Game Screen */}
        <div
          onClick={handleGameClick}
          className={`
            relative
            w-full
            max-w-5xl
            h-[330px]
            sm:h-[380px]
            md:h-[420px]
            overflow-hidden
            border-b-4
            cursor-pointer
            select-none
            transition-colors
            duration-1000
            ${
              isNight
                ? "bg-slate-900 border-slate-600"
                : "bg-white border-slate-700"
            }
          `}
        >
          {/* Sun / Moon */}
          <div
            className={`
              absolute
              top-7
              right-8
              sm:right-12
              w-11
              h-11
              sm:w-14
              sm:h-14
              rounded-full
              transition-all
              duration-1000
              ${
                isNight
                  ? "bg-yellow-100 shadow-[0_0_25px_rgba(255,255,255,0.5)]"
                  : "bg-yellow-300 shadow-[0_0_25px_rgba(255,200,0,0.5)]"
              }
            `}
          />

          {/* Cloud 1 */}
          <div
            className="
              absolute
              top-12
              text-3xl
              sm:text-4xl
            "
            style={{
              left: `${cloudPosition}%`,
            }}
          >
            ☁️
          </div>

          {/* Cloud 2 */}
          <div
            className="
              absolute
              top-24
              text-2xl
              sm:text-3xl
              opacity-70
            "
            style={{
              left: `${cloudPosition + 35}%`,
            }}
          >
            ☁️
          </div>

          {/* Ground */}
          <div
            className={`
              absolute
              bottom-0
              left-0
              w-full
              h-1
              ${
                isNight
                  ? "bg-slate-500"
                  : "bg-slate-700"
              }
            `}
          />

          {/* Ground Details */}
          <div
            className={`
              absolute
              bottom-3
              left-0
              w-full
              text-xs
              sm:text-sm
              tracking-[15px]
              sm:tracking-[20px]
              whitespace-nowrap
              ${
                isNight
                  ? "text-slate-600"
                  : "text-slate-400"
              }
            `}
          >
            . . . . . . . . . . . . . . . . . . . .
          </div>

          {/* Dinosaur */}
          <div
            ref={dinoRef}
            className={`
              absolute
              left-8
              sm:left-12
              bottom-1
              text-5xl
              sm:text-6xl
              transition-transform
              ease-in-out
              ${
                isJumping
                  ? "-translate-y-[110px] scale-x-[-1]"
                  : "translate-y-0 scale-x-[-1]"
              }
            `}
            style={{
              transitionDuration: "700ms",
            }}
          >
            🦖
          </div>

          {/* Cactus */}
          <div
            ref={cactusRef}
            className="
              absolute
              bottom-1
              text-4xl
              sm:text-5xl
            "
            style={{
              left: `${cactusPosition}%`,
            }}
          >
            🌵
          </div>

          {/* Game Over Screen */}
          {isGameOver && (
            <div
              className="
                absolute
                inset-0
                bg-black/60
                flex
                flex-col
                items-center
                justify-center
              "
            >
              <h2
                className="
                  text-3xl
                  sm:text-4xl
                  font-bold
                  text-red-400
                  mb-2
                "
              >
                GAME OVER
              </h2>

              <p
                className="
                  text-white
                  text-lg
                  sm:text-xl
                  mb-4
                "
              >
                Score: {score}
              </p>

              <button
                onClick={(event) => {
                  event.stopPropagation();
                  restartGame();
                }}
                className="
                  px-6
                  py-2.5
                  bg-blue-600
                  hover:bg-blue-500
                  text-white
                  font-bold
                  rounded-lg
                  transition
                  active:scale-95
                "
              >
                🔄 Restart Game
              </button>
            </div>
          )}
        </div>

        {/* Jump Button */}
        {!isGameOver && (
          <button
            onClick={(event) => {
              event.stopPropagation();
              jump();
            }}
            className="
              mt-4
              px-10
              py-2.5
              bg-blue-600
              hover:bg-blue-500
              text-white
              rounded-lg
              font-bold
              text-base
              sm:text-lg
              shadow-lg
              transition
              active:scale-95
            "
          >
            🦘 JUMP
          </button>
        )}
      </main>
    </div>
  );
}

export default Intro;