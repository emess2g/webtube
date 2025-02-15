import PageHeader from "./layout/PageHeader";
import { CategoryPills} from "./components/CategoryPIlls"
import { categories, videos } from "./data/home";
import { useState } from "react";
import { VideoGridItem } from "./components/VideoGridItem";
import { Sidebar } from "./layout/Sidebar";

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0])
   return (
    <div className="min-h-screen flex flex-col">
      <PageHeader/>
      <div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto">
         <Sidebar/>
        <div className="overflow-x-hidden px-8 pb-4">
          {/* video */}
          <div className="sticky top-0 bg-white z-10 pb-4">
            <CategoryPills 
            selectedCategory={selectedCategory}
            onSelect={setSelectedCategory} 
            categories={categories}/>
          </div>
          <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
            {videos.map((video =>  (
              <VideoGridItem key={video.id} {...video}/>
            )))}
            
          </div>
        </div>
      </div>
    </div>
   )
}