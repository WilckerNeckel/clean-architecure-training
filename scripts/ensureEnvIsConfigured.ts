export function ensureEnvIsConfigured() {
    const mongoUri = process.env.MONGO_URI;

    if (!mongoUri) {
        throw new Error("Mongo env não setado");
    }
}
