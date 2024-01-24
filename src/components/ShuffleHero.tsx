import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const shuffle = (array: any) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: "/nodejs.png",
  },
  {
    id: 2,
    src: "/angular.png",
  },
  {
    id: 3,
    src: "/github.png",
  },
  {
    id: 4,
    src: "/css3.png",
  },
  {
    id: 5,
    src: "/html5.png",
  },
  {
    id: 6,
    src: "/internet.png",
  },
  {
    id: 7,
    src: "/mysql.png",
  },
  {
    id: 8,
    src: "/vue.png",
  },
  {
    id: 9,
    src: "/react.png",
  },
  {
    id: 10,
    src: "/android.png",
  },
  {
    id: 11,
    src: "/sql.png",
  },
  {
    id: 12,
    src: "/mongodb.png",
  },
  {
    id: 13,
    src: "/python.png",
  },
  {
    id: 14,
    src: "/ts.png",
  },
  {
    id: 15,
    src: "/js.png",
  },
  {
    id: 16,
    src: "/seo.png",
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq: any) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full "
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    ></motion.div>
  ));
};

export const ShuffleGrid = () => {
  const timeoutRef = useRef<any>(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq: any) => sq)}
    </div>
  );
};

export default ShuffleGrid;
