import { useState } from 'react'

const LikeCountButton = () => {
  const [liked, setLiked] = useState<boolean>(false);
  const [count,setCount]=useState<number>(0);

  const handleLike=()=>{
    setLiked(true);
  }
  const handleDontLike=()=>{
    setLiked(false);
  }
  const handleCountPlus=()=>{
    setCount(count=>count+1)
  }
  const handleCountMinus=()=>{
    setCount(count=>count-1)
  }
  return (
    <>
      <button onClick={()=>{
        handleLike();
        handleCountPlus();
      }}><i>👍</i></button>
      <button onClick={()=>{
        handleDontLike();
        handleCountMinus();
      }}><i>👎</i></button>
      <p>You {liked===true?"":"dont"} like this page!</p>
      <p>Count: {count}</p>
    </>
  )
}

export default LikeCountButton
