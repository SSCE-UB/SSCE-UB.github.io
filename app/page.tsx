import CustomCard from "../components/card";
const data: any = [
  {
    lable: "SSCE-UB",
    src: "/computerE.jpg",
    link: "https://t.me/SSCEUBIR",
  }, {
    lable: "SSCE-UB",
    src: "/logo-img.jpg",
    link: "https://t.me/SSCEUB",
  }, {
    lable: "teste3",
    src: "../public/vercel.svg",
    link: "#",
  }
]
export default function Home() {

  return (
    <div className="flex flex-wrap justify-center h-full items-center gap-6">
      {data.map((data: any) => <CustomCard key={data.lable} lable={data.lable} src={data.src} link={data.link} />)}
    </div>
  );
}
