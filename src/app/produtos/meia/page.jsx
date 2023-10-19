import Image from "next/image";
import Link from "next/link";

export default function Meia() {
  return (
    <div>
        <h1>MEIA</h1>
        <div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto dignissimos perspiciatis, quaerat eveniet id sequi voluptatum odio rem? Laboriosam, labore officiis itaque suscipit cum soluta exercitationem architecto provident. Reiciendis, neque?</p>
            <p><Link href="/">Voltar...</Link></p>
            <figure>
          <Image src="/img/img-meia.jpg" alt="Meias" width={640} height={575}/>
        </figure>
        </div>
    </div>
  )
}
