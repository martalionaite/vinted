import { AprangaMergaitemsItem } from "./apranga-mergaitems/AprangaMergaitemsItem";


export function PageVaikams(){
    return (
        <section className="container">
        
           <h1 className="title">Vaikams</h1>
           
           <hr />

            <div className="selected">
                <select className="option">
                    <option>Kategorija</option>
                    <option value="mergaitems">Apranga mergaitems</option>
                    <option value="berniukams">Apranga berniukams</option>
                    <option value="zaislai">Zaislai</option>
                    <option value="prieziura">Kudikiu ir vaiku prieziura</option>
                    <option value="vezimukai">Vezimukai</option>
                    <option value="judejimo">Judejimo priemones</option>
                    <option value="kedutes">Kedutes</option>
                    <option value="baldai">baldai vaikams</option>
                    <option value="mokyklos">Mokyklos reikmenys</option>
                </select>

                <select className="option">
                    <option>Dydis</option>
                    <option value="ankstukai">Ankstukai / iki 44 cm</option>
                    <option value="naujagimiai">Naujagimiai / 44 cm</option>
                    <option value="1menesio">Iki 1 mėnesio / 50 cm</option>
                </select>

                <select className="option">
                    <option>Prekių Ženklai</option>
                    <option value="Zara">Trefi</option>
                    <option value="Pepco">Xbox</option>
                </select>

                <select className="option">
                    <option>Būklė</option>
                    <option value="nauja">Nauja su etiketėmis</option>
                    <option value="labai-gera">Labai gera</option>
                    <option value="gera">Gera</option>
                    <option value="patenkinama">Patenkinama</option>
                </select>
            
                <select className="option">
                    <option>Spalva</option>
                    <option value="juoda">Juoda</option>
                    <option value="pilka">Pilka</option>
                    <option value="rozine">Rozine</option>
                    <option value="geltona">Geltona</option>
                </select>

                <select className="option">
                    <option>Kaina</option>
                </select>

                <select className="option">
                    <option>Medziaga</option>
                    <option value="akmuo">Akmuo</option>
                    <option value="auksas">Auksas</option>
                    <option value="bambukas">bambukas</option>
                    <option value="guma">Guma</option>
                </select>

                <select className="option">
                    <option>Rusiuoti pagal</option>
                    <option value="aktualiausi">Aktualiausi</option>
                    <option value="brangiausi">Kaina: brangiausi viršuje</option>
                    <option value="pigiausi">Kaina: pigiausi viršuje</option>
                    <option value="naujausi">Naujausi viršuje</option>
                </select>
            </div>

            <hr />

        <hr />

        <AprangaMergaitemsItem />
            </section>

    );
}
 