import { getHomepageAlbums } from "@/shared/api";

import { FreshAlbumsCarousel } from "./FreshAlbumsCarousel";

export const FreshAlbumsSection = async () => {
    const homepageAlbums = await getHomepageAlbums();
    return (
        <section>
            <div className="mb-4 leading-4">
                <h2 className="text-xl font-bold tracking-wide text-primary-darker md:text-2xl lg:text-3xl">
                    Fresh albums
                </h2>
                <p className="text-gray-400">Discover weekly</p>
            </div>
            <FreshAlbumsCarousel albumList={homepageAlbums} />
        </section>
    );
};