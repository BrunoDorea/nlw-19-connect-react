import { defineConfig } from 'orval'

export default defineConfig({
    api: {
        input: 'https://devstage.onrender.com/docs/json',
        output: {
            target: './src/http/api.ts',
            client: 'fetch',
            httpClient: 'fetch',
            clean: true,
            baseUrl: 'https://devstage.onrender.com',
            override: {
                fetch: {
                    includeHttpResponseReturnType: false,
                }
            }
        }
    }
})