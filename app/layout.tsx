import React from "react";
import {Metadata} from "next";
import BootstrapJSLoader from "./_components/BootstrapJSLoader";
import getMetadata from "./getMetadata";
import "./_styles/globals.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import {config} from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss = false;

export const metadata: Metadata = getMetadata();

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                {/* head tags */}
            </head>
            <body>
                {children}
                <BootstrapJSLoader />
            </body>
        </html>
    );
}
