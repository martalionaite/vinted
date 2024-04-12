import { AprangaMergaitemsCard } from "./AprangaMergaitemsCard";



export function AprangaMergaitems() {
    return (
        <>
              <section className="container">
                    <h1>Apranga Mergaitems page list</h1>
                <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-3">
                    <AprangaMergaitemsCard />
                    <AprangaMergaitemsCard />
                </div>
            </section>
        </>
    );
}