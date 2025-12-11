import MainCard from "./Components/MainCard";
import QuizCard from "./Components/QuizCard";
export default function Home() {
  return (
<div className="h-screen w-full bg-[linear-gradient(107.96deg,#BECFEE_0%,#71C6E2_50%,#D9F4FA_75%,#BECFEE_100%)] flex items-center justify-center p-4">
  {/* MAIN CARD  */}
<div
  className="w-[90%] max-w-[1600px] h-[90vh]
      overflow-hidden
         rounded-[50px]
         border-[0.72px] border-white
         bg-[linear-gradient(112.86deg,rgba(255,255,255,0.4)_-6.68%,rgba(255,255,255,0.12)_45.63%,rgba(255,255,255,0.4)_103.45%)]
         backdrop-blur-xl
         shadow-[0_20px_60px_rgba(0,0,0,0.08)]
         p-5
         "
>
  {/* <MainCard/> */}
  <QuizCard/>
</div>
</div>
  );
}
