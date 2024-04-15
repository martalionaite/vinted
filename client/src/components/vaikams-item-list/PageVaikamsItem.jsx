import vaikamsImg from '../../assets/img/vaikams.jpeg';

export function PageVaikamsItem() {


    return (
        <>
            <section className="container px-4 ms-2">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                    <img src={vaikamsImg} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="320" height="500" loading="lazy" />
                    </div>
                    <div className="col-lg-6">
                        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Kostiumas</h1>
                        <p className="lead">Labai geros būklės vežimėlis.</p>
                        <ul className='ms-2 p-4'>
                            <li>Prekės ženklas: </li>
                            <li>Būklė: LABAI GERA</li>
                            <li>Vieta: VISAGINAS, LIETUVA</li>
                            <li>Mokėjimo būdai: Mokėjimo kortele</li>
                            <li>Įkelta: Prieš 35 minučių</li>
                        </ul>
                    </div>
                </div>
            </section>
           
        </>
    );
}