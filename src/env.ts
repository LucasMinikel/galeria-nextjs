import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
    server: {
        APP_ENV: z.enum(["development", "test", "production"]).refine(
            (value) => value !== undefined,
            {
                message: "APP_ENV é obrigatório",
            }
        ),
    },
    client: {
    },
    experimental__runtimeEnv: {
        APP_ENV: process.env.APP_ENV,
    },
    emptyStringAsUndefined: true,
});