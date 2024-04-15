import { VaikamsItemCard } from './VaikamsItemCard';


export function VaikamsItemList(){
    return (
        <section className="container">
             <h1>Vaikams all lists content</h1>
            <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-3">
                <VaikamsItemCard />
                <VaikamsItemCard />
                <VaikamsItemCard />
                <VaikamsItemCard />
                <VaikamsItemCard />
                <VaikamsItemCard />
            </div>
        </section>
    );
}