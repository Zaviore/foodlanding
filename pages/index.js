import Head from "next/head";
import Image from "next/image";
import Site from "../component/layout/site";
import Heroselection from "../component/pages/home/heroselection";
import Category from "../component/pages/home/category";
import Trending from "../component/pages/home/trending";
export default function Home() {
  return (
    <div>
      <Site>
        <Heroselection />
        <Category />
        <Trending />
      </Site>
    </div>
  );
}
