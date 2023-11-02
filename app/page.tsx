import {faCheck} from '@fortawesome/free-solid-svg-icons';
import Image from "next/image";
import vercelLogo from "../public/vercel.svg";
import IconButton from './_components/IconButton';
import "./style.scss";

export default function Home() {
    return <>
        <div>
            <Image src={vercelLogo} alt="Vercel logo" style={{marginBottom: "2vmin"}}/>
            <h1>Hello!</h1>
            <p>This is a test page.</p>
            <IconButton
                icon={faCheck}
                className="btn-primary"
            >Test button</IconButton>
        </div>
    </>;
}
