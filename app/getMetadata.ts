import {Metadata} from "next";

export const defaultMetadata = {
    title: "website title",
    description: "website description",
    image: "/favicon.ico",
    imageAlt: "website icon",
    metadataBase: 'https://example.com'
};

export type MetadataOptions = Partial<{ [k in keyof typeof defaultMetadata]: string }>;

export default function getMetadata(customMetadata: MetadataOptions = {}): Metadata {
    const metadata = Object.assign({}, defaultMetadata, customMetadata);
    if (metadata.title !== defaultMetadata.title) {
        metadata.title += ` | ${defaultMetadata.title}`;
    }

    return {
        metadataBase: new URL(metadata.metadataBase),
        title: metadata.title,
        description: metadata.description,
        twitter: {
            card: "summary",
            site: "@toolfrog",
            siteId: "1444916804472557569",
            creator: "@toolfrog",
            creatorId: "1444916804472557569",
            images: {
                url: metadata.image,
                alt: metadata.imageAlt
            }
        },
        openGraph: {
            title: metadata.title,
            description: metadata.description,
            siteName: metadata.title,
            images: {
                url: metadata.image,
                alt: metadata.imageAlt
            },
            locale: "en-US",
            type: "website"
        }
    };
}
