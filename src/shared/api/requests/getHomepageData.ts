import { z } from "zod";

import { albumSchema } from "../model/album/albumSchema";
import { songSchema } from "../model/song/songSchema";

const BASE_API_URL =
    process.env.NEXT_PUBLIC_BASE_API_URL ?? "http://localhost:4000";

export const getHomepageData = async () => {
    const response = await fetch(`${BASE_API_URL}/homepage`, {
        next: {
            revalidate: 60 * 60
        }
    });

    if (!response.ok) {
        throw new Error("Failed to fetch songs");
    }

    const data = await response.json();

    return z
        .object({
            songGroups: z.object({
                fresh: songSchema.array(),
                trendingWorldwide: songSchema.array(),
                bestOfToday: songSchema.array(),
                trendingRussia: songSchema.array()
            }),
            albums: albumSchema.array()
        })
        .parse(data);
};
