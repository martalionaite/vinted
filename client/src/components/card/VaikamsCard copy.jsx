import { Card } from './Card';

export function VaikamsCard() {
    return (
        <section className="container">
            <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-3">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </section>
    );
}
