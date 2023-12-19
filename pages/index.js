import Articles from "@/sections/Articles";
import HomePage from "@/sections/HomePage";
import OnePlatform from "@/sections/OnePlatform";
import WhatWeDo from "@/sections/WhatWeDo";

export default function Home() {
  return (
    <main>
      <HomePage />
      <WhatWeDo />
      <OnePlatform />
      <Articles />
    </main>
  );
}
