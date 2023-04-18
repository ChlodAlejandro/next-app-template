import type {NextPage} from 'next';
import Image from "next/image";
import vercelLogo from "../../public/vercel.svg";

const Home: NextPage = () => {
    return <>
        <style jsx>{`
            div {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                min-height: 100vh;
            }
        `}</style>
        <div>
            <Image src={vercelLogo} alt="Vercel logo" style={{marginBottom: "2vmin"}}/>
            <h1>Hello!</h1>
            <p>This is a test page.</p>
        </div>
    </>;
};

export default Home;
