import CustomCard from "../components/card";
const data: any = [
  {
    lable: "Channel",
    src: "/logo-img.jpg",
    link: "https://t.me/SSCEUB",
  },
  {
    lable: "Super Group",
    src: "telegramLogoFill.png",
    link: "https://t.me/SSCEUBIR",
  },
  {
    lable: "Instagram",
    src: "/instagramLogo.png",
    link: "https://www.instagram.com/ssce_ubir?igsh=cDNmNDdyMnh5OHFk",
  },
];

export default function Home() {
  return (
    <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
      {data.map((data: any) => (
        <CustomCard
          key={data.lable}
          lable={data.lable}
          link={data.link}
          src={data.src}
        />
      ))}
    </div>
  );
}
