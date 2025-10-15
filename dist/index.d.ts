import * as socket_io from 'socket.io';
import { Server } from 'socket.io';
import * as express_serve_static_core from 'express-serve-static-core';
import http from 'http';

interface AppOptions {
    routes?: {
        path: string;
        router: any;
        middleware?: any;
    }[];
    enableSocket?: boolean;
    jwtSecret?: string;
    models?: {
        UserSocket: any;
    };
    onSocketConnect?: (socket: any, io: Server) => void;
    cronJobs?: {
        schedule: string;
        job: () => void;
    }[];
}
declare function createApp(options?: AppOptions): Promise<{
    app: express_serve_static_core.Express;
    server: http.Server<typeof http.IncomingMessage, typeof http.ServerResponse>;
    io: Server<socket_io.DefaultEventsMap, socket_io.DefaultEventsMap, socket_io.DefaultEventsMap, any>;
}>;

export { type AppOptions, createApp };
