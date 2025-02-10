import { Parallax } from "react-parallax";

export default function Home() {

    return (
        <div className="min-h-screen flex items-center justify-center p-6">
            <div className="max-w-4xl text-center space-y-6">
                <h1 className="text-4xl text-yellow-400">
                    🎮 Monster Hunter: World – ¡Domina la caza en un mundo vivo! 🏹🐉
                </h1>
                <p className="text-lg">
                    ¡Bienvenido a <span className="text-red-400 ">Monster Hunter: World</span>, la experiencia de caza definitiva!
                    En este <span className="text-blue-400">RPG de acción</span>, te sumergirás en un ecosistema vibrante, donde cada cacería es una
                    batalla épica contra bestias colosales.
                </p>
                <Parallax
                    className="rounded-lg"
                    bgImage={"https://wallpapers.com/images/hd/monster-hunter-world-iceborne-nergigante-velkhana-ozate92fo344w3je.jpg"}
                    strength={300}
                    blur={2}
                >
                    <div className={`h-screen flex items-center justify-center`}>
                        <h1 className="text-white text-5xl ">Monster Hunter World: Iceborne <br /> ¡YA disponible!</h1>
                    </div>
                </Parallax>
                <div className="p-6 rounded-lg shadow-lg text-left">
                    <ul className="space-y-4">
                        <li>🔹 <span className=" text-green-400">Explora un mundo abierto y dinámico:</span> Desde frondosos bosques hasta ardientes desiertos, cada zona está repleta de vida y secretos por descubrir.</li>
                        <li>🔹 <span className=" text-red-400">Caza monstruos imponentes:</span> Enfréntate a criaturas únicas, cada una con su propio comportamiento y desafíos.</li>
                        <li>🔹 <span className=" text-yellow-400">Forja tu camino a la gloria:</span> Usa materiales de tus presas para crear poderosas armas y armaduras.</li>
                        <li>🔹 <span className=" text-blue-400">Juega solo o en cooperativo:</span> Une fuerzas con otros cazadores en línea y enfréntense juntos a las bestias más letales.</li>
                    </ul>
                </div>

                <p className="text-xl font-bold text-yellow-400">
                    🌟 ¡Demuestra tu habilidad, sobrevive a la caza y conviértete en la leyenda de la Comisión de Investigación! 🌟
                </p>

                <p className="text-lg ">
                    🎯 Disponible en <span className=" text-blue-500">PC</span>, <span className=" text-blue-600">PlayStation</span> y <span className=" text-green-500">Xbox</span>.
                    ¡Prepárate para la aventura definitiva!
                </p>
                <div className="grid grid-cols-3">
                    <img className="col-span-1" src="https://i.3djuegos.com/juegos/14998/monster_hunter_world/fotos/ficha/monster_hunter_world-3758233.jpg" alt="" />
                    <img className="col-span-1" src="https://m.media-amazon.com/images/I/91qC3P08FCL._AC_UF894,1000_QL80_.jpg" alt="" />
                    <img className="col-span-1" src="https://uvejuegos.com/img/caratulas/59330/one.jpg" alt="" />
                </div>
            </div>
        </div>
    );
}
