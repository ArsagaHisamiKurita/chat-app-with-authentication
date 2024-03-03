import Image from "next/image";

const Index = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="grid items-center justify-center">
        <h1 className="font-roboto text-[56px] font-bold">front chat app</h1>
      </div>
      <div className="h-svh">
        <img src="/images/fv.jpg" width={1792} height={2304} alt="" className="w-full h-full object-cover" />
      </div>
    </div>
  );
}

export default Index;