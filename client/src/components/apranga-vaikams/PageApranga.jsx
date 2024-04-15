import { AprangaCard } from "./AprangaCard";



export function PageApranga() {
    return (
        <>
              <section className="container">
                    <h1>Aprangos page list</h1>
                <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-3">
                    <AprangaCard />
                    <AprangaCard />
                </div>
            </section>
        </>
    );
}