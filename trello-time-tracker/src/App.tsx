import { Separator } from "@/components/ui/separator"
import Header from "./components/Header"
import Aside from "./components/Aside"

function App() {

  return (
    <>
      <div id="header" className="w-full bg-inc-500">
        <Header />
      </div>

      <main className="flex h-full">
        <div className=" basis-1/4 lg:basis-1/4 xl:basis-1/5">
          <Aside />
        </div>

        <Separator orientation="vertical"/>

        <div id="content" className="basis-2/3 lg:basis-3/4 xl:basis-4/5">

        </div>
      </main>
    </>
  )
}

export default App
