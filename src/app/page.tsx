"use client";
import BottomNav from "./components/BottomNav";
import { Hero, ProductHome, SpecialOffer, TaskerHome } from "./components/home";
import CategoriesFilter from "./components/home/CategoriesFilter";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 mx-auto px-4 max-w-screen-xl">
      <Navbar/>
      <Hero />
      <CategoriesFilter />
      <SpecialOffer />
      <TaskerHome />
      <ProductHome />
      <BottomNav/>
    </div>
  );
}
